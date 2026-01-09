import { GitBranch, GitCommit, Upload, Download, Plus, RotateCcw, Merge, Folder, Package, HardDrive, Cloud, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const GitWorkflowSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('git-workflow')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])
  const workflowSteps = [
    {
      id: 'workspace',
      title: 'Workspace',
      description: 'Your local working directory',
      icon: '📁',
      position: 'top-left',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      id: 'stage',
      title: 'Stage',
      description: 'Staging area (Index)',
      icon: '📦',
      position: 'top-right',
      color: 'from-purple-500/20 to-purple-600/20',
    },
    {
      id: 'local-repo',
      title: 'Local Repository',
      description: 'Your local version history',
      icon: '💾',
      position: 'bottom-right',
      color: 'from-green-500/20 to-green-600/20',
    },
    {
      id: 'remote-repo',
      title: 'Remote Repository',
      description: 'Shared online repository',
      icon: '☁️',
      position: 'bottom-left',
      color: 'from-orange-500/20 to-orange-600/20',
    },
  ]

  const gitCommands = [
    {
      command: 'git add',
      from: 'workspace',
      to: 'stage',
      icon: Plus,
      description: 'Stage changes',
      color: 'text-blue-400',
    },
    {
      command: 'git reset',
      from: 'stage',
      to: 'workspace',
      icon: RotateCcw,
      description: 'Unstage changes',
      color: 'text-purple-400',
    },
    {
      command: 'git commit',
      from: 'stage',
      to: 'local-repo',
      icon: GitCommit,
      description: 'Save to local history',
      color: 'text-green-400',
    },
    {
      command: 'git push',
      from: 'local-repo',
      to: 'remote-repo',
      icon: Upload,
      description: 'Upload to remote',
      color: 'text-orange-400',
    },
    {
      command: 'git fetch',
      from: 'remote-repo',
      to: 'local-repo',
      icon: Download,
      description: 'Download from remote',
      color: 'text-yellow-400',
    },
    {
      command: 'git pull',
      from: 'remote-repo',
      to: 'workspace',
      icon: Merge,
      description: 'Fetch + Merge',
      color: 'text-pink-400',
      isCombined: true,
    },
  ]

  return (
    <section id="git-workflow" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Git Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            How <span className="text-primary">Git</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the fundamental workflow of Git version control system. Understand how changes flow between your workspace, staging area, local repository, and remote repository.
          </p>
        </div>

        <div className="relative min-h-[800px] md:min-h-[900px]">
          {/* Top Section: Remote and Local Repositories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Remote Repository - Top Left */}
            <div className={`relative git-area-card ${isVisible ? 'git-card-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="relative gradient-border p-8 md:p-10 bg-gradient-to-br from-orange-500/20 via-orange-600/15 to-orange-700/10 git-card-glow backdrop-blur-sm border-2 border-orange-500/30 overflow-hidden group h-full rounded-xl">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-orange-500/20 border-2 border-orange-400/40 flex items-center justify-center">
                        <Cloud className="w-10 h-10 text-orange-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">Remote Repository</h3>
                      <p className="text-base md:text-lg text-orange-300/80 leading-relaxed">
                        Shared online repository
                      </p>
                      <p className="text-sm md:text-base text-orange-200/60 mt-2">
                        (GitHub, GitLab, Bitbucket)
                      </p>
                    </div>
                  </div>
                  
                  {/* Service badges */}
                  <div className="flex gap-3 flex-wrap mt-6">
                    <span className="px-4 py-2 rounded-lg bg-card/90 border border-orange-500/30 text-sm font-medium text-foreground/90 backdrop-blur-sm">GitHub</span>
                    <span className="px-4 py-2 rounded-lg bg-card/90 border border-orange-500/30 text-sm font-medium text-foreground/90 backdrop-blur-sm">GitLab</span>
                    <span className="px-4 py-2 rounded-lg bg-card/90 border border-orange-500/30 text-sm font-medium text-foreground/90 backdrop-blur-sm">Bitbucket</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Repository - Top Right */}
            <div className={`relative git-area-card ${isVisible ? 'git-card-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative gradient-border p-8 md:p-10 bg-gradient-to-br from-green-500/20 via-green-600/15 to-green-700/10 git-card-glow backdrop-blur-sm border-2 border-green-500/30 overflow-hidden group h-full rounded-xl">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center">
                        <HardDrive className="w-10 h-10 text-green-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-green-400">Local Repository</h3>
                      <p className="text-base md:text-lg text-green-300/80 leading-relaxed">
                        Your local copy of the project's version history
                      </p>
                    </div>
                  </div>
                  
                  {/* Visual indicators */}
                  <div className="flex gap-4 items-center mt-6">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                      <div className="w-5 h-5 rounded-full bg-white/80 shadow-lg"></div>
                      <div className="w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                    </div>
                    <span className="text-sm text-green-300/70">Version history</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Git Icon with Pulse Animation */}
          <div className="relative flex justify-center items-center my-8 md:my-12 z-20">
            <div className={`git-workflow-center-icon ${isVisible ? 'git-icon-visible' : ''}`}>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/50 flex items-center justify-center backdrop-blur-md git-icon-pulse shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <GitBranch className="w-16 h-16 md:w-24 md:h-24 text-primary git-icon-rotate drop-shadow-lg" />
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
              </div>
              <div className="git-icon-glow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 git-orbital-ring"></div>
            </div>
          </div>

          {/* Animated Connection Lines */}
          {isVisible && (
            <div className="absolute inset-0 pointer-events-none z-[5] hidden">
              {/* Remote Repository to Center - More visible arrow */}
              <svg className="absolute top-[18%] left-[22%] w-[28%] h-[22%] git-connection-line" style={{ animationDelay: '0.3s' }}>
                <defs>
                  <marker id="arrowhead-orange-line" markerWidth="18" markerHeight="18" refX="16" refY="5" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0 0, 18 6, 0 12" fill="#f97316" />
                  </marker>
                  <linearGradient id="gradient-orange-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow-orange-line" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M 10 90 Q 60 45, 110 5" 
                  stroke="url(#gradient-orange-line)" 
                  strokeWidth="5" 
                  fill="none" 
                  markerEnd="url(#arrowhead-orange-line)" 
                  className="git-path-animate" 
                  filter="url(#glow-orange-line)"
                  strokeLinecap="round"
                />
              </svg>

              {/* Local Repository to Center - More visible arrow */}
              <svg className="absolute top-[18%] right-[22%] w-[28%] h-[22%] git-connection-line" style={{ animationDelay: '0.4s' }}>
                <defs>
                  <marker id="arrowhead-green-line" markerWidth="18" markerHeight="18" refX="16" refY="5" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0 0, 18 6, 0 12" fill="#22c55e" />
                  </marker>
                  <linearGradient id="gradient-green-line" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow-green-line" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M 110 90 Q 60 45, 10 5" 
                  stroke="url(#gradient-green-line)" 
                  strokeWidth="5" 
                  fill="none" 
                  markerEnd="url(#arrowhead-green-line)" 
                  className="git-path-animate" 
                  filter="url(#glow-green-line)"
                  strokeLinecap="round"
                />
              </svg>

              {/* Command Cards to Center - git add */}
              <svg className="absolute bottom-[45%] left-[8%] w-[20%] h-[25%] git-connection-line" style={{ animationDelay: '0.6s' }}>
                <defs>
                  <marker id="arrowhead-blue-cmd" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0 0, 14 5, 0 10" fill="#60a5fa" />
                  </marker>
                  <linearGradient id="gradient-blue-cmd" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow-blue-cmd" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M 50 100 Q 50 50, 50 0" 
                  stroke="url(#gradient-blue-cmd)" 
                  strokeWidth="3" 
                  fill="none" 
                  markerEnd="url(#arrowhead-blue-cmd)" 
                  className="git-path-animate" 
                  filter="url(#glow-blue-cmd)"
                  strokeLinecap="round"
                />
              </svg>

              {/* Command Cards to Center - git commit */}
              <svg className="absolute bottom-[45%] right-[8%] w-[20%] h-[25%] git-connection-line" style={{ animationDelay: '0.7s' }}>
                <defs>
                  <marker id="arrowhead-yellow-cmd" markerWidth="14" markerHeight="14" refX="12" refY="4" orient="auto" markerUnits="strokeWidth">
                    <polygon points="0 0, 14 5, 0 10" fill="#eab308" />
                  </marker>
                  <linearGradient id="gradient-yellow-cmd" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ca8a04" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow-yellow-cmd" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M 50 100 Q 50 50, 50 0" 
                  stroke="url(#gradient-yellow-cmd)" 
                  strokeWidth="3" 
                  fill="none" 
                  markerEnd="url(#arrowhead-yellow-cmd)" 
                  className="git-path-animate" 
                  filter="url(#glow-yellow-cmd)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}


          {/* Git Commands Flow */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Git Commands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {gitCommands.map((cmd, index) => {
                const IconComponent = cmd.icon
                return (
                  <div
                    key={index}
                    className={`relative gradient-border p-5 md:p-6 card-hover bg-gradient-to-br from-card/80 to-card/40 git-command-card backdrop-blur-sm border-primary/20 ${isVisible ? 'git-command-visible' : ''}`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="relative flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 ${cmd.color} git-command-icon border border-primary/20 shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <code className="text-base font-mono font-bold text-primary git-command-text block mb-2">
                          {cmd.command}
                        </code>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cmd.description}
                        </p>
                        {cmd.isCombined && (
                          <div className="mt-3 pt-3 border-t border-primary/10">
                            <p className="text-xs text-muted-foreground italic flex items-center gap-1">
                              <span>=</span>
                              <code className="text-primary">git fetch</code>
                              <span>+</span>
                              <code className="text-primary">git merge</code>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Explanation Box */}
          <div className={`mt-12 gradient-border p-8 md:p-10 bg-gradient-to-br from-card/60 via-card/40 to-card/60 git-explanation-box backdrop-blur-md border-primary/30 shadow-xl ${isVisible ? 'git-explanation-visible' : ''}`} style={{ animationDelay: '1.1s' }}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Merge className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Quick Tip</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Understanding Git Pull
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-6">
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 git-pull-equation backdrop-blur-sm">
                  <code className="text-lg md:text-xl font-mono font-bold text-primary">git pull</code>
                </div>
                <span className="text-2xl text-muted-foreground hidden md:block">=</span>
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 git-pull-equation backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                  <code className="text-lg md:text-xl font-mono font-bold text-primary">git fetch</code>
                </div>
                <span className="text-2xl text-muted-foreground hidden md:block">+</span>
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 git-pull-equation backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                  <code className="text-lg md:text-xl font-mono font-bold text-primary">git merge</code>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <code className="text-primary font-mono">git pull</code> is a convenient command that combines <code className="text-primary font-mono">git fetch</code> and <code className="text-primary font-mono">git merge</code>. It downloads changes from the remote repository and automatically merges them into your workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitWorkflowSection
