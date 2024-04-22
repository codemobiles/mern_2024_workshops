import React from "react";

type Props = {
  value: number;
};

export default function Counter(props: Props) {
  return <div>Counter: {props.value}</div>;
}
