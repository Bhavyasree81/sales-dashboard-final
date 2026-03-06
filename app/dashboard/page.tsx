"use client";

import { useState } from "react";
import { salesData } from "@/data/salesData";
import FilterControls from "@/components/molecules/FilterControls";
import BarSalesChart from "@/components/organisms/BarSalesChart";
import LineSalesChart from "@/components/organisms/LineSalesChart";
import PieSalesChart from "@/components/organisms/PieSalesChart";

export default function Dashboard() {
  const [chartType, setChartType] = useState("bar");
  const [threshold, setThreshold] = useState<number | "">("");

  const filteredData =
    threshold === ""
      ? salesData
      : salesData.filter((item) => item.sales >= threshold);

  const reset = () => setThreshold("");

  return (
    <div className="p-10">

      <h1>Sales Dashboard</h1>

      <FilterControls
        threshold={threshold}
        setThreshold={setThreshold}
        reset={reset}
      />

      <div className="flex gap-4 mt-4">
        <button onClick={() => setChartType("bar")}>Bar Chart</button>
        <button onClick={() => setChartType("line")}>Line Chart</button>
        <button onClick={() => setChartType("pie")}>Pie Chart</button>
      </div>

      <div className="mt-6">
        {chartType === "bar" && <BarSalesChart data={filteredData} />}
        {chartType === "line" && <LineSalesChart data={filteredData} />}
        {chartType === "pie" && <PieSalesChart data={filteredData} />}
      </div>

    </div>
  );
}