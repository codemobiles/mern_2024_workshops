import { RootState, useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function StockPage({}: Props) {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  useEffect(() => {}, []);

  const courses = ["Flutter", "React", "NextJS"];
  return (
    <div>
      StockPage
      <ul>
        {courses.map((e) => {
          if (e == "React") {
            return <li key={e}>{e}</li>;
          } else {
            return (
              <li key={e} className="text-red-600">
                {e}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
