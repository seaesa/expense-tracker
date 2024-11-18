import { useTheme } from '@/providers/theme';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
};
export default SwitchTheme;
