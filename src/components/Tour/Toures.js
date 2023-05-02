// import data from '../data/db.json 
// import data from '../../data/db.json';
import { Link } from 'react-router-dom';
import { BodyS, DataS } from '../../style';
import Tour from './Tour';



export default function Toures(props) {
const data= props.data
  
    return (
      <BodyS>
       <DataS>
      {data.map(destination => (
      <li key={destination.id}>
       <Link to={`/city/${destination.id}`}>
      <> <Tour name={destination.name} image={destination.image} keys={destination.id} /></>
      </Link>
      </li>
  ))}
    </DataS>
    </BodyS>
        )
  }