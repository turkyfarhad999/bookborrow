'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
const Logoutbtn = () => {
    const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/');
          router.refresh();
        },
      },
    });
  };
    return (
         <button onClick={handleLogout} className="btn">
      Logout
    </button>
    );
};

export default Logoutbtn;