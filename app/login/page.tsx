import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import Link from 'next/link';

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-4 p-6 ">
        <div className="flex h-28 w-full items-end rounded-lg bg-gray-900 p-4 md:h-44">
          <Link href = "/" className="w-40 text-white md:w-48">
            <AcmeLogo />
          </Link>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
