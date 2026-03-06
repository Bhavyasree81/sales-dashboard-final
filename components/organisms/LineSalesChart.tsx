"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function LineSalesChart({ data }: any) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
    </LineChart>
  );
}