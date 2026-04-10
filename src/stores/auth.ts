import { create } from 'zustand'
import type { AuthState, LoginResponse, Permissions } from '../types'
import Cookies from 'js-cookie';

export const useAuthStore = create<AuthState>((set) => ({
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user') as string) : null,
  token: Cookies.get('token') || '',
  permissions: Cookies.get('permissions') ? JSON.parse(Cookies.get('permissions') as string) : {},
  setAuth: (data: LoginResponse) => {
    const token = data.token;
    const user = {
      id: data.user.id,
      name: data.user.name,
      username: data.user.username,
      email: data.user.email,
      roles: data.user.roles,
      created_at: '',
      updated_at: '',
    };
    const permissions: Permissions = data.user.permissions || {};
    Cookies.set('permissions', JSON.stringify(permissions));

    set({ token, user, permissions });

    Cookies.set('token', token);
    Cookies.set('user', JSON.stringify(user));
  },
  logout: () => {
    set({ token: '', user: null, permissions: {} });
    
    Cookies.remove('token');
    Cookies.remove('user');
    Cookies.remove('permissions');
  },
}))