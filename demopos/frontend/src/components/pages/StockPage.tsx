import React from "react";

type Props = {};

export default function StockPage({}: Props) {
  const courses = ["Flutter", "React", "NextJS"];
  return (
    <div>
      StockPage
      <ul>
        {courses.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
