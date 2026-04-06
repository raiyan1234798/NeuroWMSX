"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Truck, Map, Navigation, ShieldAlert, Leaf } from "lucide-react"

export default function LogisticsPage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full min-h-[calc(100vh-8rem)] pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Logistics Intelligence</h1>
          <p className="text-muted-foreground">Fleet tracking, ETA prediction, and active risk alerts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Active Fleet Trucks
              <Truck className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">186</div>
            <p className="text-xs text-muted-foreground mt-1 text-emerald-500 font-semibold">100% On Time</p>
          </CardContent>
        </Card>
        
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Avg ETA Prediction
              <Navigation className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETA -4m</div>
            <p className="text-xs text-muted-foreground mt-1">AI Optimized Routing saved time</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Risk Alerts
              <ShieldAlert className="w-4 h-4 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 High Risk</div>
            <p className="text-xs text-red-500 font-medium mt-1">Weather Delay (Storm Warning)</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Carbon Tracking
              <Leaf className="w-4 h-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-12.4% CO₂</div>
            <p className="text-xs text-muted-foreground mt-1">Due to Neural Route Mapping v2</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        <Card className="border-border/50 bg-background/50 backdrop-blur lg:col-span-2 overflow-hidden relative">
          <CardHeader>
            <CardTitle>Global AI Route Map</CardTitle>
            <CardDescription>Live telemetry from all transit hubs</CardDescription>
          </CardHeader>
          <CardContent className="h-full min-h-[400px] flex items-center justify-center relative p-0 overflow-hidden">
             {/* Simulated Map Background */}
             <div className="absolute inset-0 bg-[#0a0f1c] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#0a0f1c] to-[#0a0f1c]">
                <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             </div>
             
             {/* Simulated Node Connections */}
             <motion.div 
               className="absolute top-1/3 left-1/4 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"
               initial={{ scale: 0.8 }}
               animate={{ scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 2, repeat: Infinity }}
             >
                <div className="absolute top-4 left-4 text-xs font-mono text-emerald-500 bg-background/80 p-1 rounded border border-emerald-500/20 whitespace-nowrap">NY-HUB-01 Active</div>
             </motion.div>

             <motion.div 
               className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))]"
               initial={{ scale: 0.8 }}
               animate={{ scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
             >
                <div className="absolute top-4 left-4 text-xs font-mono text-primary bg-background/80 p-1 rounded border border-primary/20 whitespace-nowrap">LDN-HUB-02 Active</div>
             </motion.div>

             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path 
                  d="M 25% 33% C 45% 45%, 55% 25%, 75% 50%" 
                  fill="transparent" 
                  stroke="rgba(0,240,255,0.2)" 
                  strokeWidth="2"
                  strokeDasharray="10 10"
                />
                <motion.circle 
                  cx="0" cy="0" r="4" fill="#00f0ff"
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ offsetPath: `path('M 25% 33% C 45% 45%, 55% 25%, 75% 50%')` }}
                />
             </svg>

             <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 pointer-events-none">
                 <Map className="w-24 h-24 mb-4" />
             </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Delivery Risk Feed</CardTitle>
            <CardDescription>Real-time AI alerts</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
             {[
               { risk: "High", msg: "Storm warning over Route 66. Fleet diverted automatically.", time: "2 min ago" },
               { risk: "Med", msg: "Moderate traffic detected entering zone B.", time: "12 min ago" },
               { risk: "Low", msg: "Fuel costs dropped. Replenishing 10 hubs.", time: "1 hr ago" },
               { risk: "Safe", msg: "All 186 trucks synced to cloud.", time: "2 hr ago" }
             ].map((alert, i) => (
               <div key={i} className={`flex flex-col p-3 rounded-xl border bg-background/60 shadow-sm ${
                 alert.risk === 'High' ? 'border-red-500/20 text-red-500' :
                 alert.risk === 'Med' ? 'border-amber-500/20 text-amber-500' :
                 alert.risk === 'Low' ? 'border-primary/20 text-primary' : 'border-emerald-500/20 text-emerald-500'
               }`}>
                 <div className="flex justify-between items-center mb-1">
                   <Badge variant="outline" className={`text-xs px-2 py-0 border-current bg-current/10`}>
                     {alert.risk} Risk
                   </Badge>
                   <span className="text-[10px] opacity-70">{alert.time}</span>
                 </div>
                 <p className="text-sm font-medium mt-1 opacity-90">{alert.msg}</p>
               </div>
             ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
