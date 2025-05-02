import { Button } from "@/components/ui/button"

export default function Movies() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Filmler</h1>
        <Button>Yeni Film Ekle</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Film kartları buraya gelecek */}
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-200"></div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Film Başlığı</h3>
            <p className="text-gray-600 mb-4">Film açıklaması burada yer alacak...</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">2024</span>
              <Button variant="outline">Detaylar</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 