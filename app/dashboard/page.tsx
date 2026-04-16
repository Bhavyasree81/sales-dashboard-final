"use client";

import { useMemo, useState } from "react";
import BarSalesChart from "../../components/BarSalesChart";
import LineSalesChart from "../../components/LineSalesChart";
import PieSalesChart from "../../components/PieSalesChart";
import { salesData } from "../../data/salesData";
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const stats = [
  { title: "Revenue", value: "$847K", change: "+23%", color: "text-green-600", icon: DollarSign },
  { title: "Orders", value: "1,284", change: "+12%", color: "text-blue-600", icon: ShoppingCart },
  { title: "Customers", value: "342", change: "+8%", color: "text-purple-600", icon: Users },
  { title: "Growth", value: "4.6%", change: "+2%", color: "text-orange-600", icon: TrendingUp }
];

export default function Dashboard() {
  const [thresholdInput, setThresholdInput] = useState("");
  const threshold = thresholdInput ? Number(thresholdInput) : 0;
  const filteredData = useMemo(
    () => salesData.filter((item) => item.sales >= threshold),
    [threshold]
  );

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen text-slate-900">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sales Dashboard</h1>
          <p className="text-slate-600 text-sm">Overview of your business performance</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Export Report
        </button>
      </div>

      {/* Threshold Filter */}
      <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_auto] items-end">
        <div className="space-y-1">
          <label htmlFor="threshold" className="text-sm font-medium text-slate-700">
            Custom Sales Threshold
          </label>
          <p className="text-sm text-slate-500">
            Enter a minimum sales value to filter charts and insights.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-700">$</span>
          <input
            id="threshold"
            type="number"
            min="0"
            step="1000"
            value={thresholdInput}
            onChange={(event) => {
              const nextValue = event.target.value.replace(/^0+(?=\d)/, "");
              setThresholdInput(nextValue);
            }}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="0"
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((item, index) => (
          <div key={index} className="p-5 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <div className="flex items-center justify-between mb-2">
              <item.icon className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-sm text-slate-500">{item.title}</p>
            <h2 className="text-2xl font-bold mt-1 text-slate-900">{item.value}</h2>
            <p className={`text-sm mt-1 ${item.color}`}>{item.change}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-700">
          Showing sales values greater than or equal to <span className="font-semibold text-slate-900">${threshold.toLocaleString()}</span>.
        </p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
          <h3 className="font-semibold mb-3 text-slate-900">Sales Trend</h3>
          <LineSalesChart data={filteredData} />
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
          <h3 className="font-semibold mb-3 text-slate-900">Revenue Distribution</h3>
          <PieSalesChart data={filteredData} />
        </div>

        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 md:col-span-2">
          <h3 className="font-semibold mb-3 text-slate-900">Monthly Sales</h3>
          <BarSalesChart data={filteredData} />
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 mt-6">
        <h3 className="font-semibold mb-3 text-slate-900">Insights</h3>
        <ul className="text-sm text-slate-600 space-y-2">
          <li>📈 Revenue increased by 23% this month</li>
          <li>🛒 Orders are growing steadily</li>
          <li>👥 Customer base expanding</li>
        </ul>
      </div>
    </div>
  );
}