
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    
    try {
      // Simple mock admin authentication
      // In a real implementation, this would validate against a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.username === "admin" && data.password === "admin123") {
        // Store admin session in localStorage
        localStorage.setItem("fablabAdmin", JSON.stringify({ isLoggedIn: true }));
        
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        
        navigate("/admin/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid username or password",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login error",
        description: "There was a problem logging in",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                            <span className="sr-only">
                              {showPassword ? "Hide password" : "Show password"}
                            </span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-fablab-primary hover:bg-fablab-secondary"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Lock className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                
                {/* For demo purposes */}
                <p className="text-xs text-center text-muted-foreground mt-2">
                  For demo purposes, use username: <span className="font-semibold">admin</span> and password: <span className="font-semibold">admin123</span>
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
