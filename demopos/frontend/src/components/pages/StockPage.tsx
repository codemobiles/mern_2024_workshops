import React from "react";

type Props = {};

export default function StockPage({}: Props) {
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
