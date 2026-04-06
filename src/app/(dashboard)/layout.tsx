import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Topbar } from "@/components/layout/topbar"
import { AICopilot } from "@/components/layout/ai-copilot"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full h-screen overflow-hidden relative">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-muted/20 pb-20 md:pb-0">
          <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
        <AICopilot />
      </div>
    </SidebarProvider>
  )
}
