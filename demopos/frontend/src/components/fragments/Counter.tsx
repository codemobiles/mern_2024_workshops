import { Button } from "@mui/material";
import React from "react";

type Props = {
  value: number;
  onAdded: () => void;
};

export default function Counter(props: Props) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          props.onAdded();
        }}
      >
        Add: {props.value}
      </Button>
    </div>
  );
}
