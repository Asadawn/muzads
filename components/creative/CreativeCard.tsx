"use client";

import React from "react";
import { 
  MoreVertical, 
  Download, 
  Trash2, 
  Copy, 
  Eye, 
  Image as ImageIcon, 
  Video, 
  FileText,
  Calendar,
  MousePointer2
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type CreativeType = "image" | "video" | "copy";

export interface Creative {
  id: string;
  name: string;
  type: CreativeType;
  thumbnail?: string;
  content?: string;
  size?: string;
  dimensions?: string;
  duration?: string;
  usageCount: number;
  lastUsed: string;
}

interface CreativeCardProps {
  creative: Creative;
}

export function CreativeCard({ creative }: CreativeCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      {/* Media Preview */}
      <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
        {creative.type === "image" && creative.thumbnail ? (
          <img 
            src={creative.thumbnail} 
            alt={creative.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : creative.type === "video" ? (
          <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center gap-2">
            <Video className="w-12 h-12 text-primary/40" />
            <span className="text-[10px] font-bold text-primary/60 uppercase racking-widest">{creative.duration}</span>
          </div>
        ) : creative.type === "copy" ? (
          <div className="p-6 text-sm text-muted-foreground line-clamp-6 text-center italic">
            "{creative.content}"
          </div>
        ) : (
          <ImageIcon className="w-12 h-12 text-muted-foreground/20" />
        )}

        {/* Status Overlay */}
        <div className="absolute top-3 left-3 flex gap-2">
          {creative.type === "image" && <Badge variant="secondary" className="bg-black/60 text-white backdrop-blur-md border-0">IMG</Badge>}
          {creative.type === "video" && <Badge variant="secondary" className="bg-blue-600/80 text-white backdrop-blur-md border-0">VIDEO</Badge>}
          {creative.type === "copy" && <Badge variant="secondary" className="bg-purple-600/80 text-white backdrop-blur-md border-0">COPY</Badge>}
        </div>

        {/* Quick Actions Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow-lg">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="primary" className="h-9 w-9 rounded-full shadow-lg">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 min-w-0">
            <h4 className="font-semibold text-sm text-foreground truncate">{creative.name}</h4>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
              {creative.type !== "copy" && <span>{creative.dimensions || creative.size}</span>}
              {creative.type !== "copy" && <span className="w-1 h-1 rounded-full bg-border" />}
              <span className="flex items-center gap-1">
                <MousePointer2 className="w-2.5 h-2.5" /> Used {creative.usageCount}x
              </span>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground -mr-2">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 border-border bg-card">
              <DropdownMenuItem className="cursor-pointer">
                <Copy className="mr-2 h-4 w-4 text-muted-foreground" /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <FileText className="mr-2 h-4 w-4 text-muted-foreground" /> Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:bg-destructive/10 cursor-pointer">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
