// import './Tour.css'
import { DistS } from "../../style";

export default function Tour(props) {
    return (    
        <>
          <h2>{props.name}</h2>
          <DistS src={props.image} alt= {props.image}/>
        </>
    )
  }