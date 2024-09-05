import { useState } from 'react'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Component1 from './components/Component1';
import Component2 from './components/Component2';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  {/* 1. Sirven de comunicación entre Component1 y Component2 */}
  const [tunnel, setTunnel] = useState("")

  return (
    <>
      <Grid container spacing={10}>
        <Grid xs={12} lg={12}>
          
          <p>Parent: {tunnel}</p>

        </Grid>
        <Grid xs={12} lg={6}>
          
          {/* 2. La función de actualización como callback de Component1 */}
          <Component1 getValue={setTunnel}/>
          
        </Grid>
        <Grid xs={12} lg={6}>

          {/* 3. La variable de estado como prop de Component2 */}
          <Component2 value={tunnel}></Component2>
        
        </Grid>
      </Grid>
    </>
  )
}

export default App
