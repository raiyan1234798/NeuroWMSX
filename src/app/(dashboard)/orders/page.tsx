"use client"

import React, { useState } from "react"
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GripVertical, Zap, Compass, RotateCcw } from "lucide-react"
import { toast } from "sonner"

type Order = {
  id: string
  items: number
  priority: "High" | "Normal" | "Urgent"
  zone: string
}

const initialOrders: Order[] = [
  { id: "ORD-991A", items: 42, priority: "Urgent", zone: "A-North" },
  { id: "ORD-992B", items: 5, priority: "Normal", zone: "C-East" },
  { id: "ORD-993C", items: 118, priority: "High", zone: "B-South" },
  { id: "ORD-994D", items: 12, priority: "Normal", zone: "D-West" },
  { id: "ORD-995E", items: 67, priority: "Urgent", zone: "A-North" },
]

function SortableOrderItem({ order }: { order: Order }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: order.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-background/60 backdrop-blur border border-border/50 rounded-lg p-3 flex items-center justify-between shadow-sm my-2 group hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-3">
        <button {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-primary transition-colors">
          <GripVertical className="w-5 h-5" />
        </button>
        <div>
          <h4 className="font-bold text-sm">{order.id}</h4>
          <p className="text-xs text-muted-foreground">{order.items} Items • Zone: {order.zone}</p>
        </div>
      </div>
      <div>
        <Badge variant="outline" className={`
          ${order.priority === 'Urgent' ? 'text-red-500 border-red-500/30 bg-red-500/10' : ''}
          ${order.priority === 'High' ? 'text-amber-500 border-amber-500/30 bg-amber-500/10' : ''}
        `}>
          {order.priority}
        </Badge>
      </div>
    </div>
  )
}

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders)
  const [isAIOptimized, setIsAIOptimized] = useState(false)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      setOrders((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id)
        const newIndex = items.findIndex((i) => i.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const aiOptimizeRoute = () => {
    setIsAIOptimized(true)
    const sorted = [...orders].sort((a, b) => {
      const pMap = { "Urgent": 3, "High": 2, "Normal": 1 }
      if (pMap[a.priority] !== pMap[b.priority]) return pMap[b.priority] - pMap[a.priority]
      return a.zone.localeCompare(b.zone)
    })
    setOrders(sorted)
    toast.success("AI Wave Optimized", { description: "The picking queue has been optimized based on priority and zone." });
  }

  const resetOrder = () => {
    setIsAIOptimized(false)
    setOrders(initialOrders)
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Autonomous Fulfillment</h1>
          <p className="text-muted-foreground">Wave & zone picking drag-and-drop queue optimization.</p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button variant="outline" onClick={resetOrder} className="border-border">
            <RotateCcw className="w-4 h-4 mr-2" /> Reset
          </Button>
          <Button 
            onClick={aiOptimizeRoute}
            disabled={isAIOptimized}
            className={`shadow-[0_0_15px_hsl(var(--primary))] transition-all ${isAIOptimized ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]' : ''}`}
          >
            {isAIOptimized ? <Compass className="w-4 h-4 mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
            {isAIOptimized ? 'AI Route Optimized' : 'Auto-Optimize Wave'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        {/* Picking Queue */}
        <Card className="bg-background/30 backdrop-blur border-border/50">
          <CardHeader>
            <CardTitle>Active Pick Wave</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Drag and drop to manually adjust picker priorities.</p>
          </CardHeader>
          <CardContent>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={orders.map(o => o.id)} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-1 min-h-[300px]">
                  {orders.map((order, i) => (
                    <div key={order.id} className="relative">
                      {isAIOptimized && i === 0 && (
                         <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      )}
                      <SortableOrderItem order={order} />
                    </div>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </CardContent>
        </Card>

        {/* Live Map Placeholder / Fleet Assign */}
        <Card className="bg-background/30 backdrop-blur border-border/50 h-full min-h-[400px] flex flex-col">
          <CardHeader>
            <CardTitle>AGV Robot Fleet Matrix</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Robots automatically dispatch based on queue order.</p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center items-center relative overflow-hidden h-full rounded-b-lg p-0">
             <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
             <div className="w-4/5 h-4/5 border border-dashed border-primary/20 rounded-xl relative flex items-center justify-center p-6">
                <div className="absolute top-4 left-4 bg-primary/10 text-primary text-xs px-2 py-1 rounded font-mono">AGV-01 | Zone A-North</div>
                <div className="absolute bottom-4 right-4 bg-emerald-500/10 text-emerald-500 text-xs px-2 py-1 rounded font-mono animate-pulse">AGV-14 | En Route</div>
                
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center ring-4 ring-primary/10">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  {isAIOptimized ? (
                    <div className="text-emerald-500 text-sm font-semibold mt-2 animate-in fade-in slide-in-from-bottom-2">
                      Fleet Syncing to AI Optima...<br/>
                      <span className="text-muted-foreground text-xs mt-1 block">Expected Time Saved: 14 mins</span>
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-sm font-semibold mt-2">
                       Awaiting AI Optimization
                    </div>
                  )}
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
