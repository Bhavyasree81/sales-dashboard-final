"use client";

import { useState } from "react";
import { salesData } from "@/data/salesData";

import FilterControls from "@/components/molecules/FilterControls";
import BarSalesChart from "@/components/organisms/BarSalesChart";
import LineSalesChart from "@/components/organisms/LineSalesChart";
import PieSalesChart from "@/components/organisms/PieSalesChart";

export default function Dashboard() {
  const [threshold, setThreshold] = useState<number | "">("");
  const [chartType, setChartType] = useState("bar");

  const filteredData =
    threshold === ""
      ? salesData
      : salesData.filter((item) => item.sales >= threshold);

  const reset = () => setThreshold("");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>

      <FilterControls
        threshold={threshold}
        setThreshold={setThreshold}
        reset={reset}
      />

      {/* Chart Switch Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setChartType("line")}
        >
          Line Chart
        </button>

        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => setChartType("pie")}
        >
          Pie Chart
        </button>
      </div>

      {/* Chart Display */}
      <div>
        {chartType === "bar" && <BarSalesChart data={filteredData} />}
        {chartType === "line" && <LineSalesChart data={filteredData} />}
        {chartType === "pie" && <PieSalesChart data={filteredData} />}
      </div>
    </div>
  );
}