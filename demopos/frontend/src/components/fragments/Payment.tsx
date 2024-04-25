import React from "react";

type Props = {
  order: string;
};

export default function Payment({ order }: Props) {
  return (
    <div>
      Payment
      <br />
      <ul>
        {JSON.parse(order).map((e) => (
          <li key={e.product_id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
