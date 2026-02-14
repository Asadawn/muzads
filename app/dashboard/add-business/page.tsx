"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Building2, 
  Globe, 
  FileText, 
  Check, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Trash2,
  ExternalLink,
  Loader2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { createBusiness, getBusinessesByUser, deleteBusiness, APIError, BusinessResponse } from "@/lib/api";

const businessSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessUrl: z.string().url("Please enter a valid URL (e.g., https://example.com)"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type BusinessFormValues = z.infer<typeof businessSchema>;

export default function AddBusinessPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [businesses, setBusinesses] = useState<BusinessResponse[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  const form = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      businessName: "",
      businessUrl: "",
      description: "",
    },
    mode: "onChange",
  });

  const { register, handleSubmit, formState: { errors, isValid } } = form;

  useEffect(() => {
    if (user) {
      fetchBusinesses();
    }
  }, [user]);

  const fetchBusinesses = async () => {
    if (!user) return;
    setIsFetching(true);
    try {
      const data = await getBusinessesByUser(user.id);
      setBusinesses(data);
    } catch (error) {
      console.error("Failed to fetch businesses:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async (data: BusinessFormValues) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to add a business.",
      });
      return;
    }

    setIsLoading(true);
    try {
      await createBusiness({
        user_id: user.id,
        business_name: data.businessName,
        business_url: data.businessUrl,
        business_description: data.description,
      });
      
      toast({
        title: "Success!",
        description: `${data.businessName} has been added to your profile.`,
      });
      
      form.reset();
      fetchBusinesses();
    } catch (error) {
      const errorMessage = error instanceof APIError 
        ? error.message 
        : "Failed to create business. Please try again.";
        
      toast({
        variant: "destructive",
        title: "Failed to add business",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string | number, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      await deleteBusiness(id);
      toast({
        title: "Business Deleted",
        description: `${name} has been removed from your profile.`,
      });
      fetchBusinesses();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Delete Failed",
        description: error instanceof APIError ? error.message : "Failed to delete business.",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold bg-clip-text text-white inline-block">
          Manage Your <span className="bg-gradient-brand bg-clip-text text-transparent">Businesses</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Add and manage your business profiles to power your AI advertising campaigns.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left: Form Area */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="border-border shadow-2xl overflow-hidden bg-card/40 backdrop-blur-md border-t-primary/20">
            <div className="h-1.5 w-full bg-gradient-brand"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                Add New Business
              </CardTitle>
              <CardDescription className="text-base">
                Provide the details of your company to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="font-medium">Business Name</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="businessName"
                        placeholder="Acme Innovations"
                        {...register("businessName")}
                        className={cn(
                          "pl-10 bg-background/40 border-border/50 focus:border-primary/50 h-11",
                          errors.businessName && "border-destructive"
                        )}
                      />
                    </div>
                    {errors.businessName && <p className="text-xs text-destructive">{errors.businessName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessUrl" className="font-medium">Website URL</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="businessUrl"
                        placeholder="https://example.com"
                        {...register("businessUrl")}
                        className={cn(
                          "pl-10 bg-background/40 border-border/50 focus:border-primary/50 h-11",
                          errors.businessUrl && "border-destructive"
                        )}
                      />
                    </div>
                    {errors.businessUrl && <p className="text-xs text-destructive">{errors.businessUrl.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-medium">Business Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe your business, core products, and unique value proposition..."
                    className={cn(
                      "resize-none h-32 bg-background/40 border-border/50 focus:border-primary/50",
                      errors.description && "border-destructive"
                    )}
                    {...register("description")}
                  />
                  {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading || !isValid} 
                  className="w-full h-12 bg-gradient-brand hover:opacity-90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Create Business Profile
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right: Info/Stats */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-border bg-card/20 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Why it matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">AI Ad Generation</h4>
                  <p className="text-xs text-muted-foreground mt-1">Our system analyzes your profile to create high-converting copy automatically.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg h-fit">
                  <ShieldCheck className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Brand Protection</h4>
                  <p className="text-xs text-muted-foreground mt-1">Consistency is key. We ensure your ads always sound like your brand.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20">
            <h4 className="font-bold text-primary mb-2 italic">Pro Tip</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Include specific keywords your customers use. This helps our AI optimize your campaign targeting from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Business List Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" />
            Your Registered Businesses
          </h2>
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
            {businesses.length} Total
          </span>
        </div>

        {isFetching ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
            <p className="text-muted-foreground font-medium">Loading your businesses...</p>
          </div>
        ) : businesses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => (
              <Card key={biz.id} className="group relative border-border bg-card/40 hover:bg-card/60 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold truncate pr-8">{biz.business_name}</CardTitle>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDelete(biz.id, biz.business_name)}
                      className="absolute top-4 right-4 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <a 
                    href={biz.business_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-sm flex items-center gap-1 hover:underline w-fit"
                  >
                    <Globe className="w-3 h-3" />
                    {new URL(biz.business_url).hostname}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {biz.business_description || "No description provided."}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Ready for ads</div>
                    <Button variant="outline" size="sm" className="h-8 text-xs border-primary/20 hover:bg-primary/10">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-3xl border-2 border-dashed border-border/50 bg-card/10">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">No businesses yet</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Add your first business above to start creating high-impact AI advertising campaigns.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
