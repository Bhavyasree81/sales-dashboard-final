import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Sales Dashboard Project</h1>
      <p>Sales data visualization for 2022–2024.</p>
      <Link
        href="/dashboard"
        className="text-blue-500 underline"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
