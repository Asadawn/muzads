"use client";

import React, { useState } from "react";
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
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

const businessSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessUrl: z.string().url("Please enter a valid URL (e.g., https://example.com)"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type BusinessFormValues = z.infer<typeof businessSchema>;

export default function AddBusinessPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

  const onSubmit = async (data: BusinessFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      console.log("Adding business:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: `${data.businessName} has been added to your profile.`,
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-brand bg-clip-text text-transparent inline-block">
          Add Your Business
        </h1>
        <p className="text-muted-foreground">
          Tell us about your business to get better campaign recommendations and insights.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left: Form Area */}
        <div className="lg:col-span-3">
          <Card className="border-border shadow-md overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="h-1.5 w-full bg-gradient-brand"></div>
            <CardHeader>
              <CardTitle className="text-xl">Business Profile</CardTitle>
              <CardDescription>
                Provide the essential details of your company.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="e.g., Acme Innovations"
                    {...register("businessName")}
                    className={cn(
                      "bg-background/50 border-border focus:border-primary/50 transition-all",
                      errors.businessName && "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {errors.businessName && <p className="text-xs text-destructive mt-1">{errors.businessName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessUrl" className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Business Website URL
                  </Label>
                  <Input
                    id="businessUrl"
                    placeholder="https://www.yourdomain.com"
                    {...register("businessUrl")}
                    className={cn(
                      "bg-background/50 border-border focus:border-primary/50 transition-all",
                      errors.businessUrl && "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {errors.businessUrl && <p className="text-xs text-destructive mt-1">{errors.businessUrl.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Business Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your business does, your mission, and your target audience..."
                    className={cn(
                      "resize-none h-32 bg-background/50 border-border focus:border-primary/50 transition-all",
                      errors.description && "border-destructive focus-visible:ring-destructive"
                    )}
                    {...register("description")}
                  />
                  {errors.description && <p className="text-xs text-destructive mt-1">{errors.description.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading || !isValid} 
                  className="w-full h-12 bg-gradient-brand hover:opacity-90 text-white font-semibold transition-all duration-300 shadow-lg group"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Adding Business...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Save Business Profile
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right: Benefits Area */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <Zap className="w-4 h-4 text-primary" />
            Why add your business?
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground">Tailored Campaigns</h4>
                  <p className="text-xs text-muted-foreground mt-1">Our AI uses your business profile to generate ads that actually resonate with your audience.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground">Brand Consistency</h4>
                  <p className="text-xs text-muted-foreground mt-1">Ensure every ad follows your brand guidelines and voice automatically.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors">
              <div className="flex gap-4">
                <div className="p-2 h-fit rounded-lg bg-primary/10 border border-primary/20">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground">Unified Dashboard</h4>
                  <p className="text-xs text-muted-foreground mt-1">Manage multiple businesses and their campaigns from a single location.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent border border-primary/10">
            <h4 className="text-sm font-semibold text-primary mb-2">Pro Tip</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Be as descriptive as possible in your business description. The more detail you provide about your target audience and unique selling points, the more effective your AI-generated campaigns will be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
