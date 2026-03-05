type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {children}
    </div>
  );
}