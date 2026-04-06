"use client"

import { useState } from "react"
import { Bot, X, Sparkles, Send } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AICopilot() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 shadow-2xl shadow-primary/20"
          >
            <Card className="border border-primary/30 bg-background/90 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b border-border">
                <CardTitle className="flex items-center gap-2 text-sm font-bold flex-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Neuro AI Copilot</span>
                </CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="h-64 p-4 overflow-y-auto flex flex-col gap-4">
                <div className="flex gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted p-2 rounded-lg rounded-tl-none">
                    Hello! I'm your NeuroWMS X Copilot. Ask me to optimize routes, summarize stock, or predict demand!
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t border-border mt-auto">
                <div className="relative w-full">
                  <Input placeholder="Ask anything..." className="pr-10" />
                  <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-8 w-8 text-primary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary))] flex items-center justify-center ring-4 ring-primary/20 cursor-pointer"
      >
        <Bot className="w-6 h-6" />
      </motion.button>
    </>
  )
}
