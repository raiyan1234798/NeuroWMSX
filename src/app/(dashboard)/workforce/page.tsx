"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Activity, Target, ShieldPlus, Zap } from "lucide-react"

export default function WorkforcePage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pb-20 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Workforce Intelligence</h1>
          <p className="text-muted-foreground">AI employee tracking, automated shifts, and safety telemetry.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Active Shifts
              <Users className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-emerald-500 font-medium mt-1">98% Attendance</p>
          </CardContent>
        </Card>
        
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Efficiency Score
              <Activity className="w-4 h-4 text-emerald-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2/100</div>
            <p className="text-xs text-muted-foreground mt-1">AI Optimal Baseline: 90.0</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Safety Incidents
              <ShieldPlus className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 Active</div>
            <p className="text-xs text-muted-foreground mt-1">142 Days Incident Free</p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Tasks Auto-Assigned
              <Zap className="w-4 h-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,024</div>
            <p className="text-xs text-muted-foreground mt-1">By AI Copilot today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-background/50 backdrop-blur lg:col-span-2">
          <CardHeader>
            <CardTitle>Gamification Leaderboard</CardTitle>
            <CardDescription>Top performers across globally synchronized warehouses</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex flex-col gap-4">
                {[
                  { name: "Sarah K.", role: "Picker", xp: 14500, avatar: "SK", rank: 1, badges: ["Speed Demon", "Zero Errors"] },
                  { name: "John M.", role: "Forklift Operator", xp: 13200, avatar: "JM", rank: 2, badges: ["Safe Driver"] },
                  { name: "Elena R.", role: "Tech Support", xp: 12850, avatar: "ER", rank: 3, badges: ["Fixer", "Night Owl"] },
                  { name: "David T.", role: "Picker", xp: 11900, avatar: "DT", rank: 4, badges: ["Consistent"] },
                ].map((emp) => (
                  <div key={emp.name} className="flex items-center gap-4 bg-background/60 border border-white/5 p-4 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                         #{emp.rank}
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                         <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm">{emp.name}</h4>
                            <span className="text-xs text-muted-foreground">{emp.role}</span>
                         </div>
                         <div className="flex flex-wrap gap-2">
                           {emp.badges.map(b => (
                             <Badge key={b} variant="outline" className="text-[10px] bg-primary/5 text-primary border-primary/20 py-0">
                                {b}
                             </Badge>
                           ))}
                         </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                         <span className="text-sm font-bold">{emp.xp.toLocaleString()} XP</span>
                         <Target className="w-4 h-4 text-emerald-500" />
                      </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-background/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Wearable Telemetry</CardTitle>
            <CardDescription>Live health and fatigue metrics.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
             <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                   <span className="font-semibold text-muted-foreground">Average Heart Rate</span>
                   <span className="text-emerald-500 font-bold">84 BPM</span>
                </div>
                <Progress value={40} className="h-2 bg-white/10" />
             </div>
             
             <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                   <span className="font-semibold text-muted-foreground">Fleet Fatigue Level</span>
                   <span className="text-primary font-bold">12%</span>
                </div>
                <Progress value={12} className="h-2 bg-white/10" />
                <p className="text-xs text-muted-foreground mt-1">AI rotating schedules to prevent burnout.</p>
             </div>

             <div className="flex flex-col gap-2 mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-primary text-sm">AI Recommendation</h4>
                <p className="text-xs text-muted-foreground">Authorize 15 min early break for Zone C pickers due to sustained high activity levels.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
