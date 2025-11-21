import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  ChevronRight, 
  ExternalLink, 
  Eye, 
  Wifi,
  Activity,
  Search,
  Code,
  Database,
  Layers,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CyberButton = ({ children, variant = "primary", className = "" }: { children: React.ReactNode, variant?: "primary" | "secondary", className?: string }) => (
  <button className={`
    relative px-8 py-4 font-display font-bold uppercase tracking-wider text-sm
    transition-all duration-200 group
    ${variant === "primary" 
      ? "bg-primary/10 text-primary hover:bg-primary hover:text-black border border-primary/50" 
      : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white border border-secondary/50"}
    clip-path-slant
    ${className}
  `}>
    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50"></span>
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50"></span>
    {children}
  </button>
);

const ScrambleText = ({ text, className = "" }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className={`inline-block cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-hidden relative">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-24">
        
        {/* Header / Nav */}
        <header className="flex justify-between items-center py-4 border-b border-white/10">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-black font-bold font-display text-lg group-hover:animate-spin">
              AT
            </div>
            <span className="font-display text-xl tracking-widest text-white group-hover:text-primary transition-colors">
              <ScrambleText text="ABHINAV" />
              <span className="text-primary"><ScrambleText text="THOMAS" /></span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer transition-colors hover:glitch-hover">01_HOME</span>
            <span className="hover:text-primary cursor-pointer transition-colors hover:glitch-hover">02_VECTORS</span>
            <span className="hover:text-primary cursor-pointer transition-colors hover:glitch-hover">03_ABOUT</span>
            <span className="text-accent animate-pulse">STATUS: ONLINE</span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-accent font-mono text-xs uppercase">
              <Activity className="w-3 h-3" />
              <span>System Breach Detected</span>
            </div>
            
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-2 text-white glitch-text" data-text="ABHINAV">
                ABHINAV
              </h1>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glitch-text" data-text="THOMAS">
                THOMAS
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-md font-light border-l-4 border-primary pl-6">
              Cybersecurity researcher with hands-on experience in ethical hacking, penetration testing, and vulnerability assessments.
              <span className="text-white font-bold"> Break the loop.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <CyberButton variant="primary">Initialize Protocol</CyberButton>
              <a href="https://www.linkedin.com/in/abhitoms" target="_blank" rel="noreferrer">
                <CyberButton variant="secondary">Connect on LinkedIn</CyberButton>
              </a>
            </div>
          </div>

          {/* Hero Visual / HUD */}
          <div className="relative hidden lg:block h-[500px] w-full border border-white/10 bg-black/40 backdrop-blur-sm p-4 clip-path-slant-reverse">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             
             {/* HUD Elements */}
             <div className="absolute top-8 right-8 text-right font-mono text-xs text-primary space-y-1">
               <div>COORDS: 34.291, -118.291</div>
               <div>NET: SECURE</div>
               <div>ENC: AES-256</div>
             </div>

             <div className="absolute bottom-8 left-8 font-mono text-xs text-secondary">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                 SCANNING TARGETS...
               </div>
               <div className="w-48 h-1 bg-white/10 overflow-hidden">
                 <div className="h-full bg-secondary w-[60%] animate-pulse"></div>
               </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <div className="w-48 h-48 border border-secondary/30 rounded-full border-dashed"></div>
             </div>
          </div>
        </section>

        {/* Services / Modules */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">ACTIVE MODULES</h2>
              <p className="text-muted-foreground font-mono text-sm">/// CORE_COMPETENCIES</p>
            </div>
            <div className="font-mono text-accent text-xl">02</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "ETHICAL_HACKING",
                icon: Shield,
                desc: "Vulnerability Assessment & Penetration Testing (VAPT). Systematic review of security weaknesses.",
                color: "text-primary",
                border: "border-primary/20 hover:border-primary"
              },
              {
                title: "WEB_SECURITY",
                icon: Globe,
                desc: "Securing web applications against OWASP Top 10 vulnerabilities, XSS, SQLi, and logic flaws.",
                color: "text-secondary",
                border: "border-secondary/20 hover:border-secondary"
              },
              {
                title: "SOC_MONITORING",
                icon: Activity,
                desc: "Incident response, log analysis (Splunk/Wazuh), and threat detection in real-time environments.",
                color: "text-accent",
                border: "border-accent/20 hover:border-accent"
              },
              {
                title: "MALWARE_ANALYSIS",
                icon: Code,
                desc: "Dissecting malicious software to understand behavior and impact on systems.",
                color: "text-primary",
                border: "border-primary/20 hover:border-primary"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`
                  relative bg-card p-8 border ${item.border} transition-colors duration-300
                  before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                `}
              >
                <div className={`w-12 h-12 mb-6 ${item.color} bg-white/5 flex items-center justify-center rounded-sm`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${item.color} tracking-wider`}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-mono mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white transition-colors cursor-pointer group">
                  <span>Deploy Module</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="scanner-line"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience / Education */}
        <section className="space-y-12">
           <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">SYSTEM LOGS</h2>
              <p className="text-muted-foreground font-mono text-sm">/// ACADEMIC_&_PROJECT_HISTORY</p>
            </div>
            <div className="font-mono text-accent text-xl">03</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl text-primary font-display tracking-wider mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                PROJECTS_KERNEL
              </h3>
              
              <div className="relative border-l border-white/10 pl-8 space-y-12 ml-2">
                {/* Project 1 */}
                <div className="relative group">
                  <div className="absolute -left-[37px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--color-primary)]"></div>
                  <h4 className="text-xl text-white font-bold mb-1">Automated AI Web Scanner</h4>
                  <p className="text-sm text-muted-foreground font-mono mb-2">Python, Requests, BeautifulSoup</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed a command-line scanner using AI assistance to detect XSS, SQL Injection, and CSRF vulnerabilities. Implemented input fuzzing and payload injection with clean reporting.
                  </p>
                </div>

                {/* Project 2 */}
                <div className="relative group">
                  <div className="absolute -left-[37px] top-0 w-4 h-4 bg-white/20 rounded-full border-4 border-black group-hover:bg-secondary group-hover:shadow-[0_0_10px_var(--color-secondary)] transition-all duration-300"></div>
                  <h4 className="text-xl text-white font-bold mb-1">SOC Log Analysis</h4>
                  <p className="text-sm text-muted-foreground font-mono mb-2">Splunk, Windows Event Logs</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Configured a simulated SOC environment using Splunk. Analyzed system logs to detect brute-force attacks, privilege escalation, and lateral movement.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="relative group">
                  <div className="absolute -left-[37px] top-0 w-4 h-4 bg-white/20 rounded-full border-4 border-black group-hover:bg-accent group-hover:shadow-[0_0_10px_var(--color-accent)] transition-all duration-300"></div>
                  <h4 className="text-xl text-white font-bold mb-1">Vulnerable Lab Setup</h4>
                  <p className="text-sm text-muted-foreground font-mono mb-2">Kali Linux, Metasploitable2, Nmap</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built an isolated lab with attacker/victim VMs. Conducted port scanning, OS fingerprinting, and analyzed network traffic for suspicious patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl text-secondary font-display tracking-wider mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                ACADEMIC_DATA
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 hover:border-secondary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-bold">B.Sc. Digital & Cyber Forensic Science</h4>
                      <p className="text-secondary text-sm font-mono">Srinivas University, Mangalore</p>
                    </div>
                    <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/5">2023 - Present</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Focusing on digital forensics, cyber defense, and security analysis.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 hover:border-secondary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-bold">Higher Secondary (Commerce)</h4>
                      <p className="text-secondary text-sm font-mono">Govt. Higher Secondary School, Kaniyanchal</p>
                    </div>
                    <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/5">March 2020</Badge>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 hover:border-secondary/50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-bold">SSLC</h4>
                      <p className="text-secondary text-sm font-mono">Govt. Higher Secondary School, Kaniyanchal</p>
                    </div>
                    <Badge variant="outline" className="border-secondary/30 text-secondary bg-secondary/5">March 2018</Badge>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 hover:border-accent/50 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-bold">Certifications</h4>
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["CEH v12", "Adv. Diploma Cyber Defence", "Certified Penetration Tester", "Network Defense Essentials"].map(cert => (
                      <Badge key={cert} variant="secondary" className="bg-black border border-white/20 text-muted-foreground hover:text-white hover:border-white transition-colors">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 hover:border-primary/50 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-bold">Achievements</h4>
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      HackTheBox – Hacker Rank
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      TryHackMe – Top 2% Global Rank
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white mb-4 text-lg font-display">ABHINAV THOMAS</h4>
            <p className="text-muted-foreground max-w-xs">
              Security Researcher specializing in VAPT, Web App Security, and Malware Analysis.
            </p>
          </div>
          
          <div>
            <h4 className="text-primary mb-4">LINKS</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-white cursor-pointer">GitHub</li>
              <li className="hover:text-white cursor-pointer">
                <a href="https://www.linkedin.com/in/abhitoms" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li className="hover:text-white cursor-pointer">Twitter / X</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-secondary mb-4">CONTACT</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>abhinavthomas15@gmail.com</li>
              <li>+91 9496396882</li>
              <li>Kannur, Kerala, India</li>
              <li>
                 <div className="flex items-center gap-2 mt-4">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-green-500">SYSTEM OPERATIONAL</span>
                 </div>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    </div>
  );
}
