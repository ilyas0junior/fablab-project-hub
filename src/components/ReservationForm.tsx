
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { materials } from "@/data/materialsData";

const reservationSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  studentId: z.string().min(5, { message: "Student ID must be at least 5 characters." }),
  email: z.string().email({ message: "Please enter a valid school email." }).endsWith(".edu", { message: "Please use your school email (.edu)." }),
  materialId: z.string({ required_error: "Please select a material to use." }),
  reservationDate: z.date({ required_error: "Please select a reservation date." }),
  projectName: z.string().min(3, { message: "Project name must be at least 3 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }).max(500, { message: "Description must not exceed 500 characters." }),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const ReservationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      studentId: "",
      email: "",
      materialId: "",
      projectName: "",
      description: "",
    },
  });

  const availableMaterials = materials.filter(m => m.status === "available");

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate server delay
      
      // In a real app, you would send data to your backend here
      console.log("Reservation submitted:", data);
      
      toast({
        title: "Reservation Submitted",
        description: "Your reservation request has been sent to the admin for approval.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your reservation.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input placeholder="12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@university.edu" {...field} />
                </FormControl>
                <FormDescription>
                  Please use your school email address ending with .edu
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="materialId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Material</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment to use" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableMaterials.length > 0 ? (
                    availableMaterials.map((material) => (
                      <SelectItem key={material.id} value={String(material.id)}>
                        {material.name} ({material.type})
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="none" disabled>
                      No equipment currently available
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormDescription>
                Only available equipment is shown. Check the Materials page for more details.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="reservationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Reservation Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                You can book up to 3 months in advance.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome Project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please describe your project, its goals, and how you plan to use the equipment..."
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Detail what you plan to create and any specific requirements.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-fablab-primary hover:bg-fablab-secondary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Reservation Request"}
        </Button>
      </form>
    </Form>
  );
};

export default ReservationForm;
