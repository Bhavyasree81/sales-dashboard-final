"use client";

import { useMemo, useState } from "react";
import BarSalesChart from "../../components/BarSalesChart";
import LineSalesChart from "../../components/LineSalesChart";
import PieSalesChart from "../../components/PieSalesChart";
import { salesData, topProducts, regionData, weeklyData } from "../../data/salesData";
import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Filter, Download } from 'lucide-react';

const mainStats = [
  { title: "Total Revenue", value: "$920K", change: "+23%", isPositive: true, color: "from-blue-500 to-blue-600", icon: DollarSign },
  { title: "Total Orders", value: "2,248", change: "+18%", isPositive: true, color: "from-green-500 to-green-600", icon: ShoppingCart },
  { title: "Active Customers", value: "542", change: "+12%", isPositive: true, color: "from-purple-500 to-purple-600", icon: Users },
  { title: "Growth Rate", value: "28.5%", change: "+5.2%", isPositive: true, color: "from-orange-500 to-orange-600", icon: TrendingUp }
];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState("month");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const filteredData = useMemo(() => {
    if (selectedRegion === "all") return salesData;
    return salesData.filter((item) => item.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Sales Analytics Dashboard</h1>
              <p className="text-slate-400">Track your business metrics in real-time</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition">
                <Calendar className="w-4 h-4" />
                {dateRange}
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-lg">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Reset Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainStats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-gradient-to-br from-slate-700 to-transparent rounded-full opacity-20 group-hover:scale-125 transition-transform"></div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  <span className="text-sm font-semibold">{stat.change}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button className="flex items-center gap-2 bg-slate-800 border border-slate-700 hover:border-blue-500 text-white px-4 py-2 rounded-lg transition">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:border-blue-500 focus:outline-none transition"
          >
            <option value="all">All Regions</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Revenue Chart */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Revenue Trend</h3>
                <p className="text-slate-400 text-sm mt-1">Monthly performance analysis</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-4">
              <LineSalesChart data={filteredData} />
            </div>
          </div>

          {/* Revenue Distribution */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Region Distribution</h3>
              <p className="text-slate-400 text-sm mb-4">Sales by region</p>
            </div>
            <div className="bg-slate-900 rounded-xl p-4">
              <PieSalesChart data={filteredData} />
            </div>
          </div>
        </div>

        {/* Sales by Month */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Monthly Performance</h3>
              <p className="text-slate-400 text-sm mt-1">Sales targets vs actual performance</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-4">
            <BarSalesChart data={filteredData} />
          </div>
        </div>

        {/* Top Products and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Top Products */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Top Performing Products</h3>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl hover:bg-slate-800 transition">
                  <div className="flex-1">
                    <p className="text-white font-semibold">{product.name}</p>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${product.percentage * 3.3}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-white font-bold">${(product.sales / 1000).toFixed(0)}K</p>
                    <p className="text-green-400 text-sm">+{product.growth}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Performance */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Regional Performance</h3>
            <div className="space-y-4">
              {regionData.map((region) => (
                <div key={region.name} className="p-4 bg-slate-900 rounded-xl hover:bg-slate-800 transition">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-semibold">{region.name}</p>
                    <span className="text-blue-400 text-sm font-bold">{region.value}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      style={{ width: `${region.value}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">
                    <p>${(region.revenue / 1000).toFixed(0)}K revenue • {region.orders} orders</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-2">Avg. Order Value</p>
            <h3 className="text-3xl font-bold text-white">$409</h3>
            <p className="text-green-400 text-sm mt-2">+5.2% vs last month</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-2">Conversion Rate</p>
            <h3 className="text-3xl font-bold text-white">3.24%</h3>
            <p className="text-green-400 text-sm mt-2">+0.8% vs last month</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-2">Customer Retention</p>
            <h3 className="text-3xl font-bold text-white">87%</h3>
            <p className="text-green-400 text-sm mt-2">+3.1% vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}