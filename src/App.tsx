import './App.css'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'

import MobileContent from './components/MobileContent'
import TabletContent from './components/TabletContent'
import DesktopContent from './components/DesktopContent'
import Footer from './components/Footer/Footer'
import { useAppSelector } from './redux/hook/hook'

function App() {
  const theme = useTheme();
  const { theme: currentTheme } = useAppSelector((state) => state.themeState)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return(
    <Box>
      {isMobile ? <MobileContent/> : isTablet ? <TabletContent/> : <DesktopContent/>}
      <Footer/>
      </Box>
  )
}

export default App
