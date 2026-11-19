import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense, useMemo, useState } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import History from './pages/history/History'
import Pricing from './pages/pricing/Pricing'
import NotFound from './pages/NotFound'
import AppLayout from './layouts/AppLayout'
import './services/i18n'
import { DEFAULT_THEME, getDesignPalette, ThemeContext } from './services/theme'
import { rutasConNombre } from './services/router'

const router = createBrowserRouter([
  {
    path: rutasConNombre.HOME,
    element: <Suspense><AppLayout /></Suspense>,
    children: [
      { index: true, element: <Home /> },
      { path: rutasConNombre.HISTORY, element: <History /> },
      { path: rutasConNombre.PRICING, element: <Pricing /> },
      { path: rutasConNombre.CONTACT, element: <Contact /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') ?? DEFAULT_THEME
  )

  function toggleTheme() {
    const next = theme === DEFAULT_THEME ? 'dark' : DEFAULT_THEME
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  const muiTheme = useMemo(() => createTheme(getDesignPalette(theme)), [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App