import Header from "./Header"
import Toures from "./Tour/Toures"
import Footer from "./Footer"


export default function Home(props) {
  const data=props.data;
    return (
      <div>
        <Header/>
        <Toures data={data}/> 
        <Footer/>
      </div>
    )
  }