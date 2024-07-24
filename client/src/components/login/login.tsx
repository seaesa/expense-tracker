"use client";

import { Link } from "react-router-dom";
import { Input } from "../core/shadcn/input";
import { Label } from "../core/shadcn/label";
import { Button } from "../core/shadcn/button";
import LoginImage from '@/assets/team.svg';
import { Form, FormControl, FormField, FormItem, FormMessage } from "../core/shadcn/form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
const formSchema = z.object({
  email: z.string().min(6, {
    message: 'field must be required'
  }),
  password: z.string().email({
    message: 'this field must be email'
  })
})
const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const handleSubmit = (values: z.infer<typeof formSchema>) => {

    console.log(values)
  }
  return (
    <div className="w-full lg:grid min-h-svh lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form} >
            <form className="grid gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <FormField control={form.control} name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormField control={form.control} name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input id="password" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex justify-center items-center">
        <img
          src={LoginImage}
          alt="Image"
          className="h-[80%] w-[80%] object-cover"
        />
      </div>
    </div>
  )
}
export default Login