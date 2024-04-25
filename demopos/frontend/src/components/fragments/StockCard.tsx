import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

export default function StockCard(props: { icon: any; title: string; subtitle: string; color: string }) {
  return (
    <Stack>
      StockCard
      <Typography color={props.color}>{props.title}</Typography>
      <props.icon />
    </Stack>
  );
}
