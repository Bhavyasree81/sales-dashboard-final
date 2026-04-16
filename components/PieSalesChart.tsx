"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
import type { Sales } from "../types/sales";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

export default function PieSalesChart({ data }: { data: Sales[] }) {
  const groupedData = Array.from({ length: 4 }).map((_, i) => ({
    name: ["North", "South", "East", "West"][i],
    value: Math.floor(Math.random() * 300000) + 100000
  }));

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={groupedData} 
            dataKey="value" 
            nameKey="name" 
            outerRadius={120}
            innerRadius={60}
            paddingAngle={2}
          >
            {groupedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "8px" }}
            labelStyle={{ color: "#F3F4F6" }}
            formatter={(value) => `$${Number(value).toLocaleString()}`}
          />
          <Legend wrapperStyle={{ color: "#9CA3AF" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}