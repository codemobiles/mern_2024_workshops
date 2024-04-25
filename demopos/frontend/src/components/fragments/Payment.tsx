import React from "react";

type Props = {
  order: any[];
};

export default function Payment({ order }: Props) {
  return (
    <div>
      Payment
      <br />
      <ul>
        {order.map((e) => (
          <li key={e.product_id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
