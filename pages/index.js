import Head from 'next/head'
// import Link from 'next/head'

import { hours } from '../data'
import React, {useState} from 'react'

export default function Home() {

  const [location, setLocation] = useState('Location Here');
  const [minCust, setMinCust] = useState('Min Customers Here');
  const [maxCust, setMaxCust] = useState('Max Customers Here');
  const [avgCookies, setAvgCookies] = useState('Average Cookies Sold Here');
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
    
    // setLocation(savedLocation)
    // setMinCust(event.target.min_cust.value)
    // setMaxCust(event.target.max_cust.value)
    // setAvgCookies(event.target.avg_per.value)
    
    setOn(true)
    setHours(hours)
    setTableLocation('Location')
    setTableTotals('Totals')
    setNoTable('')
    setHardCoded(['Calexico', 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])

    const newCookieData = {
      newLocation: savedLocation,
      min: minCust,
      max: maxCust,
      avg: avgCookies,
      count: cookieData.length,
    }

    setCookieData([...cookieData, newCookieData])
    console.log('set cookie data: ', newCookieData)
    // console.log(hours)
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
                  {console.log("data is", data.newLocation)}
                  <td className="border border-black-900">{data.newLocation}</td>
                  <td className="border border-black-900">{data.min}</td>
                  <td className="border border-black-900">{data.max}</td>
                </tr>
              ))}
              
            
        </tbody>
      </table>
    )
  }

  function TableOn(props){
    if (on) {
      return (
        <th className="border border-black-900">{ tableLocation }</th>
      )
    } else {
      return ('')
    }
  }

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
