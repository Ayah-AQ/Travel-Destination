import { Route, Routes } from "react-router";
import Home from './components/Home'
import TourDetails from './components/TourDetails/TourDetails'
import data from './data/db.json'
const Routers = () => {

    return (
      <Routes>

    <Route path='/' element={<Home data={data} />}></Route>
    <Route path= '/city/:id' element={<TourDetails/>}></Route>
    
    </Routes>
    );
  };
  
  export default Routers;