import { useTheme } from '@/providers/theme'
import { Switch } from '../core/shadcn/switch'
import { Label } from '../core/shadcn/label'

const SwitchTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="flex items-center space-x-2 mr-6">
        <Label className="capitalize transition-all" htmlFor='mode'>{`${theme} Mode`}</Label>
        <Switch id='mode' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      </div>
    </>
  )
}
export default SwitchTheme