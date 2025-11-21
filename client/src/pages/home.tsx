import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Activity,
  Code,
  Award
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CyberButton = ({ children, variant = "primary", className = "" }: { children: React.ReactNode, variant?: "primary" | "secondary", className?: string }) => (
  <button className={`
    relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-display font-bold uppercase tracking-wider text-xs sm:text-sm
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

export default function Home() {
  const [scanPercent, setScanPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const cycle = (now % 19000) / 19000;
      let percent;
      
      if (cycle < 10/19) {
        // Fill 0% to 100% with slowdown after 80%
        if (cycle < 8/19) {
          // 0-8s: Fill 0% → 80% (fast)
          percent = (cycle / (8/19)) * 80;
        } else {
          // 8-10s: Fill 80% → 100% (slow)
          percent = 80 + ((cycle - 8/19) / (2/19)) * 20;
        }
      } else if (cycle < 14/19) {
        // Reverse 100% → 50%
        percent = 100 - ((cycle - 10/19) / (4/19)) * 50;
      } else {
        // Fill 50% to 100% with slowdown after 80%
        if (cycle < 14/19 + 3/19) {
          // 50-80% (fast)
          percent = 50 + ((cycle - 14/19) / (3/19)) * 30;
        } else {
          // 80-100% (slow)
          percent = 80 + ((cycle - (14/19 + 3/19)) / (2/19)) * 20;
        }
      }
      
      setScanPercent(Math.floor(Math.min(100, Math.max(0, percent))));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-hidden relative">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 md:p-12 flex flex-col gap-16 md:gap-24">
        
        {/* Header / Nav */}
        <header className="flex justify-between items-center py-3 md:py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-black font-bold font-display text-lg">
              AT
            </div>
            <span className="font-display text-xl tracking-widest text-white">ABHINAV<span className="text-primary">THOMAS</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary cursor-pointer transition-colors">01_HOME</a>
            <a href="#modules" className="hover:text-primary cursor-pointer transition-colors">02_VECTORS</a>
            <a href="#about" className="hover:text-primary cursor-pointer transition-colors">03_ABOUT</a>
            <span className="text-accent">STATUS: ONLINE</span>
          </div>
        </header>

        {/* Hero Section */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative pt-10 md:pt-0">
          <div className="absolute -top-8 left-0 font-mono text-accent text-xs opacity-50">/// SECTION_01_INITIALIZATION</div>
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-accent font-mono text-xs uppercase">
              <Activity className="w-3 h-3" />
              <span>System Breach Detected</span>
            </div>
            
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-2 text-white glitch-text" data-text="ABHINAV">
                ABHINAV
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glitch-text" data-text="THOMAS">
                THOMAS
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md font-light border-l-4 border-primary pl-4 md:pl-6">
              Cybersecurity researcher with hands-on experience in ethical hacking, penetration testing, and vulnerability assessments.
              <span className="text-white font-bold"> Break the loop.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })} className={`
                relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-display font-bold uppercase tracking-wider text-xs sm:text-sm
                transition-all duration-200 group
                bg-primary/10 text-primary hover:bg-primary hover:text-black border border-primary/50
                clip-path-slant
              `}>
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50"></span>
                Initialize Protocol
              </button>
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
                 SCANNING TARGETS... <span className="text-red-500 font-bold">{scanPercent}%</span>
               </div>
               <div className="w-48 h-1 bg-white/10 overflow-hidden">
                 <div className="h-full bg-secondary transition-all duration-100" style={{ width: `${scanPercent}%` }}></div>
               </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
               <div className="w-48 h-48 border border-secondary/30 rounded-full border-dashed"></div>
             </div>
          </div>
        </section>

        {/* Services / Modules */}
        <section id="modules" className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">ACTIVE MODULES</h2>
              <p className="text-muted-foreground font-mono text-sm">/// CORE_COMPETENCIES</p>
            </div>
            <div className="font-mono text-accent text-xl">02</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                title: "MOBILE_SECURITY",
                icon: Lock,
                desc: "Android pentesting and mobile application security assessments. Identifying vulnerabilities in mobile platforms.",
                color: "text-accent",
                border: "border-accent/20 hover:border-accent"
              },
              {
                title: "MALWARE_ANALYSIS",
                icon: Code,
                desc: "Dissecting malicious software to understand behavior and impact on systems.",
                color: "text-primary",
                border: "border-primary/20 hover:border-primary"
              },
              {
                title: "SOC_MONITORING",
                icon: Activity,
                desc: "Incident response, log analysis (Splunk/Wazuh), and threat detection in real-time environments.",
                color: "text-secondary",
                border: "border-secondary/20 hover:border-secondary"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`
                  relative bg-card p-6 md:p-8 border ${item.border} transition-colors duration-300
                  before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                `}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 ${item.color} bg-white/5 flex items-center justify-center rounded-sm`}>
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 ${item.color} tracking-wider`}>{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-mono">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience / Education */}
        <section id="about" className="space-y-12">
           <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">SYSTEM LOGS</h2>
              <p className="text-muted-foreground font-mono text-sm">/// ACADEMIC_&_PROJECT_HISTORY</p>
            </div>
            <div className="font-mono text-accent text-xl">03</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl text-primary font-display tracking-wider mb-4 md:mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 md:w-5 md:h-5" />
                PROJECTS_KERNEL
              </h3>
              
              <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-8 md:space-y-12 ml-2">
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
                  <div className="absolute -left-[37px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--color-secondary)]"></div>
                  <h4 className="text-xl text-white font-bold mb-1">SOC Log Analysis</h4>
                  <p className="text-sm text-muted-foreground font-mono mb-2">Splunk, Windows Event Logs</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Configured a simulated SOC environment using Splunk. Analyzed system logs to detect brute-force attacks, privilege escalation, and lateral movement.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="relative group">
                  <div className="absolute -left-[37px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_var(--color-accent)]"></div>
                  <h4 className="text-xl text-white font-bold mb-1">Vulnerable Lab Setup</h4>
                  <p className="text-sm text-muted-foreground font-mono mb-2">Kali Linux, Metasploitable2, Nmap</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built an isolated lab with attacker/victim VMs. Conducted port scanning, OS fingerprinting, and analyzed network traffic for suspicious patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl text-secondary font-display tracking-wider mb-4 md:mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4 md:w-5 md:h-5" />
                ACADEMIC_DATA
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white/5 border border-white/10 p-4 md:p-6 hover:border-secondary/50 transition-colors group">
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
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">CREDENTIALS</h2>
              <p className="text-muted-foreground font-mono text-sm">/// PROFESSIONAL_CERTIFICATIONS</p>
            </div>
            <div className="font-mono text-accent text-xl">04</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { cert: "Certified Ethical Hacker v12", color: "text-primary" },
              { cert: "Adv. Diploma Cyber Defence", color: "text-secondary" },
              { cert: "Certified Penetration Tester", color: "text-accent" },
              { cert: "Certified Cybersecurity Educator Professional", color: "text-secondary" },
              { cert: "Network Defense Essentials", color: "text-primary" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="bg-white/5 border border-white/10 p-4 md:p-6 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Award className={`w-4 h-4 md:w-5 md:h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  <h3 className="text-sm md:text-base text-white font-bold font-mono leading-snug">{item.cert}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl text-white mb-2">SYSTEM RANKINGS</h2>
              <p className="text-muted-foreground font-mono text-sm">/// PLATFORM_ACHIEVEMENTS</p>
            </div>
            <div className="font-mono text-accent text-xl">05</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: "HackTheBox", rank: "Hacker Rank", icon: Zap, color: "text-primary" },
              { title: "TryHackMe", rank: "Top 2% Global", icon: Activity, color: "text-secondary" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="text-sm md:text-base text-white font-bold font-mono mb-0.5 md:mb-1">{item.title}</h3>
                    <p className={`text-xs md:text-sm font-bold ${item.color}`}>{item.rank}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 font-mono text-xs md:text-sm">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white mb-4 text-lg font-display">ABHINAV THOMAS</h4>
            <p className="text-muted-foreground max-w-xs">
              Security Researcher specializing in VAPT, Soc Analysis, Web App Security, and Malware Analysis, etc.
            </p>
          </div>
          
          <div>
            <h4 className="text-primary mb-4">LINKS</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-white cursor-pointer">
                <a href="https://github.com/AbhiToms" target="_blank" rel="noreferrer">GitHub</a>
              </li>
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
