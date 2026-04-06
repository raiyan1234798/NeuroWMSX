"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import {
  Activity,
  Box,
  BrainCircuit,
  Boxes,
  Truck,
  Users,
  Building2,
  Settings,
  PieChart,
  Home
} from "lucide-react"

const items = [
  { title: "AI Dashboard", icon: Home, url: "/" },
  { title: "Inventory", icon: Box, url: "/inventory" },
  { title: "Orders", icon: Boxes, url: "/orders" },
  { title: "3D Warehouse", icon: BrainCircuit, url: "/warehouse-3d" },
  { title: "Logistics", icon: Truck, url: "/logistics" },
  { title: "Workforce", icon: Users, url: "/workforce" },
  { title: "Suppliers", icon: Building2, url: "/suppliers" },
  { title: "Finance", icon: Activity, url: "/finance" },
  { title: "Analytics", icon: PieChart, url: "/analytics" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border bg-sidebar" variant="sidebar">
      <SidebarHeader className="p-4 flex flex-row items-center gap-2">
        <BrainCircuit className="w-6 h-6 text-primary" />
        <h1 className="font-bold text-lg tracking-tight">NeuroWMS<span className="text-primary">X</span></h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} />}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground w-full justify-center">
          vX God Mode 2026
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
