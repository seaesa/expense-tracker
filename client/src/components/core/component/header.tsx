import { Link } from "react-router-dom";
import { Button } from "../shadcn/button";
import { Separator } from "../shadcn/separator";
import { Switch } from "../shadcn/switch";
import { Label } from "../shadcn/label";
import { useTheme } from "@/providers/theme";
import { useEffect } from "react";
const navBar = [
  {
    href: "/",
    title: 'Home'
  },
  {
    href: "/",
    title: 'Products'
  },
  {
    href: "/",
    title: 'Features'
  },
  {
    href: "/",
    title: 'Contact'
  },

]
export default function Header() {
  const { theme, setTheme } = useTheme()
  useEffect(() => { console.log(theme) }, [])
  return (
    <>
      <div className="flex max-h-[52px] items-center justify-between">
        <div>
          <Link to="/" className="flex h-full w-auto items-center">
            <img src="/logo.png" alt="logo.png" className="h-full w-auto object-contain" />
            <span className="mx-2 text-xl font-bold">NOSION</span>
          </Link>
        </div>
        <div className="flex flex-1">
          {navBar.map((nav, index) => (
            <nav key={index} className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Field title={nav.title} href={nav.href} />
            </nav>
          ))}
        </div>
        <div className="flex mx-2">
          <div className="flex items-center space-x-2 mr-6">
            <Label className="capitalize transition-all" htmlFor="mode">{`${theme} Mode`}</Label>
            <Switch id='mode' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
          </div>
          <div className="flex items-center">
            <Button asChild variant='ghost' className="hover:bg-none!">
              <Link to='login'>
                Login
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-6 mr-4" />
            <Button asChild>
              <Link to='signup'>
                Get Nosion Free
              </Link>
            </Button>
          </div>
        </div>
      </div >
    </>
  )
}

const Field = ({ href = '', title = '' }) => {
  return (
    <>
      <div className="mx-2">
        <Link to={href} className="text-muted-foreground transition-colors hover:text-foreground" >
          {title}
        </Link>
      </div>
    </>
  )
}