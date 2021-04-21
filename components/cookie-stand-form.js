import formHandler from '../pages/index'
import {useState} from 'react'
import { hours } from '../data'

export default function Form(props){

  const intitialValues = {
    location: '',
    max: 0,
    min: 0,
    avg: 0,
  };

  const [values, setValues] = useState(intitialValues)

  function formHandler(event){
      event.preventDefault();
      
      setValues(intitialValues)
      props.onCreate(values)
  }
  
  function inputChangeHandler(event) {
    let { name, value, type } = event.target;

    if (type === "number") {
        value = parseFloat(value);
    }

    setValues({ ...values, [name]: value });
  }

    // Used to calculate the hourly sales
  return(
      // <form onSubmit={formHandler} className="grid gap-1 bg-green-500 grid-cols-8 mb-4">
      //     <legend className="col-start-4 col-span-2 text-2xl m-2">Create Cookie Stand</legend>
      //     <label className="row-start-2 col-start-1 col-span-1 text-center" for='location'>Location</label>
      //     <input type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" className="row-start-2 col-start-2 col-span-4 text-sm " ></input>
      //     <br className="row-start-3 col-start-1 col-span-2 text-sm text-center"></br>
      //     <label className="row-start-4 col-start-1 col-span-2 text-sm text-center" for='min_cust'>Minimum Customers Per Hour</label>
      //     <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} className="row-start-5 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
      //     <label className="row-start-4 col-start-3 col-span-2 text-sm text-center" for='max_cust'>Maximum Customers Per Hour</label>
      //     <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} className="row-start-5 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
      //     <label className="row-start-4 col-start-5 col-span-2 text-sm text-center" for='avg_per'>Average Cookies Per Sale</label>
      //     <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} className="row-start-5 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
      //     <button className="row-start-2 col-start-7 col-span-2 row-span-2 bg-green-700" >Create</button>
      //    {/* <button className="row-start-2 col-start-7 col-span-2 row-span-2 bg-green-700 mr-4 ml-2 mb-2 mt-2" >Create</button> */}

      // </form>

      <form onSubmit={formHandler} className="border border-green-500 border-2 rounded-md w-10/12 mx-auto text-center bg-green-300 pb-10">
          {/* <legend className="text-2xl m-2">Create Cookie Stand</legend> */}
          <button className="bg-green-700 py-4 px-40 mt-5 ml-20 " >CREATE STAND</button>
          <div className="float-left mt-5 ml-10">
            <label className="font-bold mt-5 ml-20" for='location'>ADD LOCATION</label>
            <br></br>
            <input className=" ml-10 text-sm pr-location" size="10" type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location"  ></input>
          </div>

          <div className="mt-5 ml-20">
            <label className="float-left font-bold text-sm text-center ml-20 mr-space " for='min_cust'>Minimum Customers Per Hour</label>
            <label className="mr-space float-left font-bold text-sm text-center " for='max_cust'>Maximum Customers Per Hour</label>
            <label className=" float-left font-bold text-sm text-center " for='avg_per'>Average Cookies Per Sale</label>
          </div>
            <br></br>
          <div className="mt-5 ml-20">
            <input className="mr-input float-left text-left text-sm pr-60 " type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} ></input>
            <input className="mr-input float-left text-sm pr-60 " type="number" type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} ></input>
            <input className="float-left text-sm mb-10 pr-60 " type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} ></input>
          </div>
         {/* <button className="row-start-2 col-start-7 col-span-2 row-span-2 bg-green-700 mr-4 ml-2 mb-2 mt-2" >Create</button> */}

      </form>
    )
 }