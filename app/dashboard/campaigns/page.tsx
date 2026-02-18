import React from "react";
import Link from "next/link";
import { Plus, Megaphone, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CampaignsTable } from "@/components/campaigns/CampaignsTable";

export default function CampaignsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Megaphone className="w-6 h-6 text-primary" />
            </div>
            Campaigns
          </h1>
          <p className="text-muted-foreground">
            Manage, track, and optimize your marketing campaigns in one place.
          </p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <Link href="/dashboard/create" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Campaign
          </Link>
        </Button>
      </div>

      {/* Stats Overview (Optional, could be added later or kept simple) */}

      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-xl border border-border shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by campaign name..." 
            className="pl-9 bg-background/50 border-border focus:bg-background transition-colors h-10"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex-1 md:flex-none flex items-center gap-2 h-10 border-border">
            <Filter className="w-4 h-4 text-muted-foreground" />
            Filters
          </Button>
          <div className="h-6 w-[1px] bg-border hidden md:block" />
          <p className="text-sm text-muted-foreground hidden lg:block">
            Showing <span className="text-foreground font-medium">5</span> campaigns
          </p>
        </div>
      </div>

      {/* Campaigns Table */}
      <CampaignsTable />
    </div>
  );
}
