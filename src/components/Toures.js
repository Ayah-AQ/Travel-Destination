// import data from '../data/db.json 
import data from '../data/db.json';
import { DataS, DistS } from '../style';



export default function Toures() {

    return (
      
       <DataS>
      {data.map(destination => (
        <li key={destination.id}>
          <h2>{destination.name}</h2>
          <DistS src={destination.image} alt= {destination.image}/>
        </li>
      ))}
    </DataS>
        )
  }