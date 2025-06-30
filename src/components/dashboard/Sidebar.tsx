"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4 items-start">
      <div className="mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/avatar.png" alt="Kullanıcı" />
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start" className="w-48">
            <DropdownMenuLabel>Kullanıcı Adı</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/dashboard/settings">Ayarlar</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="w-full text-left">Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <a href="/dashboard" className="font-medium">Anasayfa</a>
      <a href="/dashboard/favorites">Favoriler</a>
      <a href="/dashboard/history">Geçmiş</a>
      <a href="/dashboard/stats">İstatistikler</a>
      <a href="/dashboard/recommendation">Öneriler</a>
    </nav>
  )
} 