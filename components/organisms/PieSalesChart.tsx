"use client";

import { PieChart, Pie, Tooltip } from "recharts";

export default function PieSalesChart({ data }: any) {
  return (
    <PieChart width={500} height={300}>
      <Pie data={data} dataKey="sales" nameKey="year" outerRadius={100} />
      <Tooltip />
    </PieChart>
  );
}