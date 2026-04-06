"use client"

import { Input } from "@/components/ui/input"
import { Bell, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export function Topbar() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border w-full flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative w-full max-w-sm hidden md:flex">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Command Palette (Ctrl+K)..." 
            className="pl-9 bg-muted/50 border-none w-64 focus-visible:ring-1 focus-visible:ring-primary focus-visible:w-80 transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative group">
          <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-destructive shadow-[0_0_8px_hsl(var(--destructive))]"></span>
        </Button>
        <Avatar className="cursor-pointer ring-2 ring-primary/20 hover:ring-primary transition-all">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
