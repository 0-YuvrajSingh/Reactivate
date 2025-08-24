
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme';
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

export default function App() {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
        setThemeMode("light");
    };

    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.classList.remove("light", "dark");
        htmlElement.classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center bg-gray-100 dark:bg-gray-900">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}