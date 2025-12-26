import { createContext, useContext, useState, useEffect } from 'react'; // [cite: 140]
import AsyncStorage from '@react-native-async-storage/async-storage'; // [cite: 54, 179]

const AuthContext = createContext(undefined); // [cite: 141, 142]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // [cite: 144]
  const [loading, setLoading] = useState(true);

  // Uygulama açıldığında kayıtlı kullanıcıyı yükle [cite: 176, 178]
  useEffect(() => {
    AsyncStorage.getItem('user').then(stored => {
      if (stored) setUser(JSON.parse(stored)); // [cite: 180]
      setLoading(false);
    });
  }, []);

  // Kullanıcı değiştiğinde AsyncStorage'ı güncelle [cite: 184, 185]
  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user)); // [cite: 186, 187]
    } else {
      AsyncStorage.removeItem('user'); // [cite: 188, 190]
    }
  }, [user]);

  const login = (username) => setUser({ username }); // [cite: 145]
  const logout = () => setUser(null); // [cite: 146]

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext); // [cite: 152, 153]
  if (!context) throw new Error('useAuth must be used inside AuthProvider'); // [cite: 157, 158]
  return context;
}