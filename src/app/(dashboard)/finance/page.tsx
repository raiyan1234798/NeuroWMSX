"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Wallet, ArrowUpRight, ArrowDownRight, CreditCard, Building } from "lucide-react"

export default function FinancePage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Finance & SaaS Billing</h1>
          <p className="text-muted-foreground">Subscription tier mapping, cost analytics, and automated invoices.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              MRR
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.24M</div>
            <p className="text-xs text-emerald-500 font-semibold flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" /> +14.2% MoM
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Active Tenants
              <Building className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-emerald-500 font-semibold flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 12 New Acquired
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Cost of AI Compute
              <Wallet className="w-4 h-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$84,000</div>
            <p className="text-xs text-muted-foreground font-semibold flex items-center mt-1">
               Optimized by 14%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Churn Rate
              <ArrowDownRight className="w-4 h-4 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.8%</div>
            <p className="text-xs text-emerald-500 font-semibold mt-1">Historic Low</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-background/50 backdrop-blur lg:col-span-2">
          <CardHeader>
            <CardTitle>SaaS Billing Engine</CardTitle>
            <CardDescription>Top paying multi-tenant enterprises.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col gap-4">
                {[
                  { name: "Apex Logistics Ltd", plan: "Enterprise + AI", amount: "$85,000", status: "Paid", usage: "API Limit Near" },
                  { name: "Zenith Retail", plan: "Pro", amount: "$12,400", status: "Paid", usage: "Steady" },
                  { name: "Nexus Manufacturing", plan: "Enterprise", amount: "$45,000", status: "Processing", usage: "Growing" },
                  { name: "3PL Connect Hub", plan: "Pro", amount: "$8,500", status: "Paid", usage: "Over Limit" },
                ].map((client) => (
                  <div key={client.name} className="flex flex-col md:flex-row md:items-center gap-4 bg-background/60 border border-white/5 p-4 rounded-xl justify-between">
                      <div className="flex flex-col gap-1">
                         <h4 className="font-bold text-sm">{client.name}</h4>
                         <span className="text-xs text-muted-foreground">{client.plan}</span>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                         <div className="flex items-center gap-2">
                             <BagdeStatus status={client.status} />
                             <span className="text-lg font-bold">{client.amount}</span>
                         </div>
                         <p className="text-xs text-muted-foreground">Usage: {client.usage}</p>
                      </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Payment Gateways</CardTitle>
            <CardDescription>Multi-currency processor status.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
             <div className="p-4 rounded-xl bg-background/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <CreditCard className="w-8 h-8 text-primary" />
                   <div>
                     <h4 className="font-semibold text-sm">Stripe Payments</h4>
                     <p className="text-xs text-muted-foreground mt-0.5">Global CC Engine</p>
                   </div>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10">Online</Badge>
             </div>
             
             <div className="p-4 rounded-xl bg-background/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full border border-primary/20 flex justify-center items-center text-primary font-bold">₿</div>
                   <div>
                     <h4 className="font-semibold text-sm">Crypto Escrow</h4>
                     <p className="text-xs text-muted-foreground mt-0.5">Blockchain Smart API</p>
                   </div>
                </div>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10">Online</Badge>
             </div>

             <div className="flex flex-col gap-2 mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-primary text-sm">Revenue Anomaly Detected</h4>
                <p className="text-xs text-muted-foreground">Surge in "3PL Connect" API usage leading to potential upgrade scenario. Suggest sending Pro to Enterprise conversion prompt.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BagdeStatus({ status }: { status: string }) {
  if (status === "Paid") return <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10 text-[10px] py-0">{status}</Badge>
  if (status === "Processing") return <Badge variant="outline" className="text-amber-500 border-amber-500/30 bg-amber-500/10 text-[10px] py-0">{status}</Badge>
  return <Badge variant="outline" className="text-red-500 border-red-500/30 bg-red-500/10 text-[10px] py-0">{status}</Badge>
}
