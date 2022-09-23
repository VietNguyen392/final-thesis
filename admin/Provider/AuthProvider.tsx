import create, { useStore } from 'zustand';
import { useAuth } from 'hooks';
export default function AuthProvider() {
  const { authenticate } = useAuth();
}
