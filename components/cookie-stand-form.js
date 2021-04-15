import formHandler from '../pages/index'
import {useState} from 'react'
import { hours } from '../data'

export default function Form(props){

  // const [noTable, setNoTable] = useState('No Cookie Stands Available');
  // const [on, setOn] = useState(false)
  // const [tableLocation, setTableLocation] = useState()
  // const [tabelTotals, setTableTotals] = useState()
  // const [allHours, setHours] = useState([])
  // const [hardcodedCookieData, setHardCoded] = useState([])
  // const [cookieData, setCookieData] = useState([]);

  function formHandler(event){
      event.preventDefault();
      const savedLocation = event.target.location.value
      const minCust = event.target.min_cust.value
      const maxCust = event.target.max_cust.value
      const avgCookies = event.target.avg_per.value
  
      // Used to calculate the hourly sales and total sales for that location
      const minMaxAvg = [minCust, maxCust, avgCookies]
      const salesData = calcHourlySales(minMaxAvg)
  
      props.setOn(true)
      props.setHours(hours)
      props.setTableLocation('Location')
      props.setTableTotals('Totals')
      props.setNoTable('')
      props.setHardCoded(['Calexico', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])
  
      const newCookieData = {
        newLocation: savedLocation,
        sales: salesData,
        count: props.cookieData.length,
      }
      props.setCookieData([...props.cookieData, newCookieData])  
    }

    // Used to calculate the hourly sales
  function calcHourlySales(data){
    let eachSale = []
    let totalSale = 0
    for (let i = 0; i < hours.length; i++){
      console.log("data.min and max are ", data[0], data[1], data[2])
      let hourSale = Math.ceil(randomIntGen(data[0], data[1]) * data[2])
      eachSale.push(hourSale)
      totalSale += hourSale
    }
    console.log("eachSale is", eachSale)
    return [eachSale, totalSale]
  }

  // Helps generate a random int based off hourly sales
  function randomIntGen(min, max){
    return Math.floor(Math.random() * (max - min) +1 );
  }
  
    return(
      <form onSubmit={formHandler} className="grid gap-1 bg-green-500 grid-cols-8 mb-4">
          <legend className="col-start-4 col-span-2 text-2xl m-2">Create Cookie Stand</legend>
          <label className="row-start-2 col-start-1 col-span-1 ml-8" for='location'>Location</label>
          <input className="row-start-2 col-start-2 col-span-7 text-sm mr-4" name='location'></input>
          <label className="row-start-3 col-start-1 col-span-2 text-sm text-center" for='min_cust'>Minimum Customers Per Hour</label>
          <input className="row-start-4 col-start-1 col-span-2 text-sm mr-4 ml-4 mb-4" name='min_cust'></input>
          <label className="row-start-3 col-start-3 col-span-2 text-sm text-center" for='max_cust'>Maximum Customers Per Hour</label>
          <input className="row-start-4 col-start-3 col-span-2 text-sm mr-4 ml-4 mb-4" name='max_cust'></input>
          <label className="row-start-3 col-start-5 col-span-2 text-sm text-center" for='avg_per'>Average Cookies Per Sale</label>
          <input className="row-start-4 col-start-5 col-span-2 text-sm mr-4 ml-4 mb-4" name='avg_per'></input>
          <button className="row-start-3 col-start-7 col-span-2 row-span-2 bg-green-700 mr-4 ml-2 mb-2 mt-2" >Create</button>
      </form>
    )
  }