import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { toastr } from "react-redux-toastr";

const baseUrl = "https://dev-api.evitalrx.in/v1/fulfillment/medicines/search";
function Dashboard(){
    const [medicine, setMedicine] = useState([]);

    useEffect(()=>{
        toastr.info('Loading...', 'Please wait')
        axios.post(baseUrl, {
            "apikey": "wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3",
            "searchstring": "dolo",
        }).then((response) => {return response.data})
        .then((data) => {return data.data})
        .then((data) => {setMedicine(data.result)})
        .catch((error) => console.log(error, "error"))
    }, [])
    if(medicine.length === 0){
        
        return <div className="bg-sky-500 py-2">
      <div className="container mx-auto flex justify-center text-white">
        <p>Loading!!!</p>
      </div>
    </div>
    }
    return (
        <>
         <div className="bg-blue-500 py-2">
      <div className="container mx-auto flex justify-center text-white">
        <p>Dashboard</p>
      </div>
    </div>
    <div className="container mx-auto mt-8">
      <div className="grid gap-8 md:grid-cols-3">
        {medicine.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <Card name={item.medicine_name} content={item.content} manufacturers={item.manufacturer_name} packagingDesign={item.packing_size} medicine_id={item.medicine_id} />
          </div>
        ))}
      </div>
    </div>
        </>
        
    )
}
export default Dashboard;