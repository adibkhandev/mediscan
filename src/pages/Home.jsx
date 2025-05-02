import Ham from './../assets/ham.svg'
import TextLogo from './../assets/text-logo.svg'
import Write from './../assets/write.svg'
import Logo from './../assets/logo.svg'
import Image from './../assets/image.svg'
import Speaker from './../assets/speaker.svg'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion' 
export const Home = () => {
  
  //resize
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [initialHeight, setInitialHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const heightDifference = initialHeight - currentHeight;

      if (heightDifference > 150) {
        // Likely the keyboard is open
        setKeyboardHeight(heightDifference);
      } else {
        // Keyboard is likely closed
        setKeyboardHeight(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialHeight]);

  //resize
  //
    return(
       <motion.div
       animate={keyboardHeight==0?{height:'100svh'}:{height:`${window.innerHeight}`}}
       className="home-container">
          <div className="nav-cont">
            <img src={Ham} alt="" />
            <img src={TextLogo} alt="" />
            <img src={Write} alt="" />
          </div>
          <div className="intro-cont">
            <img src={Logo} alt="" />
            <div className="heading">
              Upload your infection picture and i will help curing
            </div>
          </div>
          <div className="input-cont">
            <div className="tools">
                <div className="left">
                  <div className="image">
                    <img src={Image} alt="" />
                  </div>
                  <input type="text" placeholder='Describe your disease' />
                </div>
                <div className="right">
                  <img src={Speaker} alt="" />
                </div>
            </div>
          </div>
       </motion.div>
    )
}