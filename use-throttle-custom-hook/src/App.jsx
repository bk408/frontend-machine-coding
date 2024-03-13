

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import useThrottle from './hooks/use-throttle'


function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // API Call
  }


  const throttleHandleResize = useThrottle(handleResize, 500)


  
  useEffect(() => {
     
    window.addEventListener("resize", throttleHandleResize);

    return () => {
      window.removeEventListener("resize", throttleHandleResize);
    }
  }, [])
  

  return (
    <div>
           Window Size: {windowSize.width} x {windowSize.height}
    </div>
  )
}

export default App
