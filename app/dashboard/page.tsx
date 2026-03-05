import ChartContainer from "@/components/molecules/ChartContainer";
import SalesChart from "@/components/organisms/SalesChart";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Sales Dashboard
      </h1>

      <ChartContainer title="Sales Overview (2022-2024)">
        <SalesChart />
      </ChartContainer>
    </div>
  );
}