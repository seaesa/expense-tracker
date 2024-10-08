import { createContext, useContext, useEffect, useState } from 'react';
import NextTopLoader from 'nextjs-toploader';

type Theme = 'dark' | 'light';

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

interface ThemeProviderState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
	theme: 'dark',
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
	children,
	defaultTheme = 'light',
	storageKey = 'themes',
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme
	);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');

		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<>
			<NextTopLoader color='#d3d3d3' showSpinner={false} />
			<ThemeProviderContext.Provider {...props} value={value}>
				{children}
			</ThemeProviderContext.Provider>
		</>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};
