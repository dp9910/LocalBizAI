
'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/auth/signin');
    }
  }, [user, router]);

  if (user === null) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
