import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Globe from '@/assets/svg/globe.svg';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { postData } from '@/services/axios';
import { useCookies } from 'react-cookie';
import { useUserStore } from '@/stores/user';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
const formSchema = z.object({
  email: z.string().trim().min(1).email(),
  password: z.string().trim().min(1),
});
export function Component() {
  const [, setCookies] = useCookies(['token']);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSetUser = useUserStore((state) => state.setUser);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: 'hairipi100@gmail.com',
      password: 'cocainit',
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const user: any = await postData('/auth/login', values);
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
    <div className='w-full lg:grid min-h-svh lg:grid-cols-2'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form className='grid gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input id='email' type='email' placeholder='m@gmail.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid gap-2'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input id='password' type='password' autoComplete='true' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  to='/forgot-password'
                  className='ml-auto inline-block text-sm hover:underline'
                >
                  Forgot your password?
                </Link>
              </div>
              <Button disabled={loading} type='submit'>
                {loading ? <Loader2 className='animate-spin' /> :
                  'Login'
                }
              </Button>
              <Button variant='outline' className='w-full'>
                Login with Google
              </Button>
            </form>
          </Form>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link to='/signup' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted lg:flex justify-center items-center'>
        <img src={Globe} alt='Image' className='h-[80%] w-[80%] object-cover' />
      </div>
    </div>
  );
}
