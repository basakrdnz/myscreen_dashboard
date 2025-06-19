"use client"
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <LoginForm />
    </main>
  );
} 