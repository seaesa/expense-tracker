import { Link } from "react-router-dom";
import { Input } from "../core/shadcn/input";
import { Label } from "../core/shadcn/label";
import { Button } from "../core/shadcn/button";
import LoginImage from '@/assets/team.svg';
import useFormCustom from "@/hocs/test";
import { useEffect } from "react";
const Login = (props: any) => {
  useEffect(() => {
    console.log(props)
  }, [])
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
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
export default useFormCustom(Login)