import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Film Başlığı</h1>
            <p className="text-gray-600">2024 • 2 saat 30 dakika</p>
          </div>
          <Button variant="outline">Düzenle</Button>
        </div>

        <div className="aspect-video bg-gray-200 rounded-lg mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Özet</h2>
            <p className="text-gray-700 mb-8">
              Film özeti burada yer alacak. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Oyuncular</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Oyuncu kartları buraya gelecek */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2"></div>
                <p className="font-medium">Oyuncu Adı</p>
                <p className="text-sm text-gray-600">Karakter Adı</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Film Bilgileri</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Yönetmen</p>
                  <p className="font-medium">Yönetmen Adı</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tür</p>
                  <p className="font-medium">Aksiyon, Macera</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">IMDb Puanı</p>
                  <p className="font-medium">8.5/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 