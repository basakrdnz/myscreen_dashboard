"use client"
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center my-4 justify-center min-h-screen bg---color-stone-400">
      <div 
        className="absolute inset-0 z-0"
        // style={{
        //   backgroundImage: "url('/bg_img_1.jpeg')",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   borderRadius: "50%",
        //   width: "700px",
        //   height: "700px",
        //   margin: "auto"
        // }}
      />
      <div className="z-10">
        <LoginForm />
      </div>
    </main>
  );
} 