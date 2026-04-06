"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, TrendingDown, Clock, ShieldCheck, MailWarning } from "lucide-react"
import { toast } from "sonner"

export default function SuppliersPage() {
  const handleAutoSource = () => {
    toast("AI Sourcing Agent Deployed", { description: "Searching global database for alternative silicon vendors..." })
    setTimeout(() => toast.success("Vendors Found", { description: "3 alternative suppliers identified. Awaiting your approval." }), 3000)
  }

  const handleExecutePO = () => {
    toast.success("Purchase Order Executed", { description: "Bulk order of cardboard packaging initiated with -15% cost variance." })
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Supplier & Procurement AI</h1>
          <p className="text-muted-foreground">Supplier scoring, auto purchase orders, and lead time predictions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Active Suppliers
              <Building2 className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">428</div>
            <p className="text-xs text-muted-foreground mt-1">Globally Sourced</p>
          </CardContent>
        </Card>
        
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Avg Lead Time
              <Clock className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 Days</div>
            <p className="text-xs text-emerald-500 mt-1 font-semibold flex items-center gap-1">
              <TrendingDown className="w-3 h-3" /> 1.1 Days Faster
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Auto POs Generated
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,024</div>
            <p className="text-xs text-muted-foreground mt-1">This Month</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Negotiation Alerts
              <MailWarning className="w-4 h-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1 text-amber-500 font-semibold">Bulk Discount Ops</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-background/50 backdrop-blur lg:col-span-2 overflow-x-auto">
          <CardHeader>
            <CardTitle>Supplier AI Scoring Matrix</CardTitle>
            <CardDescription>Vendors ranked by reliability, speed, and cost-effectiveness</CardDescription>
          </CardHeader>
          <CardContent className="min-w-[400px]">
             <div className="flex flex-col gap-4">
                {[
                  { name: "GlobalTech Logistics", score: 98, status: "Tier 1", performance: "Excellent" },
                  { name: "Nexus Robotics Supply", score: 95, status: "Tier 1", performance: "Excellent" },
                  { name: "OmniCorp Packaging", score: 82, status: "Tier 2", performance: "Stable" },
                  { name: "AeroDyne Drones", score: 74, status: "Tier 3", performance: "Delayed" },
                ].map((sup, i) => (
                  <div key={sup.name} className="flex flex-col md:flex-row md:items-center gap-4 bg-background/60 border border-white/5 p-4 rounded-xl">
                      <div className="flex flex-col gap-1 flex-1">
                         <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm">{sup.name}</h4>
                            <Badge variant="outline" className={`text-[10px] py-0 ${
                              sup.status === 'Tier 1' ? 'border-primary/50 text-primary bg-primary/10' :
                              sup.status === 'Tier 2' ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/10' :
                              'border-amber-500/50 text-amber-500 bg-amber-500/10'
                            }`}>
                               {sup.status}
                            </Badge>
                         </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                         <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-muted-foreground">AI Score</span>
                            <span className={`text-lg font-bold ${
                              sup.score > 90 ? 'text-primary' : sup.score > 80 ? 'text-emerald-500' : 'text-amber-500'
                            }`}>{sup.score}/100</span>
                         </div>
                         <p className="text-xs text-muted-foreground">Performance: {sup.performance}</p>
                      </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Market Intelligence</CardTitle>
            <CardDescription>Predictive supply chain disruptions.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
             <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <h4 className="font-semibold text-red-500 text-sm">Microchip Shortage Predicted</h4>
                <p className="text-xs text-muted-foreground mt-1 mb-2">AI detected a 14% drop in silicon exports. 80% chance of impact in Q3.</p>
                <Button variant="outline" onClick={handleAutoSource} className="w-full bg-red-500/20 text-red-500 border-red-500/30 hover:bg-red-500/30 h-8 text-xs font-bold">
                   Auto-Source Alternatives
                </Button>
             </div>
             
             <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-primary text-sm">Bulk Order Opportunity</h4>
                <p className="text-xs text-muted-foreground mt-1 mb-2">Cardboard packaging surplus in local market. -15% cost variance.</p>
                <Button variant="outline" onClick={handleExecutePO} className="w-full bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 h-8 text-xs font-bold">
                   Execute PO
                </Button>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
