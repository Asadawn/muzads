"use strict";
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Target, 
  Users, 
  Image as ImageIcon, 
  Calendar,
  Upload,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// --- VALIDATION SCHEMAS ---

const campaignSchema = z.object({
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  objective: z.string().min(1, "Please select an objective"),
  audienceLocation: z.string().min(1, "Location is required"),
  audienceAgeMin: z.number().min(13).max(65),
  audienceAgeMax: z.number().min(13).max(65),
  budgetType: z.enum(["daily", "lifetime"]),
  budgetAmount: z.string().min(1, "Budget is required"), // keeping as string for input handling
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  adHeadline: z.string().min(3, "Headline is required"),
  adBody: z.string().min(10, "Body text must be at least 10 characters"),
});

type CampaignFormValues = z.infer<typeof campaignSchema>;

const STEPS = [
  { id: 1, title: "Details", icon: Target, description: "Name & Objective" },
  { id: 2, title: "Audience", icon: Users, description: "Targeting" },
  { id: 3, title: "Creative", icon: ImageIcon, description: "Ad Content" },
  { id: 4, title: "Budget", icon: Calendar, description: "Schedule & Spend" },
];

export default function CreateCampaignPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      name: "",
      objective: "",
      audienceLocation: "",
      audienceAgeMin: 18,
      audienceAgeMax: 65,
      budgetType: "daily",
      budgetAmount: "",
      adHeadline: "",
      adBody: "",
    },
    mode: "onChange", 
  });

  const { register, handleSubmit, formState: { errors }, watch, setValue } = form;
  const formData = watch();

  const handleNext = async () => {
    // In a real app, you'd trigger validation for the specific step fields here
    // For now, we just proceed
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data: CampaignFormValues) => {
    console.log("Form Submitted:", data);
    // Submit logic here
    alert("Campaign Created! (Check console for data)");
  };

  // Helper to handle simple file upload simulation
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Campaign</h1>
        <p className="text-muted-foreground">
          Launch a new ad campaign in 4 simple steps.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary -z-10 transform -translate-y-1/2" />
        <div className="grid grid-cols-4 gap-4">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-background p-2 rounded-lg">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-lg scale-110"
                      : isCompleted
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                <div className="text-center">
                  <p className={cn("text-sm font-medium", isActive ? "text-foreground" : "text-muted-foreground")}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left: Form Area */}
        <div className="lg:col-span-2">
          <Card className="border-border shadow-sm">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                
                {/* STEP 1: CAMPAIGN DETAILS */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="name">Campaign Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., Summer Sale 2026"
                        {...register("name")}
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Campaign Objective</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {["Awareness", "Traffic", "Sales"].map((obj) => (
                          <div
                            key={obj}
                            onClick={() => setValue("objective", obj)}
                            className={cn(
                              "cursor-pointer rounded-lg border-2 p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all",
                              formData.objective === obj
                                ? "border-primary bg-primary/5"
                                : "border-muted bg-card"
                            )}
                          >
                            <div className="p-2 rounded-full bg-background border shadow-sm">
                                {obj === "Awareness" && <Users className="w-4 h-4 text-blue-500" />}
                                {obj === "Traffic" && <Target className="w-4 h-4 text-green-500" />}
                                {obj === "Sales" && <Calendar className="w-4 h-4 text-purple-500" />}
                            </div>
                            <span className="text-sm font-medium">{obj}</span>
                          </div>
                        ))}
                      </div>
                      <input type="hidden" {...register("objective")} />
                      {errors.objective && <p className="text-xs text-destructive">{errors.objective.message}</p>}
                    </div>
                  </div>
                )}

                {/* STEP 2: AUDIENCE */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="location">Target Location</Label>
                      <Select 
                        onValueChange={(val) => setValue("audienceLocation", val)} 
                        defaultValue={formData.audienceLocation}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="global">Global</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.audienceLocation && <p className="text-xs text-destructive">{errors.audienceLocation.message}</p>}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Age Range</Label>
                        <span className="text-sm text-muted-foreground">
                          {formData.audienceAgeMin} - {formData.audienceAgeMax}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[formData.audienceAgeMin, formData.audienceAgeMax]}
                        max={65}
                        min={13}
                        step={1}
                        minStepsBetweenThumbs={1}
                        onValueChange={(vals) => {
                          setValue("audienceAgeMin", vals[0]);
                          setValue("audienceAgeMax", vals[1]);
                        }}
                        className="py-4"
                      />
                    </div>

                    <div className="space-y-2">
                        <Label>Gender</Label>
                        <div className="flex gap-4">
                             <div className="flex items-center space-x-2">
                                <input type="radio" name="gender" id="all" className="accent-primary" defaultChecked />
                                <Label htmlFor="all" className="font-normal">All</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                <input type="radio" name="gender" id="men" className="accent-primary" />
                                <Label htmlFor="men" className="font-normal">Men</Label>
                             </div>
                             <div className="flex items-center space-x-2">
                                <input type="radio" name="gender" id="women" className="accent-primary"/>
                                <Label htmlFor="women" className="font-normal">Women</Label>
                             </div>
                        </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: CREATIVE */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="space-y-2">
                      <Label>Ad Media</Label>
                      <div className="border-2 border-dashed border-input rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-accent/50 transition-colors cursor-pointer relative">
                        <input 
                            type="file" 
                            accept="image/*" 
                            className="absolute inset-0 opacity-0 cursor-pointer" 
                            onChange={handleImageUpload}
                        />
                        {uploadedImage ? (
                            <div className="relative w-full h-48 rounded-md overflow-hidden">
                                <img src={uploadedImage} alt="Preview" className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full text-white cursor-pointer" onClick={(e) => {
                                    e.preventDefault();
                                    setUploadedImage(null);
                                }}>
                                    <X className="w-4 h-4"/>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Upload className="w-8 h-8 text-muted-foreground mb-4" />
                                <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            </>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="headline">Ad Headline</Label>
                      <Input
                        id="headline"
                        placeholder="Write a catchy headline..."
                        {...register("adHeadline")}
                      />
                      {errors.adHeadline && <p className="text-xs text-destructive">{errors.adHeadline.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="body">Ad Text</Label>
                      <Textarea
                        id="body"
                        placeholder="Describe your product or service..."
                        className="resize-none h-24"
                        {...register("adBody")}
                      />
                      {errors.adBody && <p className="text-xs text-destructive">{errors.adBody.message}</p>}
                    </div>
                  </div>
                )}

                {/* STEP 4: BUDGET & SCHEDULE */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="grid sm:grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <Label>Budget Type</Label>
                            <Select 
                                onValueChange={(val: any) => setValue("budgetType", val)} 
                                defaultValue={formData.budgetType}
                            >
                                <SelectTrigger>
                                <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="daily">Daily Budget</SelectItem>
                                <SelectItem value="lifetime">Lifetime Budget</SelectItem>
                                </SelectContent>
                            </Select>
                         </div>
                         <div className="space-y-2">
                            <Label>Amount ($)</Label>
                            <Input 
                                type="number" 
                                placeholder="0.00" 
                                {...register("budgetAmount")}
                            />
                            {errors.budgetAmount && <p className="text-xs text-destructive">{errors.budgetAmount.message}</p>}
                         </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <Label>Schedule</Label>
                         <div className="flex flex-col gap-2 p-4 border rounded-lg bg-card">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Run continuously starting today</span>
                                <Switch defaultChecked />
                            </div>
                         </div>
                         <p className="text-xs text-muted-foreground">Your ads will run until you pause them.</p>
                    </div>
                  </div>
                )}

              </form>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            
            {currentStep < STEPS.length ? (
              <Button onClick={handleNext} className="gap-2">
                Next Step
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
                <Button onClick={handleSubmit(onSubmit)} className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg">
                Launch Campaign
                <Check className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Right: Preview Area */}
        <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Live Preview
                </h3>
                <Card className="border-border overflow-hidden bg-background">
                    <div className="aspect-video bg-muted relative flex items-center justify-center">
                        {uploadedImage ? (
                            <img src={uploadedImage} alt="Ad Preview" className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center p-4">
                                <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                                <p className="text-xs text-muted-foreground">Ad Image Preview</p>
                            </div>
                        )}
                        <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                            Sponsored
                        </div>
                    </div>
                    <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold text-sm line-clamp-1">{formData.adHeadline || "Your Headline Here"}</h4>
                                <p className="text-xs text-muted-foreground">Muzads • Sponsored</p>
                            </div>
                           <Button size="sm" variant="outline" className="h-7 text-xs">Learn More</Button>
                        </div>
                        <p className="text-sm text-foreground/80 line-clamp-3">
                            {formData.adBody || "Your primary text will appear here. Describe your product vividly to capture audience attention."}
                        </p>
                    </CardContent>
                    <div className="bg-muted/30 p-3 border-t text-xs text-muted-foreground flex justify-between">
                        <span>{formData.objective || "Objective"} Campaign</span>
                        <span>Targeting: {formData.audienceLocation || "Global"}</span>
                    </div>
                </Card>

                <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-4">
                    <h4 className="text-sm font-semibold text-blue-500 mb-1">Pro Tip</h4>
                    <p className="text-xs text-blue-500/80">
                        {currentStep === 1 && "Choose an objective that aligns with your business goals."}
                        {currentStep === 2 && "Broad targeting often works best for brand awareness campaigns."}
                        {currentStep === 3 && "Use high-quality images with minimal text for better Reach."}
                        {currentStep === 4 && "Start with a smaller daily budget and scale up as you see results."}
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
 