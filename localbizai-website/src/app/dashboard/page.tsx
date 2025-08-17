'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Getting Started Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">Complete your business profile and get your first AI recommendation.</p>
            <Button asChild>
              <Link href="/get-started">Start Onboarding</Link>
            </Button>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-indigo-600 hover:underline">
                  View AI Recommendations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-600 hover:underline">
                  Manage Subscriptions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-indigo-600 hover:underline">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Placeholder for future content */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your AI Dashboard</h2>
            <p className="text-gray-600">More features coming soon!</p>
          </div>
        </div>
      </main>
    </div>
  );
}