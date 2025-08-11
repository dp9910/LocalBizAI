
'use client';

import { useAuth, signOut } from '@/lib/auth';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const user = useAuth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {user?.displayName || user?.email}!
        </h2>
        <div className="mt-8">
          <Button onClick={signOut} className="w-full">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
