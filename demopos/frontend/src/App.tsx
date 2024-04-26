import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Container, createTheme } from "@mui/material";
import ReportPage from "./components/pages/ReportPage";
import ShopPage from "./components/pages/ShopPage";
import StockCreatePage from "./components/pages/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage";
import StockPage from "./components/pages/StockPage";
import TransactionPage from "./components/pages/TransactionPage";
import { useSelector } from "react-redux";
import { authSelector, relogin } from "./store/slices/authSlice";
import { useAppDispatch } from "./store/store";
import PublicRoutes from "@/router/public.routes";
import ProtectedRoutes from "@/router/protected.routes";
import { ThemeProvider } from "@emotion/react";
import backgroundMenuImage from "@/assets/images/background_menu.jpg";
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: `url(${backgroundMenuImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f2fcff",
            backgroundPosition: "bottom",
            width: drawerWidth,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
    },
    spacing: 8,
    typography: {
      fontFamily: "Chakra Petch",
      // fontFamily: "Roboto",
      fontWeightLight: 100,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
    palette: {
      primary: import.meta.env.VITE_IS_PRODUCTION === "1" ? { main: "#0096d3" } : blue,
      background: {
        default: "#B8F4FF33",
      },
    },
  });

  const [open, setOpen] = React.useState(true);
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    // Called during component is being created
    dispatch(relogin());
  }, [dispatch]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {authReducer.isAuthented && <Header open={open} handleDrawerOpen={handleDrawerOpen} />}
        {authReducer.isAuthented && <Menu open={open} handleDrawerClose={handleDrawerClose} />}
        {!authReducer.isAuthenticating && (
          <Main open={open}>
            <Container>
              <DrawerHeader />
              <div>
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<PublicRoutes isAuthented={authReducer.isAuthented} />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                  </Route>

                  {/* Protected routes */}
                  <Route path="/" element={<ProtectedRoutes isAuthented={authReducer.isAuthented} />}>
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/stock" element={<StockPage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/stock/create" element={<StockCreatePage />} />
                    <Route path="/stock/edit/:id" element={<StockEditPage />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/transaction" element={<TransactionPage />} />
                  </Route>
                </Routes>
              </div>
            </Container>
          </Main>
        )}
      </Box>
    </ThemeProvider>
  );
}
