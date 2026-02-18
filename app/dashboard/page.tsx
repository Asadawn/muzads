import React from "react"
import { 
  TrendingUp, 
  Users, 
  MousePointerClick,
  MoreHorizontal,
  Plus
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: TrendingUp },
          { label: "Active Campaigns", value: "12", change: "+2", icon: MegaphoneIcon },
          { label: "Total Leads", value: "2,350", change: "+180.1%", icon: Users },
          { label: "Click Rate", value: "4.35%", change: "+19%", icon: MousePointerClick },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-green-500 flex items-center">
                {stat.change} <span className="text-muted-foreground ml-1">from last month</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Analytics Overview */}
        <div className="col-span-4 rounded-xl border border-border bg-card p-6 shadow-sm overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-semibold text-foreground text-lg">Campaign Performance</h3>
              <p className="text-xs text-muted-foreground">Reach and engagement over the last 12 days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-muted-foreground">Reach</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] relative mt-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[100, 75, 50, 25, 0].map((label) => (
                <div key={label} className="w-full flex items-center gap-4 group">
                  <span className="text-[10px] text-muted-foreground w-8 text-right font-medium">{label}%</span>
                  <div className="flex-1 h-[1px] bg-border/40 group-last:bg-border" />
                </div>
              ))}
            </div>

            {/* Bars Container */}
            <div className="absolute inset-0 pl-12 pr-4 flex items-end justify-between pb-[1px]">
              {[40, 70, 45, 90, 60, 80, 50, 95, 65, 85, 45, 75].map((h, i) => (
                <div key={i} className="w-full max-w-[32px] mx-1 h-full relative group cursor-pointer">
                  {/* Background Bar (Track) */}
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/5 rounded-t-sm transition-colors group-hover:bg-primary/10" />
                  
                  {/* Fill Bar */}
                  <div 
                    className="absolute inset-x-0 bottom-0 bg-primary/60 rounded-t-sm transition-all duration-1000 ease-out group-hover:bg-primary shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    style={{ height: `${h}%` }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[11px] px-2.5 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 z-20 border border-border pointer-events-none font-semibold">
                    {h * 125} Reach
                  </div>

                  {/* Date/Label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Feb {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border flex justify-between items-center">
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-500 font-semibold">+12.5%</span> increase from last week
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="col-span-3 rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground text-lg">Recent Campaigns</h3>
            <a href="/dashboard/campaigns" className="text-xs font-medium text-primary hover:underline transition-all">View All</a>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { name: "Summer Sale 2026", status: "Active", reach: "12.5k", color: "bg-green-500" },
              { name: "New Product Launch", status: "Draft", reach: "-", color: "bg-yellow-500" },
              { name: "Brand Awareness", status: "Ended", reach: "45.2k", color: "bg-zinc-500" },
              { name: "Retargeting Q1", status: "Active", reach: "8.1k", color: "bg-green-500" },
              { name: "Email Sequence", status: "Scheduled", reach: "-", color: "bg-blue-500" },
            ].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-all border border-transparent hover:border-border/50 group">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${campaign.color} ring-4 ring-background`} />
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{campaign.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{campaign.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">{campaign.reach}</span>
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <a 
            href="/dashboard/create" 
            className="mt-6 w-full py-2.5 rounded-lg bg-primary/5 border border-primary/20 text-primary text-sm font-medium text-center hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Campaign
          </a>
        </div>
      </div>

    </div>
  )
}

function MegaphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}
