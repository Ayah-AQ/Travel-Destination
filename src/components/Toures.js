// import data from '../data/db.json 
import React from 'react';
import data from '../data/db.json';
import { DataS, DistS } from '../style';



export default function Toures() {

    return (
      
       <DataS>
      {/* <ul> */}
      {data.map(destination => (
        <li key={destination.id}>
          <h2>{destination.name}</h2>
          <DistS src={destination.image} alt= {destination.image}/>
        </li>
      ))}
    {/* </ul> */}
    </DataS>
        )
  }