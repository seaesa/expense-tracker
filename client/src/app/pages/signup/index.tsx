'use client';

import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { postData } from '@/services/axios';
import { useCookies } from 'react-cookie';
import { useUserStore } from '@/stores/user';
import Globe from '@/assets/svg/globe.svg';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
const formSchema = z
  .object({
    username: z.string().min(1).default('ngochai1'),
    email: z.string().min(1).email().default('hairipi111@gmail.com'),
    password: z.string().min(1).default('cocainit'),
    confirmPassword: z.string().min(1).default('cocainit'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'password not match!',
    path: ['confirmPassword'],
  });
export function Component() {
  const [, setCookies] = useCookies(['token']);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSetUser = useUserStore((state) => state.setUser);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: formSchema.parse({}),
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const user: any = await postData('/auth/register', values);
    setCookies('token', user.access_token);
    handleSetUser({
      id: user.id,
      email: user.email,
      username: user.username,
    });
    navigate('/dashboard');
    setLoading(false)
  };
  return (
    <>
      <div className='w-full lg:grid min-h-svh lg:grid-cols-2'>
        <div className='hidden bg-muted lg:flex justify-center items-center'>
          <img src={Globe} alt='Image' className='h-[80%] w-[80%] object-cover' />
        </div>
        <div className='flex items-center justify-center py-12'>
          <div className='mx-auto grid w-[350px] gap-6'>
            <div className='grid gap-2 text-center'>
              <h1 className='text-3xl font-bold'>Create an account</h1>
              <p className='text-balance text-muted-foreground'>create your new account</p>
            </div>
            <Form {...form}>
              <form className='grid gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
                <div className='grid gap-2'>
                  <Label htmlFor='username'>Username</Label>
                  <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id='username' type='text' placeholder='ngochai' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id='email' type='email' placeholder='m@gmail.com' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='password'>Password</Label>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id='password' type='password' autoComplete='true' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='confirmPassword'>Confirm Password</Label>
                  <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id='confirmPassword' type='password' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button disabled={loading} type='submit' className='w-full'>
                  {loading && <Loader2 className='animate-spin' size={20} />}
                  Sign Up
                </Button>
                <Button variant='outline' className='w-full'>
                  Sign Up with Google
                </Button>
              </form>
            </Form>
            <div className='mt-4 text-center text-sm'>
              You have an account?{' '}
              <Link to='/login' className='underline'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 