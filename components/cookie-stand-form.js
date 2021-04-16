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
      <form onSubmit={formHandler} className="grid gap-1 bg-green-500 grid-cols-8 mb-4">
          <legend className="col-start-4 col-span-2 text-2xl m-2">Create Cookie Stand</legend>
          <label className="row-start-2 col-start-1 col-span-1 ml-8" for='location'>Location</label>
          <input type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" className="row-start-2 col-start-2 col-span-7 text-sm mr-4" ></input>
          <label className="row-start-3 col-start-1 col-span-2 text-sm text-center" for='min_cust'>Minimum Customers Per Hour</label>
          <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} className="row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
          <label className="row-start-3 col-start-3 col-span-2 text-sm text-center" for='max_cust'>Maximum Customers Per Hour</label>
          <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} className="row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
          <label className="row-start-3 col-start-5 col-span-2 text-sm text-center" for='avg_per'>Average Cookies Per Sale</label>
          <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} className="row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4"></input>
          <button className="row-start-3 col-start-7 col-span-2 row-span-2 bg-green-700 mr-4 ml-2 mb-2 mt-2" >Create</button>
      </form>
    )
 }