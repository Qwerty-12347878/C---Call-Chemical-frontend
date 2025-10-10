import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Check if user is logged in on app start
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedAccessToken = localStorage.getItem('accessToken');
      
      if (storedUser && storedAccessToken) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Store tokens and user data
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setUser(data.user);
        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error' };
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await fetch(`${API_URL}/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear all storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  // Simple token refresh
  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return false;

      const res = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Token refresh error:', error);
      return false;
    }
  };

  return {
    user,
    isLoading,
    login,
    logout,
    refreshToken,
  };
};