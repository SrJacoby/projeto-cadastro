import { useState } from 'react'
import AppRoutes from '../routes/AppRoutes'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { GlobalStyles } from './GlobalStyles'

function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    setTheme(theme==='light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRoutes themeToggler={themeToggler}/>
    </ThemeProvider>
  )
}

export default App
