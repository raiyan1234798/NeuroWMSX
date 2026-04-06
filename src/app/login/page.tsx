"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrainCircuit, Fingerprint, ScanFace, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [step, setStep] = useState<"login" | "mfa">("login")

  return (
    <div className="min-h-screen bg-[#020510] flex items-center justify-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center"
      >
        <BrainCircuit className="w-16 h-16 text-primary mb-6 drop-shadow-[0_0_15px_hsl(var(--primary))]" />
        
        <h1 className="text-3xl font-extrabold tracking-widest text-white mb-2 uppercase">NeuroWMS<span className="text-primary">X</span></h1>
        <p className="text-sm text-gray-400 mb-8 font-mono">Autonomous AI Core Activation</p>

        <AnimatePresence mode="wait">
          {step === "login" ? (
            <motion.div
              key="login"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="w-full flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <Input 
                  placeholder="Commander ID / Email" 
                  className="bg-white/5 border-white/10 text-white h-12 focus-visible:ring-primary focus-visible:ring-2 font-mono"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input 
                  type="password" 
                  placeholder="Access Code" 
                  className="bg-white/5 border-white/10 text-white h-12 focus-visible:ring-primary focus-visible:ring-2 font-mono"
                />
              </div>
              <Button 
                className="w-full h-12 mt-4 font-bold tracking-wider hover:shadow-[0_0_20px_hsl(var(--primary))]" 
                onClick={() => setStep("mfa")}
              >
                INITIALIZE CORE <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="mfa"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="w-full flex flex-col gap-6 items-center"
            >
              <p className="text-primary font-mono text-sm self-start mb-2">Awaiting Biometric / 2FA...</p>
              
              <div className="flex gap-4 p-4 border border-white/10 rounded-xl bg-white/5 w-full justify-center">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 cursor-pointer transition-colors w-1/2">
                  <Fingerprint className="w-8 h-8 text-primary shadow-primary" />
                  <span className="text-xs font-mono text-gray-400">TOUCH ID</span>
                </div>
                <div className="h-full w-px bg-white/10" />
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/10 cursor-pointer transition-colors w-1/2">
                  <ScanFace className="w-8 h-8 text-secondary shadow-secondary" />
                  <span className="text-xs font-mono text-gray-400">FACE COM</span>
                </div>
              </div>

              <div className="flex gap-2 w-full justify-between">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Input 
                    key={i} 
                    className="w-12 h-14 bg-white/5 border-white/10 text-center text-xl text-white focus-visible:ring-primary"
                    maxLength={1}
                  />
                ))}
              </div>

              <Button 
                variant="outline"
                className="w-full mt-2 border-white/10 text-gray-400 hover:text-white"
                onClick={() => setStep("login")}
              >
                ABORT
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
