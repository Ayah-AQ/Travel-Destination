// import { Link } from 'react-router-dom';
import FB from '../Img/FB.png'
import Ins from '../Img/intagram.png'
import CR from '../Img/copyright.png'
import { CrS, FbS, FooterS, InS } from '../style'

export default function Footer() {
    return (
      <FooterS>
        <a href='https://www.facebook.com' >
        <FbS src={FB} alt='facebook'></FbS>
       </a>
      <a href='https://www.instagram.com/'>
          <InS src={Ins} alt='instagram'></InS>
        </a>
        <CrS src={CR} alt="copyright"></CrS>
        </FooterS>
    )
  }