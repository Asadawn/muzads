import React from "react"
import { 
  TrendingUp, 
  Users, 
  MousePointerClick,
  MoreHorizontal
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

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        
        <div className="col-span-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Overview</h3>
          </div>
          <div className="h-[300px] w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg flex items-end justify-between p-4 px-8">
            {[40, 70, 45, 90, 60, 80, 50, 95, 65].map((h, i) => (
              <div key={i} className="w-8 bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors relative group">
                <div 
                  className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500 group-hover:bg-primary/80"
                  style={{ height: `${h}%` }} 
                />
              </div>
            ))}
          </div>
        </div>

        
        <div className="col-span-3 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Recent Campaigns</h3>
            <button className="text-xs text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: "Summer Sale 2026", status: "Active", reach: "12.5k", color: "bg-green-500" },
              { name: "New Product Launch", status: "Draft", reach: "-", color: "bg-yellow-500" },
              { name: "Brand Awareness", status: "Ended", reach: "45.2k", color: "bg-zinc-500" },
              { name: "Retargeting Q1", status: "Active", reach: "8.1k", color: "bg-green-500" },
              { name: "Email Sequence", status: "Scheduled", reach: "-", color: "bg-blue-500" },
            ].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-border/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${campaign.color}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{campaign.name}</p>
                    <p className="text-xs text-muted-foreground">{campaign.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{campaign.reach}</span>
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
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
