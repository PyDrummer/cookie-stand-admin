import Head from 'next/head'
import { hours } from '../data'
import React, {useState} from 'react'
import Link from 'next/link'

export default function Home() {

  const [noTable, setNoTable] = useState('No Cookie Stands Available');
  const [on, setOn] = useState(false)
  const [tableLocation, setTableLocation] = useState()
  const [tabelTotals, setTableTotals] = useState()
  const [allHours, setHours] = useState([])
  const [hardcodedCookieData, setHardCoded] = useState([])
  const [cookieData, setCookieData] = useState([]);

  function formHandler(event){
    event.preventDefault();
    const savedLocation = event.target.location.value
    const minCust = event.target.min_cust.value
    const maxCust = event.target.max_cust.value
    const avgCookies = event.target.avg_per.value

    // Used to calculate the hourly sales and total sales for that location
    const minMaxAvg = [minCust, maxCust, avgCookies]
    const salesData = calcHourlySales(minMaxAvg)

    setOn(true)
    setHours(hours)
    setTableLocation('Location')
    setTableTotals('Totals')
    setNoTable('')
    setHardCoded(['Calexico', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])

    const newCookieData = {
      newLocation: savedLocation,
      sales: salesData,
      count: cookieData.length,
    }
    setCookieData([...cookieData, newCookieData])

  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin"/>
      <main className="m-8">
        <Form />
        <Table allHours={ allHours } cookieData={ cookieData } hardcoded={ hardcodedCookieData } />
        <h2 className="text-center mb-4">{noTable}</h2>
      </main>
      <Footer />
      
    </div>
  )

  function Header(props){
    return(
      <header className="flex-1 text-3xl text-left bg-green-600 p-2">
        <Link href="/overview">
          <a className="float-right text-base bg-gray-100 pr-1 pl-1">Overview</a>
        </Link>
        <h1>{props.title}</h1>
      </header>
    )
  }

  function Form(props){
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

  function Table(props){
    return(
      <table className="w-1/2 mx-auto my-4">
        <thead>
            <tr>
              < TableOn />
              {props.allHours.map(each =>(
                <th className="border border-black-900">{ each }</th>
              ))}
              < TotalOn />
            </tr>
        </thead>
        <tbody>
              <tr>
              {props.hardcoded.map(data =>(
                  <td className="border border-black-900">{data}</td>
                  ))}
              </tr>
              {props.cookieData.map(data =>(
                <tr>
                  {console.log("data is", data)}
                  <td className="border border-black-900">{data.newLocation}</td>
                  {data.sales[0].map(each =>(
                    <td className="border border-black-900">{each}</td>
                  ))}
                  <td className="border border-black-900">{data.sales[1]}</td>
                </tr>
              ))} 
        </tbody>
      </table>
    )
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
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  // Used to show/hide the table's location
  function TableOn(props){
    if (on) {
      return (
        <th className="border border-black-900">{ tableLocation }</th>
      )
    } else {
      return ('')
    }
  }
  // Used to show/hide the table's totals
  function TotalOn(props){
    if (on) {
      return (
          <th className="border border-black-900">{ tabelTotals }</th>
      )
    } else {
      return ('')
    }
  }

  function Footer(props){
    return(
      <footer className="bg-green-600 h-10">
        <p className="ml-6 pt-1">{cookieData.length} Locations World Wide</p>
      </footer>
    )
  }
}
