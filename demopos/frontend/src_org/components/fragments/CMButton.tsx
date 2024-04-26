import Button, { ButtonProps } from "@mui/material/Button";

type Props = {
  isGraident?: boolean;
};

export default function CMButton({ isGraident, ...rest }: Props & ButtonProps) {
  return (
    <Button {...rest} className={isGraident ? "bg-gradient-to-r from-red-500" : ""}>
      {rest.children?.toString()}
    </Button>
  );
}
