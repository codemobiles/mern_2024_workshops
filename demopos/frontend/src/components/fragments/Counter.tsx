import { Button } from "@mui/material";
import React from "react";

type Props = {
  value: number;
};

export default function Counter(props: Props) {
  return (
    <div>
      <Button variant="contained">Add: {props.value} </Button>
    </div>
  );
}
