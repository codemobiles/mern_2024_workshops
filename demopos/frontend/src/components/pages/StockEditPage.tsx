import React, { useEffect } from "react";
import { useMatch } from "react-router-dom";

type Props = {};

export default function StockEditPage({}: Props) {
  const match = useMatch("/stock/edit/:id");

  const loadData = () => {
    const product_id = match?.params.id;
    setTimeout(() => {
      alert("productId " + product_id);
    }, 2000);
  };

  useEffect(() => {
    loadData();
  }, []);
  return <div>StockEditPage</div>;
}
