import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";

type StockCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

const StockCard = (props: StockCardProps) => {
  return (
    <Card>
      <Grid container className="min-h-[70px]">
        <Grid item className="flex-grow h-[100px] p-2">
          <Typography variant="h5" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {props.subtitle}
          </Typography>
        </Grid>

        <Grid
          item
          style={{
            backgroundColor: props.color,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 70,
          }}
        >
          <props.icon fontSize="large" />
          {/* {React.createElement(props.icon, { fontSize: "large" })} */}
        </Grid>
      </Grid>
    </Card>
  );
};

export default StockCard;
