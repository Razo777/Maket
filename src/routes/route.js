import { Route,Routes } from "react-router-dom";
import ForMan from "../Component/forMan/ForMan";
import HomePage from "../Component/homePage";
import ForWoman from "../Component/forWoman/ForWoman";
import ForChild from "../Component/forChild/ForChild";
import Payment from "../Component/payment/Payment";
import Shiping from "../Component/shiping/Shiping";
import Layout from "../Component";
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
            <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>

    )
}