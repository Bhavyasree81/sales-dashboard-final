import Card from "../atoms/Card";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ChartContainer({ title, children }: Props) {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </Card>
  );
}