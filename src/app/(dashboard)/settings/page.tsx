"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Shield, Terminal, Zap, Bell, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export default function SettingsPage() {
  const handleSave = () => {
    toast.success("Settings Saved", { description: "Quantum configurations applied successfully." })
  }

  const handlePurge = () => {
    toast.error("PURGE INITIATED", { description: "Resetting Data Warehouse..." })
  }

  const handleModeChange = () => {
    toast("God Mode Active", { icon: <Zap className="w-4 h-4 text-primary" />, description: "AI Routing set to highest tolerance level." })
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Manage AI parameters, security, and profile configs.</p>
        </div>
        <Button className="shadow-[0_0_15px_hsl(var(--primary))] font-bold w-full md:w-auto" onClick={handleSave}>
           Save Configurations
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 flex flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:overflow-visible">
           <Button variant="ghost" className="justify-start px-4 activebg-background/80 bg-background/50 border border-white/5 shrink-0">
              <User className="w-4 h-4 mr-3 text-muted-foreground" /> Admin Profile
           </Button>
           <Button variant="ghost" className="justify-start px-4 hover:bg-background/50 border border-transparent shrink-0">
              <Shield className="w-4 h-4 mr-3 text-muted-foreground" /> Security & MFA
           </Button>
           <Button variant="ghost" className="justify-start px-4 hover:bg-background/50 border border-transparent shrink-0">
              <Terminal className="w-4 h-4 mr-3 text-muted-foreground" /> API & Webhooks
           </Button>
           <Button variant="ghost" className="justify-start px-4 hover:bg-background/50 border border-transparent shrink-0">
              <Zap className="w-4 h-4 mr-3 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" /> AI Engine Config
           </Button>
           <Button variant="ghost" className="justify-start px-4 hover:bg-background/50 border border-transparent shrink-0">
              <Bell className="w-4 h-4 mr-3 text-muted-foreground" /> Notification Matrix
           </Button>
        </div>
        
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
           <Card className="border-border/50 bg-background/50 backdrop-blur">
             <CardHeader>
               <CardTitle className="text-xl">AI Engine Core Config</CardTitle>
               <CardDescription>Adjust the neural net behavior for your specific tenant.</CardDescription>
             </CardHeader>
             <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                   <h4 className="font-semibold text-sm">AGV Routing Tolerance</h4>
                   <p className="text-xs text-muted-foreground">Sets how aggressively the AI will re-route AGVs to save milliseconds.</p>
                   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                      <Button variant="outline" className="text-muted-foreground bg-background/40 w-full sm:w-auto">Conservative</Button>
                      <Button onClick={handleModeChange} className="font-bold border border-primary/50 shadow-[0_0_10px_rgba(0,240,255,0.3)] bg-primary/20 text-primary hover:bg-primary/30 w-full sm:w-auto">Aggressive - God Mode</Button>
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                   <h4 className="font-semibold text-sm">LLM Integration Key</h4>
                   <p className="text-xs text-muted-foreground">Used for the floating NeuroWMS AI Copilot.</p>
                   <div className="flex flex-col sm:flex-row items-center gap-2 max-w-md mt-2 w-full">
                      <Input type="password" value="sk-neuro-wfwe23rw3r9w0e-8238" className="font-mono text-xs bg-background/50 border-white/10 w-full" readOnly />
                      <Button variant="outline" className="border-border/50 text-xs h-9 w-full sm:w-auto bg-background/60">Rotate</Button>
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                   <h4 className="font-semibold text-sm flex gap-2">Enable Auto-Purchasing <Badge className="bg-emerald-500 hover:bg-emerald-600 text-[10px] py-0 -mt-0.5">Active</Badge></h4>
                   <p className="text-xs text-muted-foreground">Allow AI to autonomously execute POs under $50,000 threshold when demand spikes.</p>
                   <div className="p-3 border border-emerald-500/20 rounded-xl bg-emerald-500/10 mt-2 flex items-center gap-3 w-fit pr-6">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm font-semibold text-emerald-500">Feature Currently Operational</span>
                   </div>
                </div>
             </CardContent>
           </Card>

           <Card className="border-red-500/20 bg-background/50 backdrop-blur">
             <CardHeader>
               <CardTitle className="text-red-500 text-xl">Danger Zone</CardTitle>
               <CardDescription>Disastrous irreversible commands.</CardDescription>
             </CardHeader>
             <CardContent className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div className="text-sm">
                   <h4 className="font-semibold text-red-500">Purge Data Warehouse</h4>
                   <p className="text-xs text-muted-foreground mt-1">Erase structural Digital Twin mapping and reset IoT binding across all zones.</p>
                </div>
                <Button variant="destructive" onClick={handlePurge} className="bg-red-500/20 text-red-500 hover:bg-red-500/30 border border-red-500/50 w-full md:w-auto">Initiate Purge</Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
