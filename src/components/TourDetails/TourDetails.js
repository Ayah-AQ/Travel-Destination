import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import data from '../../data/db.json'
import { BodySt, DistS} from "../../style";
export default function TourDetails() {

    const [showMore, setShowMore] = useState(false);
    let { id } = useParams();
    let dataFilter= data.filter(dist=> dist.id=== id)
    return (
        <>
        <Header/>
       <BodySt>
            {/* <PS>{dataFilter[0].id}</PS> */}
            <h2>{dataFilter[0].name}</h2>
            <DistS src={dataFilter[0].image} alt="img"/>

      <h3>
        {showMore ? dataFilter[0].info : `${dataFilter[0].info.substring(0, 250)}`}
       <br/> <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
        </button>
        </h3>
            <h3>price: {dataFilter[0].price}$</h3>
        </BodySt>       
        <Footer/>
      </>
    )
  }