import { Stack } from "@mui/material";
import React from "react";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

export default function StockCard(props: Props) {
  return (
    <Stack>
      StockCard
      <props.icon />
    </Stack>
  );
}
