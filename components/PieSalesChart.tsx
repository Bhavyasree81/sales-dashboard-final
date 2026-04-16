"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

export default function PieSalesChart({ data }: any) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="sales" nameKey="year" outerRadius={100} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}