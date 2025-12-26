import { useEffect, useState } from 'react'; // [cite: 202]
import AsyncStorage from '@react-native-async-storage/async-storage'; // [cite: 203]

export function useTheme() {
  const [theme, setTheme] = useState('light'); // [cite: 205]

  useEffect(() => {
    AsyncStorage.getItem('theme').then(stored => {
      if (stored) setTheme(stored); // [cite: 207, 209]
    });
  }, []);

  const toggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'; // [cite: 213]
    setTheme(nextTheme);
    await AsyncStorage.setItem('theme', nextTheme); // [cite: 215]
  };

  return { theme, toggleTheme }; // [cite: 216]
}