import Ham from './../assets/ham.svg'
import TextLogo from './../assets/text-logo.svg'
import Write from './../assets/write.svg'
import Logo from './../assets/logo.svg'
import Image from './../assets/image.svg'
import Speaker from './../assets/speaker.svg'

export const Home = () => {
    return(
       <div className="home-container">
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
       </div>
    )
}