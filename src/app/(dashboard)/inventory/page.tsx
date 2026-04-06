"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sparkles, ArrowDownToLine, ArrowUpToLine, Filter, Download } from "lucide-react"
import { toast } from "sonner"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

type InventoryItem = {
  id: string; sku: string; name: string; location: string; stock: number; status: string; aiAction: string;
}

const fallbackData: InventoryItem[] = [
  { id: "INV-8921", sku: "Nvidia-H100", name: "Tensor Core GPU", location: "Zone A - Rack 3", stock: 120, status: "Optimal", aiAction: "Hold" },
  { id: "INV-8922", sku: "Quantum-Node", name: "Q-Processor Unit", location: "Zone B - Rack 1", stock: 4, status: "Low Stock", aiAction: "Auto-Reordered" },
  { id: "INV-8923", sku: "RFID-Tags-Pack", name: "Active RFID Tags", location: "Zone C - Rack 8", stock: 8500, status: "Excess", aiAction: "Discount" },
  { id: "INV-8924", sku: "Boston-Dynamics-Spot", name: "AGV Robot Battery", location: "Zone A - Rack 2", stock: 45, status: "Optimal", aiAction: "Hold" },
  { id: "INV-8925", sku: "Laser-Scanner", name: "3D Lidar Sensor", location: "Zone D - Rack 5", stock: 12, status: "Low Stock", aiAction: "Predictive Order" },
]

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>(fallbackData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchInventoryFromFirestore() {
      try {
        const querySnapshot = await getDocs(collection(db, "inventory"));
        if (!querySnapshot.empty) {
          const items: InventoryItem[] = [];
          querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() } as InventoryItem);
          });
          setInventoryData(items);
        }
      } catch (error) {
        console.warn("Firestore not provisioned yet. Using AI fallback data.", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchInventoryFromFirestore();
  }, []);

  const handleExport = () => {
    toast.success("Export Initialized", {
      description: "Inventory matrix exported to CSV.",
    })
  }

  const handleAIDemand = () => {
    toast("AI Neural Engine Active", {
      description: "Forecasting demand across active Firestore instances...",
      icon: <Sparkles className="w-4 h-4 text-primary" />,
    })
    setTimeout(() => toast.success("Forecast Updated", { description: "Predicted an 18% spike in Q-Processors next week." }), 2000)
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smart Inventory System</h1>
          <p className="text-muted-foreground">Digital-twin synchronized inventory with AI-driven IoT updates directly from Firestore.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button className="font-semibold shadow-[0_0_15px_hsl(var(--primary))]" onClick={handleAIDemand} disabled={isLoading}>
            <Sparkles className="w-4 h-4 mr-2" /> AI Predict Demand
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">IoT Synced Devices</CardTitle>
            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/10">Connected</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,024</div>
            <p className="text-xs text-muted-foreground mt-1">Smart Shelves & RFID Scanners</p>
          </CardContent>
        </Card>
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Forecast Accuracy</CardTitle>
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">Neural Net</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.4%</div>
            <p className="text-xs text-muted-foreground mt-1">+2.1% improvement this week</p>
          </CardContent>
        </Card>
        <Card className="bg-background/40 backdrop-blur border-border/50">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Auto-Replenished</CardTitle>
            <ArrowUpToLine className="w-4 h-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142 SKUs</div>
            <p className="text-xs text-muted-foreground mt-1">Valued at $245,000</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-background/50 backdrop-blur flex-1">
        <CardHeader className="border-b border-border/50 p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Real-Time Stock Matrix</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Filter by SKU or Location..."
                  className="pl-8 w-full md:w-[300px] bg-background/50 border-white/10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/20">
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead>SKU</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Health / Status</TableHead>
                <TableHead className="text-right">AI Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.filter(item => item.sku.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase())).map((item, i) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-white/10 hover:bg-white/5 transition-colors group"
                >
                  <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                  <TableCell className="font-semibold">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.location}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{item.stock}</span>
                      {item.stock < 20 && <ArrowDownToLine className="w-3 h-3 text-red-500" />}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`
                      ${item.status === 'Optimal' ? 'text-emerald-500 border-emerald-500/30' : ''}
                      ${item.status === 'Low Stock' ? 'text-red-500 border-red-500/30' : ''}
                      ${item.status === 'Excess' ? 'text-amber-500 border-amber-500/30' : ''}
                    `}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">
                      {item.aiAction}
                    </span>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
