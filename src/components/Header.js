import logo from '../Img/logo.png' 
import { HeadS, LabelS, LogoS } from "../style";


export default function Header() {
    return (    
        <HeadS>
            <div>
                <LogoS src={logo} alt='logo'></LogoS>
            </div>
            
              <LabelS >Friend Traveler</LabelS> 
    
         </HeadS> 
    )
  }