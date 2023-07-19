import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toastr } from "react-redux-toastr";

const baseUrl = "https://dev-api.evitalrx.in/v1/fulfillment/medicines/view";
function Dashboard(){
    const [medicineDescription, setMedicineDescription] = useState([]);
    const {productId} = useParams();
    console.log(productId);
    useEffect(()=>{
        toastr.info('Loading...', 'Please wait')
        axios.post(baseUrl, {
            "apikey": "wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3",
            "medicine_id": `${productId}`,
        }).then((response) => {return response.data})
        .then((data) => {return data.data})
        .then((data) => {console.log(data)
            setMedicineDescription(data);
            })
        .catch((error) => console.log(error, "error"))
    }, [])
    if(!medicineDescription){
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
        <p>Description</p>
      </div>
    </div>
        <div className="flex justify-center items-center min-h-screen">
            
            <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">{medicineDescription.medicine_name}</h2>
        <p className="text-sky-700 mb-4">Content : {medicineDescription.content}</p>
        <p className="text-sky-700 mb-4">Salt Content Id: {medicineDescription.salt_content_id}</p>
        <div className="flex flex-col">
          <p className="text-gray-600">Size: {medicineDescription.size}</p>
          <p className="text-gray-600">Price: {medicineDescription.medicine_mrp}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600">Packaging: {medicineDescription.packing_size}</p>
          <p className="text-gray-600">Manufactured by: {medicineDescription.manufacturer_name}</p>
        </div>
      </div>
    </div> 
        </>
          
    )
}
export default Dashboard;