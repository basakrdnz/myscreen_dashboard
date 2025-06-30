import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here is your dashboard overview.</p>
        </div>
        <div>
          {/* Profil veya aksiyon butonları eklenebilir */}
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Movies</CardTitle>
            <CardDescription>Number of movies in your list</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">128</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Series</CardTitle>
            <CardDescription>Number of series in your list</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">42</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favorites</CardTitle>
            <CardDescription>Favorited items</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">16</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Watched</CardTitle>
            <CardDescription>Watched items</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">87</span>
          </CardContent>
        </Card>
      </div>

      {/* Son İşlemler Tablosu */}
      <div className="bg-white dark:bg-card rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Inception</td>
                <td className="py-2 px-4">Movie</td>
                <td className="py-2 px-4">2024-06-01</td>
                <td className="py-2 px-4">Watched</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="py-2 px-4">Breaking Bad</td>
                <td className="py-2 px-4">Series</td>
                <td className="py-2 px-4">2024-05-28</td>
                <td className="py-2 px-4">Watching</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Interstellar</td>
                <td className="py-2 px-4">Movie</td>
                <td className="py-2 px-4">2024-05-20</td>
                <td className="py-2 px-4">Planned</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 