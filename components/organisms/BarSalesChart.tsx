"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function BarSalesChart({ data }: any) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  );
}