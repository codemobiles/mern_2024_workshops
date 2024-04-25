import React from "react";

type Props = {
  order: any;
};

export default function Payment({ order }: Props) {
  return (
    <div>
      Payment
      {JSON.stringify(order)}
    </div>
  );
}
