import { Link } from 'react-router-dom';
import logo from '../Img/logo.png' 
import { HeadS, LabelS, LogoS } from "../style";


export default function Header() {
    return (    
        <HeadS>
            <div>
                <Link to='/'>
                <LogoS src={logo} alt='logo'></LogoS>
                </Link>
            </div>
            
              <LabelS >Friend Traveler</LabelS> 
    
         </HeadS> 
    )
  }