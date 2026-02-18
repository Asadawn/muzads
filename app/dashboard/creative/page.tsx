"use client";

import React, { useState } from "react";
import { 
  Library, 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  Image as ImageIcon, 
  Video, 
  Type, 
  Upload,
  ArrowUpDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreativeCard, Creative, CreativeType } from "@/components/creative/CreativeCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockCreatives: Creative[] = [
  {
    id: "1",
    name: "Luxury Watch - Social Main",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    dimensions: "1080x1080",
    size: "1.2 MB",
    usageCount: 12,
    lastUsed: "2 days ago"
  },
  {
    id: "2",
    name: "Product Showcase Video",
    type: "video",
    duration: "00:15",
    size: "15.4 MB",
    usageCount: 5,
    lastUsed: "5 days ago"
  },
  {
    id: "3",
    name: "Summer Sale Headline",
    type: "copy",
    content: "Get up to 50% off on all items this summer. Limited time offer only at Muzads store.",
    usageCount: 24,
    lastUsed: "1 day ago"
  },
  {
    id: "4",
    name: "Brand Logo - Transparent",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=800&auto=format&fit=crop",
    dimensions: "512x512",
    size: "450 KB",
    usageCount: 45,
    lastUsed: "Today"
  },
  {
    id: "5",
    name: "Fitness App Reel",
    type: "video",
    duration: "00:30",
    size: "42.1 MB",
    usageCount: 2,
    lastUsed: "1 week ago"
  },
  {
    id: "6",
    name: "Coffee Shop Promo",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    dimensions: "1920x1080",
    size: "2.8 MB",
    usageCount: 8,
    lastUsed: "3 days ago"
  }
];

export default function CreativeLibraryPage() {
  const [filter, setFilter] = useState<CreativeType | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCreatives = mockCreatives.filter(c => {
    const matchesFilter = filter === "all" || c.type === filter;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 shadow-inner">
              <Library className="w-6 h-6 text-primary" />
            </div>
            Creative Library
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Manage your images, videos, and ad copy. Store once, use across all campaigns.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex items-center gap-2 border-border hover:bg-muted font-medium">
            <Upload className="w-4 h-4" />
            Bulk Upload
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] px-6 font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Add Creative
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-card/50 p-4 rounded-2xl border border-border/60 backdrop-blur-sm sticky top-2 z-10 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
          <div className="relative w-full sm:w-[350px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search assets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50 border-border/80 focus:bg-background h-11 transition-all rounded-xl"
            />
          </div>
          
          <Tabs defaultValue="all" onValueChange={(v) => setFilter(v as any)} className="w-full sm:w-auto">
            <TabsList className="bg-muted/50 p-1 h-11 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg px-4 font-medium">All</TabsTrigger>
              <TabsTrigger value="image" className="rounded-lg px-3 flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Images</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="rounded-lg px-3 flex items-center gap-2">
                <Video className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Videos</span>
              </TabsTrigger>
              <TabsTrigger value="copy" className="rounded-lg px-3 flex items-center gap-2">
                <Type className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Copy</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-3 self-end lg:self-auto">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl h-11 w-11">
            <ArrowUpDown className="w-4.5 h-4.5" />
          </Button>
          <div className="h-8 w-px bg-border/60 mx-1 hidden sm:block" />
          <div className="flex bg-muted/40 p-1 rounded-xl border border-border/20">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-primary bg-background shadow-sm rounded-lg hover:bg-background">
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground rounded-lg">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid Display */}
      {filteredCreatives.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredCreatives.map((creative) => (
            <CreativeCard key={creative.id} creative={creative} />
          ))}
        </div>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed border-border rounded-3xl bg-card/20 animate-pulse-glow">
          <div className="p-4 rounded-full bg-muted/50">
            <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">No assets found</h3>
            <p className="text-muted-foreground max-w-xs">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
          <Button variant="outline" onClick={() => {setFilter("all"); setSearchQuery("");}} className="mt-4 rounded-xl">
             Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
