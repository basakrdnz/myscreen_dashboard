import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">MyScreen Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Hoş Geldiniz</h2>
          <p className="text-gray-600 mb-4">
            MyScreen dashboard'a hoş geldiniz. Buradan filmlerinizi yönetebilir, favorilerinizi takip edebilirsiniz.
          </p>
          <Button>Keşfet</Button>
        </div>
      </div>
    </main>
  )
}
