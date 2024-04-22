import waitingForSaleImage from "@/assets/images/waiting_for_sale.png";
import Payment from "@/components/fragments/Payment";
import { addOrder, removeOrder, shopSelector, togglePayment } from "@/store/slices/shopSlice";
import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.type";
import { imageUrl } from "@/utils/constants";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarsIcon from "@mui/icons-material/Stars";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";

const classes = {
  root: {
    width: "100%",
    marginTop: 55,
  },
  star: {
    color: "red",
  },
  orderList: {
    overflowX: "hidden",
    height: 490,
    flex: 1,
    width: "100%",
    maxHeight: 490,
  },
  orderListItem: {
    height: 100,
    maxHeight: 100,
  },
  productContainer: {
    height: 720,
  },
  paymentButton: {
    height: 95,
    marginTop: 24,
  },
  leftLabel: {
    marginLeft: 20,
  },
  rightLabel: {
    marginRight: 20,
  },
};

const Shop = () => {
  const shopReducer = useSelector(shopSelector);
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();
  const renderPayment = () => {
    return (
      <Box className="max-h-[710px]">
        <Payment order={JSON.stringify(shopReducer.mOrderLines)} />
      </Box>
    );
  };

  const isSelectedItem = (product: Product) => {
    const index = shopReducer.mOrderLines.findIndex((item: any) => {
      return item._id === product._id;
    });
    return index !== -1;
  };

  const getOrderDetail = (id: number) => {
    const index = shopReducer.mOrderLines.findIndex((item: any) => item.product_id === id);

    return shopReducer.mOrderLines[index];
  };

  const renderOrderRows = () => {
    const { mOrderLines } = shopReducer;

    return mOrderLines.map((item: any) => (
      <ListItem button divider className="h-[100px]">
        <Box className="flex w-full flex-row items-center justify-between">
          {/* Image Order  */}
          <img alt="to be done" src={`${imageUrl}/images/${item.image}`} className="w-12 h-12" />

          {/* Name Order  */}
          <Typography color="textSecondary" component="p" className="flex-grow ml-2 mr-2">
            {item.name}
          </Typography>

          {/* Price and Qty Order  */}
          <Typography align="right" color="textPrimary">
            <NumericFormat value={item.price} displayType={"text"} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={"฿"} />
            <br />X {item.qty}.
            <br />
            <DeleteOutlineIcon onClick={() => dispatch(removeOrder(item))} />
          </Typography>
        </Box>
      </ListItem>
    ));
  };

  const renderProductRows = () => {
    const { stockAllResult } = stockReducer;
    return (
      <Container className="h-[80vh] overflow-y-scroll p-4">
        <Grid container spacing={1} className="pt-2">
          {stockAllResult !== null &&
            stockAllResult.map((item: any, i: number) => (
              <Grid key={i} item xs={3} onClick={() => dispatch(addOrder(item))} className="cursor-pointer">
                <Card elevation={5}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" className="h-28" image={`${imageUrl}/images/${item.image}`} title="Contemplative Reptile" />
                    <CardContent>
                      <Typography noWrap gutterBottom>
                        {item.name}
                      </Typography>
                      <Grid container className="h-6 flex flex-row">
                        <Box className="grow">
                          <Typography variant="body2" color="textSecondary" component="p">
                            D{item.product_id} / ฿{item.price}
                          </Typography>
                        </Box>
                        {isSelectedItem(item) && (
                          <Box className="flex flex-row">
                            <Typography className="mr-1" variant="body1" color="textPrimary">
                              X{getOrderDetail(item.product_id!).qty}
                            </Typography>

                            <StarsIcon sx={classes.star} />
                          </Box>
                        )}
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  };

  useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <Grid container spacing={2} className="h-[80vh]">
      {/* Left section */}
      <Grid item xs={8} className="overflow-hidden">
        {shopReducer.mIsPaymentMade ? renderPayment() : renderProductRows()}
      </Grid>

      {/* Right section */}
      <Grid item xs={4} className="p-2 h-[83vh] flex flex-col">
        <Paper className="p-2 mt-2 mb-2" elevation={1}>
          {/* Tax section */}
          <Box className="flex flex-row items-center justify-between">
            <Typography variant="h6">Tax 7%</Typography>
            <Typography variant="h6" color="red">
              <NumericFormat value={shopReducer.mTaxAmt} displayType={"text"} decimalScale={2} thousandSeparator={true} prefix={"฿"} />
            </Typography>
          </Box>

          {/* Total section */}
          <Box className="flex flex-row items-center justify-between">
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4" color="primary">
              <NumericFormat value={shopReducer.mTotalPrice} displayType={"text"} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={"฿"} />
            </Typography>
          </Box>

          {shopReducer.mTotalPrice > 0 && (
            <Button fullWidth className="mb-4 mt-4" variant="contained" color="primary" onClick={() => dispatch(togglePayment())}>
              <Typography variant="h4">{shopReducer.mIsPaymentMade ? "Cancel" : "Payment"}</Typography>
            </Button>
          )}
        </Paper>

        <Paper elevation={1} className="h-full overflow-y-scroll flex flex-col justify-start items-center">
          {shopReducer.mOrderLines.length > 0 ? (
            <List component="nav" aria-label="mailbox folders">
              {renderOrderRows()}
            </List>
          ) : (
            <img alt="" src={waitingForSaleImage} className="h-[300px] w-[300px]" />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Shop;
