import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Shield, 
  Bug, 
  Network, 
  Lock, 
  Cpu, 
  ChevronRight, 
  ExternalLink, 
  Skull, 
  Wifi,
  Activity,
  Search
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TypewriterEffect = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export default function Home() {
  const [command, setCommand] = useState("");

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() === "") return;
    // Mock command handling
    setCommand("");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col gap-12 pb-24">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center border-b border-primary/30 pb-4"
      >
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Terminal className="w-5 h-5 text-primary animate-pulse" />
          <span className="font-bold tracking-widest">ROOT ACCESS GRANTED</span>
          <span className="inline-block w-2 h-4 bg-primary animate-cursor-blink ml-1"></span>
        </div>
        <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
          <span className="hidden md:inline">SYS.STATUS: <span className="text-primary">ONLINE</span></span>
          <span>IP: 127.0.0.1</span>
          <span>UPTIME: 99.99%</span>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="space-y-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter mb-4 glow-text">
            OFFENSIVE SECURITY <br />
            <span className="text-muted-foreground opacity-50">//</span> RESEARCHER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light border-l-2 border-primary pl-4 py-2">
            <TypewriterEffect text="Breaking systems to make them unbreakable." delay={1000} />
          </p>
        </motion.div>
        
        <div className="flex gap-4 pt-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold px-8 py-6 h-auto text-lg transition-all hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]">
            INITIATE_CONTACT
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 px-8 py-6 h-auto text-lg">
            VIEW_LOGS
          </Button>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          { label: "CVEs FOUND", value: "14", icon: Bug },
          { label: "BOUNTIES COLLECTED", value: "$45,000+", icon: Shield },
          { label: "SYSTEMS AUDITED", value: "120+", icon: Network },
        ].map((stat, index) => (
          <div key={index} className="border border-primary/30 bg-primary/5 p-6 flex items-center justify-between hover:border-primary hover:bg-primary/10 transition-colors group">
            <div>
              <div className="text-xs text-muted-foreground mb-1 tracking-widest">{stat.label}</div>
              <div className="text-3xl font-bold text-primary group-hover:text-white transition-colors">{stat.value}</div>
            </div>
            <stat.icon className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
          </div>
        ))}
      </motion.div>

      {/* Services (Attack Vectors) */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-primary">ATTACK_VECTORS</h2>
          <Separator className="flex-1 bg-primary/30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Web App Pentesting", 
              icon: Search,
              desc: "Comprehensive vulnerability assessment of web applications following OWASP Top 10 methodology.",
              tags: ["Burp Suite", "SQLi", "XSS"]
            },
            { 
              title: "Network Security", 
              icon: Wifi,
              desc: "Internal and external infrastructure testing to identify misconfigurations and weak points.",
              tags: ["Nmap", "Metasploit", "Active Directory"]
            },
            { 
              title: "Smart Contract Auditing", 
              icon: Lock,
              desc: "Security analysis of EVM-based smart contracts to prevent reentrancy, overflows, and logic errors.",
              tags: ["Solidity", "Ethers.js", "DeFi"]
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-black border border-primary/20 h-full hover:border-primary transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] group">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-bounce" />
                  <CardTitle className="text-xl text-primary group-hover:text-white transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-primary/30 text-primary/70 bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-primary">HALL_OF_FAME</h2>
          <Separator className="flex-1 bg-primary/30" />
        </div>

        <div className="space-y-4">
          {[
            { id: "CVE-2024-8892", target: "OpenSource CMS", severity: "CRITICAL", type: "RCE" },
            { id: "HackerOne", target: "Fortune 500 Tech Corp", severity: "HIGH", type: "IDOR" },
            { id: "Bugcrowd", target: "Financial Inst.", severity: "MEDIUM", type: "Subdomain Takeover" },
            { id: "CVE-2023-1024", target: "IoT Device Firmware", severity: "CRITICAL", type: "Buffer Overflow" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Skull className="w-4 h-4 text-primary/50 group-hover:text-primary" />
                  <span className="font-bold text-lg text-white group-hover:text-primary transition-colors">{item.id}</span>
                  <span className="text-muted-foreground">// {item.target}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 font-bold ${
                    item.severity === "CRITICAL" ? "bg-red-900/30 text-red-500" : 
                    item.severity === "HIGH" ? "bg-orange-900/30 text-orange-500" : 
                    "bg-yellow-900/30 text-yellow-500"
                  }`}>
                    [{item.severity}]
                  </span>
                  <span className="text-sm text-primary/70">{item.type}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CLI */}
      <footer className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur border-t border-primary/30 p-2 z-50">
        <form onSubmit={handleCommandSubmit} className="max-w-7xl mx-auto flex items-center gap-2 text-sm md:text-base font-mono">
          <span className="text-primary font-bold whitespace-nowrap">root@kali:~#</span>
          <input 
            type="text" 
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder:text-muted-foreground/50"
            placeholder="enter command..."
            autoFocus
          />
        </form>
      </footer>
    </div>
  );
}
