type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      {children}
    </div>
  );
}