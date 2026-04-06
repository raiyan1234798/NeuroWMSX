"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Box, Database, TrendingUp, AlertTriangle } from "lucide-react"

const stats = [
  { title: "Total Inventory", value: "2,350", change: "+12.5%", icon: Box, trend: "up" },
  { title: "Active Orders", value: "840", change: "+5.2%", icon: Activity, trend: "up" },
  { title: "System Health", value: "99.9%", change: "Optimized", icon: Database, trend: "neutral" },
  { title: "Revenue (M)", value: "$12.4M", change: "+4.1%", icon: TrendingUp, trend: "up" },
]

export default function AIDashboard() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Command Center</h1>
        <p className="text-muted-foreground">Welcome back, Commander. AI systems are fully operational.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <stat.icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-1 font-medium ${
                  stat.trend === "up" ? "text-emerald-500" : "text-muted-foreground"
                }`}>
                  {stat.change} vs last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Global Supply Chain Map</CardTitle>
              <CardDescription>Real-time tracking of logistics and fleet status across regions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[300px] rounded-lg border border-border bg-muted/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.15)_0,transparent_100%)]" />
                <div className="flex flex-col items-center gap-4 text-muted-foreground z-10">
                  <Database className="w-12 h-12 opacity-50" />
                  <p className="text-sm font-semibold tracking-wider">3D GLOBE ENGINE ACTIVE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="h-full border-border/50 bg-background/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Smart Alerts</CardTitle>
              <CardDescription>AI-detected anomalies in operations.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold text-red-500">Route Congestion Detected</h4>
                    <p className="text-xs text-muted-foreground">AI has rerouted 12 AGVs to alternative paths, saving 15 mins.</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
