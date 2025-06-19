export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4">
      <a href="/dashboard" className="font-medium">Anasayfa</a>
      <a href="/dashboard/favorites">Favoriler</a>
      <a href="/dashboard/history">Geçmiş</a>
      <a href="/dashboard/stats">İstatistikler</a>
      <a href="/dashboard/recommendation">Öneriler</a>
    </nav>
  );
} 