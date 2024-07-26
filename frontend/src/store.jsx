import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      Login: false,
      user: {},
      setLogin: (login) => set(() => ({ Login: login })),
      setUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: 'user-storage',
    }
  )
)
