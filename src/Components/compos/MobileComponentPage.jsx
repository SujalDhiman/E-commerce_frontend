import Navbaar from "../header/Navbaar"
import Footer from "../footer/Footer"
import MobileComponent from "./MobileComponent"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect,useState } from "react"
import "./MobileComponentPage.css"

function MobileComponentPage()
{
    const [gotData,setGotData]=useState([])

    async function getData()
    {
        console.log("get data ke andar")
        const response=await axios.get("http://localhost:10000/getMobileData")

        setGotData(response.data.sendResponse)

    }

    useEffect(()=>{
        getData()
    },[])
    if(gotData.length == 0)
    return (
    <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>)
    else
    return (
        <div className="mobilePage">
            {gotData.map((ele)=><MobileComponent url={ele.url} name={ele.name} description={ele.description} number={ele.number} price={ele.price} delivery={ele.delivery} />)}
        </div>
    )

}


export default MobileComponentPage