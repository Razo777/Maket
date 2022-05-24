import { Route,Routes } from "react-router-dom";
import ForMan from "../Component/forMan/ForMan";
import HomePage from "../Component/homePage";
import ForWoman from "../Component/forWoman/ForWoman";
import ForChild from "../Component/forChild/ForChild";
import Payment from "../Component/payment/Payment";
import Shiping from "../Component/shiping/Shiping";
import Layout from "../Component";
import Catalog from "../Component/folder/Catalog";
import ForDogs from "../Component/folder/ForDogs";
import Mission from "../Component/folder/Mission";
import Moda from "../Component/folder/Moda";
import Sizes from "../Component/folder/Sizes";
import AboutUs from "../Component/folder/AboutUs";
import Error from "../Component/Error";

export function Router (){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index path="/" element={<HomePage/>}/>
            <Route path="/forMan" element={<ForMan/>}/>
            <Route path="/forWoman" element={<ForWoman/>}/>
            <Route path="/forChild" element={<ForChild/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/shiping" element={<Shiping/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/fordogs" element={<ForDogs/>}/>
            <Route path="/mission" element={<Mission/>}/>
            <Route path="/moda" element={<Moda/>}/>
            <Route path="/sizes" element={<Sizes/>}/>
            <Route path="*" element={<Error/>}/>            
            </Route>            
        </Routes>

    )
}