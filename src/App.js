import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppContainer from './Components/AppContainer';
// import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive'


function App() {



  const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({query: '(max-device-width: 1224px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  let device, orient = '';

  if(isDesktopOrLaptop){device='desktop';}
    else if(isTabletOrMobileDevice){
          device="mobile";
        if(isPortrait){orient='portrait';}
        else orient='landscape';
  }


  return (
    <div className="App">

          <AppContainer device={device} orient={orient} />
          

    </div>
    

  );
}

export default App;
