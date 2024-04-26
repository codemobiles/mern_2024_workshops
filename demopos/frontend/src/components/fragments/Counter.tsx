import { Button } from "@mui/material";

type Props = {
  value: number;
  onAdded: () => void;
};

export default function Counter({ value, onAdded }: Props) {
  return (
    <div>
      <Button variant="contained" onClick={onAdded}>
        Add: {value}
      </Button>
    </div>
  );
}
