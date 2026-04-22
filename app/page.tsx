'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">

        <h1 className="text-4xl font-bold text-gray-900">
          Wealth Management Dashboard
        </h1>

        <p className="text-gray-600">
          Analytics platform for advisors, operations, and compliance
        </p>

        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
}
