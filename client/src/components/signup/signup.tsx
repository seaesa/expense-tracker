import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { Button } from "@/components/core/shadcn/button"
import { Input } from "@/components/core/shadcn/input"
import { Label } from "@/components/core/shadcn/label"
import SignupImage from '@/assets/team.svg'
export default function Signup() {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const handleSignup = (data: any) => {
    console.log(data)
    console.log(errors)
  }
  return (
    <div className="w-full lg:grid min-h-svh lg:grid-cols-2">
      <div className="hidden bg-muted lg:flex justify-center items-center">
        <img
          src={SignupImage}
          alt="Image"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter field below to signup account
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignup)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input {...register('username')}
                id="username"
                type="username"
                placeholder="dangngochai123"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input {...register('email')}
                id="email"
                type="email"
                placeholder="m@example.com"

              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              <Input {...register('password')} id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
              </div>
              <Input {...register('confirmPassword')} id="confirmPassword" type="confirmPassword" />
            </div>
            {errors.root?.type}
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            You have an account? {" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
