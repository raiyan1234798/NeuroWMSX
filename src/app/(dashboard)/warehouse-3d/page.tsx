"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { WarehouseCanvas } from "@/components/warehouse-canvas"

export default function Warehouse3DPage() {
  return (
    <div className="flex flex-col gap-6 w-full h-[calc(100vh-8rem)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">3D Digital Twin</h1>
        <p className="text-muted-foreground">Real-time mapping, space utilization analytics, and congestion detection.</p>
      </div>

      <Card className="flex-1 overflow-hidden border-border/50 bg-background/50 backdrop-blur shadow-xl relative">
        <WarehouseCanvas />
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0 h-40">
        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Space Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">82.4%</div>
            <p className="text-xs text-muted-foreground mt-1">Optimal Zone: 75% - 85%</p>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-emerald-500">Autonomous Fleet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 Active</div>
            <p className="text-xs text-muted-foreground mt-1">No congestion points detected.</p>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-destructive">Anomaly Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">2 Pending</div>
            <p className="text-xs text-muted-foreground mt-1">Zone C - Temperature Fluctuation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
