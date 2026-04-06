"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, LineChart, PieChart as PieChartIcon, ArrowRightLeft, Cpu } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advanced BI & Analytics</h1>
          <p className="text-muted-foreground">Custom dashboards, predictive demand forecasting, and inventory turnover.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Total Compute Analyzed
              <Cpu className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2B Ops</div>
            <p className="text-xs text-muted-foreground font-semibold flex items-center mt-1">
              Neural Net Query Volume
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Inventory Turnover
              <ArrowRightLeft className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8x</div>
            <p className="text-xs text-emerald-500 font-semibold mt-1">Excellent Rate</p>
          </CardContent>
        </Card>
        
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Fulfillment Speed
              <LineChart className="w-4 h-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1h 14m</div>
            <p className="text-xs text-emerald-500 font-semibold mt-1">Order to Dispatch</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Forecast Accuracy
              <PieChartIcon className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground mt-1">AI 30-Day Model</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
        <Card className="border-border/50 bg-background/50 backdrop-blur xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Global Demand Projection</CardTitle>
              <CardDescription>Predictive analytics across NA, EU, and APAC.</CardDescription>
            </div>
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">30-Day Forecast</Badge>
          </CardHeader>
          <CardContent className="h-64 flex flex-col items-center justify-center p-0 border border-t border-border/50 m-4 rounded-xl bg-background/30 relative overflow-hidden">
             {/* Simulated Chart Bars */}
             <div className="flex items-end justify-around w-full h-full p-4 gap-2">
                {[40, 50, 60, 45, 70, 80, 100, 95, 85, 60, 70, 90].map((h, i) => (
                  <div key={i} className="w-full flex flex-col justify-end gap-2 group relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-background/80 border border-white/10 rounded px-2 py-1 text-primary z-10 font-bold shadow-lg">
                       {h}%
                    </div>
                    {/* Ghost bar for the shadow/glow effect behind the bar */}
                    <div className={`w-full rounded-t-md opacity-20 bg-primary z-0 h-[${h}%] absolute bottom-4 blur-sm transition-all group-hover:opacity-50`} style={{ height: `${h}%` }}></div>
                    {/* Actual Bar itself */}
                    <div className={`w-full rounded-t-sm z-10 transition-all cursor-pointer group-hover:bg-primary ${h > 80 ? 'bg-primary' : h > 50 ? 'bg-emerald-500' : 'bg-amber-500/80'}`} style={{ height: `${h}%` }}></div>
                  </div>
                ))}
             </div>
             <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent z-20"></div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Operational Anomalies</CardTitle>
            <CardDescription>Detected clusters outside bounds.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
             <div className="p-4 rounded-xl bg-background/60 border border-white/5 flex flex-col gap-3">
                 <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-sm">Zone B Pick Time Delay</h4>
                    <span className="text-xs text-red-500">+14% Variance</span>
                 </div>
                 <div className="flex gap-1 h-2 rounded bg-white/5 overflow-hidden">
                    <div className="bg-primary/50 w-2/3 h-full"></div>
                    <div className="bg-red-500 w-1/3 h-full"></div>
                 </div>
                 <p className="text-[10px] text-muted-foreground mt-1">Expected: 1m12s | Actual: 1m24s</p>
             </div>
             
             <div className="p-4 rounded-xl bg-background/60 border border-white/5 flex flex-col gap-3">
                 <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-sm">East Coast Port Volume</h4>
                    <span className="text-xs text-primary">+45% Over-forecast</span>
                 </div>
                 <div className="flex gap-1 h-2 rounded bg-white/5 overflow-hidden">
                    <div className="bg-primary w-full h-full"></div>
                 </div>
                 <p className="text-[10px] text-muted-foreground mt-1">Massive influx detected. AI scaling up AGVs in NY hubs.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
