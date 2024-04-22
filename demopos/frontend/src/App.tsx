import React from "react";
import { Button } from "@mui/material";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
