"use client";

import React from "react";
import { 
  MoreHorizontal, 
  ExternalLink, 
  Copy, 
  Trash2, 
  Pause, 
  Play,
  TrendingUp,
  BarChart2,
  Calendar
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Campaign {
  id: string;
  name: string;
  status: "Active" | "Paused" | "Completed" | "Draft" | "Scheduled";
  objective: string;
  budget: string;
  spent: string;
  reach: string;
  clicks: string;
  ctr: string;
  startDate: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Summer Sale 2026",
    status: "Active",
    objective: "Sales",
    budget: "$5,000",
    spent: "$1,240",
    reach: "45.2k",
    clicks: "2.1k",
    ctr: "4.6%",
    startDate: "Feb 01, 2026",
  },
  {
    id: "3",
    name: "New Product Launch",
    status: "Draft",
    objective: "Traffic",
    budget: "$10,000",
    spent: "$0",
    reach: "0",
    clicks: "0",
    ctr: "0%",
    startDate: "-",
  },
  {
    id: "4",
    name: "Retargeting Campaign",
    status: "Paused",
    objective: "Sales",
    budget: "$3,500",
    spent: "$2,100",
    reach: "12.8k",
    clicks: "850",
    ctr: "6.2%",
    startDate: "Dec 10, 2025",
  },
  {
    id: "5",
    name: "Holiday Special 2025",
    status: "Completed",
    objective: "Sales",
    budget: "$8,000",
    spent: "$8,000",
    reach: "89.1k",
    clicks: "5.4k",
    ctr: "5.1%",
    startDate: "Nov 20, 2025",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
    case "Paused": return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
    case "Completed": return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "Draft": return "bg-zinc-500/10 text-zinc-500 hover:bg-zinc-500/20";
    case "Scheduled": return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20";
    default: return "bg-zinc-500/10 text-zinc-500";
  }
};

export function CampaignsTable() {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[300px]">Campaign</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Objective</TableHead>
            <TableHead>Budget Usage</TableHead>
            <TableHead>Reach & Clicks</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCampaigns.map((campaign) => {
            const budgetValue = parseFloat(campaign.budget.replace(/[^0-9.]/g, ''));
            const spentValue = parseFloat(campaign.spent.replace(/[^0-9.]/g, ''));
            const progress = budgetValue > 0 ? (spentValue / budgetValue) * 100 : 0;

            return (
              <TableRow key={campaign.id} className="hover:bg-accent/50 transition-colors">
                <TableCell className="font-medium">
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground font-semibold">{campaign.name}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Started: {campaign.startDate}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-foreground">{campaign.objective}</span>
                </TableCell>
                <TableCell>
                  <div className="w-full max-w-[150px] space-y-1.5 ">
                    <div className="flex justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                      <span>{campaign.spent} spent</span>
                      <span>{campaign.budget}</span>
                    </div>
                    <Progress value={progress} className="h-1.5" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-foreground">
                       <TrendingUp className="w-3 h-3 text-green-500" />
                       <span className="text-sm font-semibold">{campaign.reach}</span>
                       <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Reach</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                       <BarChart2 className="w-3 h-3 text-blue-500" />
                       <span className="text-sm font-semibold">{campaign.clicks}</span>
                       <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Clicks ({campaign.ctr})</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" /> View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        {campaign.status === "Active" ? (
                          <>
                            <Pause className="mr-2 h-4 w-4 text-muted-foreground" /> Pause Campaign
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4 text-muted-foreground" /> Resume Campaign
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Copy className="mr-2 h-4 w-4 text-muted-foreground" /> Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete Campaign
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
