"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/Button"

export default function HomePage() {
  const router = useRouter()

  // Token varsa dashboard'a yönlendir
  useEffect(() => {
    const token = localStorage.getItem("token") // ya da sen nasıl saklıyorsan
    if (token) {
      router.push("/dashboard")
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-zinc-50 to-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Welcome to MyScreen 🎬
      </h1>
      <p className="mb-8 text-gray-600 text-center max-w-md">
        Start tracking your favorite movies and series. Join now or login to continue.
      </p>
      <Button onClick={() => router.push("/login")}>Hadi Başlayalım</Button>
    </main>
  )
}
