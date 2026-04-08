import React from "react";
import { Search, Info, Settings, Shield, UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { LoginForm } from "@/components/templates/login-form";
import { ProfileCard } from "@/components/templates/profile-card";

export default function AppleGallery() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      
      <header className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
          Apple UI Components
        </h1>
        <p className="text-lg md:text-xl text-[#86868b] dark:text-[#98989d]">
          The complete component library located securely in the `/apple` route.
        </p>
      </header>

      <div className="space-y-32">
        
        {/* Foundation UI Components */}
        <section>
          <div className="border-b border-[#d2d2d7] dark:border-[#424245] pb-4 mb-8">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Foundation UI</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Buttons & Indicators */}
            <Card hoverable className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Buttons & Badges</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="destructive">Error</Badge>
                </div>
              </div>

              <div className="pt-6 border-t border-[#f5f5f7] dark:border-[#2c2c2e]">
                <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Avatars & Tooltips</h3>
                <div className="flex items-center gap-6">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary" size="sm">
                          <Info className="w-4 h-4 mr-2" /> Hover Me
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Detailed info appears here.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary" size="sm">Open Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Settings</DialogTitle>
                        <DialogDescription>
                          Make changes to your Apple profile here.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <Input placeholder="Nickname" />
                      </div>
                      <Button fullWidth>Save Changes</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>

            {/* Inputs & Controls */}
            <Card hoverable className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Forms & Selection</h3>
                <div className="space-y-4">
                  <Input placeholder="Standard Input" />
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex items-center gap-8 pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm font-medium leading-none text-[#1d1d1f] dark:text-[#f5f5f7]">
                        Accept terms
                      </label>
                    </div>

                    <RadioGroup defaultValue="apple" className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apple" id="r1" />
                        <label htmlFor="r1" className="text-sm">Apple</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="orange" id="r2" />
                        <label htmlFor="r2" className="text-sm">Orange</label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#f5f5f7] dark:border-[#2c2c2e]">
                <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Sliders & Progress</h3>
                <div className="space-y-8">
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <Progress value={60} />
                </div>
              </div>
            </Card>

          </div>
        </section>

        {/* Layout Components */}
        <section>
          <div className="border-b border-[#d2d2d7] dark:border-[#424245] pb-4 mb-8">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Layout & Navigation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Tabs</h3>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4 p-4 border border-[#d2d2d7] dark:border-[#424245] rounded-xl text-sm text-[#86868b] dark:text-[#98989d]">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="password" className="mt-4 p-4 border border-[#d2d2d7] dark:border-[#424245] rounded-xl text-sm text-[#86868b] dark:text-[#98989d]">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </Card>

            <Card>
              <h3 className="text-lg font-medium mb-6 text-[#1d1d1f] dark:text-[#f5f5f7]">Accordion</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled like Apple?</AccordionTrigger>
                  <AccordionContent>Yes, it utilizes iOS minimalist principles.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </section>

        {/* Templates */}
        <section>
          <div className="border-b border-[#d2d2d7] dark:border-[#424245] pb-4 mb-8">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">Page Templates</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-[#f5f5f7] dark:bg-black -mx-6 px-6 py-12 rounded-[32px]">
            <div className="w-full">
              <h3 className="text-center font-medium mb-8 text-[#1d1d1f] dark:text-[#86868b]">Login Flow</h3>
              <LoginForm />
            </div>
            <div className="w-full">
              <h3 className="text-center font-medium mb-8 text-[#1d1d1f] dark:text-[#86868b]">Settings Layout</h3>
              <ProfileCard />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
