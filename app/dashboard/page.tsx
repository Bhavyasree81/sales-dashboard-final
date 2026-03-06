"use client";

import { useState } from "react";
import { salesData } from "@/data/salesData";

import FilterControls from "@/components/molecules/FilterControls";
import BarSalesChart from "@/components/organisms/BarSalesChart";
import LineSalesChart from "@/components/organisms/LineSalesChart";
import PieSalesChart from "@/components/organisms/PieSalesChart";

export default function Dashboard() {

  const [threshold, setThreshold] = useState<number | "">("");
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filteredData =
    threshold === ""
      ? salesData
      : salesData.filter((item) => item.sales >= threshold);

  const reset = () => setThreshold("");

  return (
    <div style={{ padding: "20px" }}>

      <h1>Sales Dashboard</h1>

      <FilterControls
        threshold={threshold}
        setThreshold={setThreshold}
        reset={reset}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setChartType("bar")}>Bar Chart</button>
        <button onClick={() => setChartType("line")}>Line Chart</button>
        <button onClick={() => setChartType("pie")}>Pie Chart</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        {chartType === "bar" && <BarSalesChart data={filteredData} />}
        {chartType === "line" && <LineSalesChart data={filteredData} />}
        {chartType === "pie" && <PieSalesChart data={filteredData} />}
      </div>

      <p style={{ marginTop: "40px" }}>
        Data Source: Kaggle Superstore Dataset
      </p>

    </div>
  );
}