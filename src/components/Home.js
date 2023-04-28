import Header from "./Header"
import Toures from "./Toures"
import Footer from "./Footer"
import { BodyS } from "../style"


export default function Home() {
    return (
      <div>
        <Header/>
       <BodyS><Toures/></BodyS> 
        <Footer/>
      </div>
    )
  }