import Head from 'next/head'
import {useState} from 'react'

export default function Home() {

  const [location, setLocation] = useState('Location Here')
  const [minCust, setMinCust] = useState('Min Customers Here')
  const [maxCust, setMaxCust] = useState('Max Customers Here')
  const [avgCookies, setAvgCookies] = useState('Average Cookies Sold Here')

  function formHandler(event){
    event.preventDefault();
    setLocation(event.target.location.value)
    setMinCust(event.target.min_cust.value)
    setMaxCust(event.target.max_cust.value)
    setAvgCookies(event.target.avg_per.value)
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex-1 text-3xl text-left bg-green-600 p-2">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="m-8">
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

        <h2 className="text-center mb-4">Report Table Coming Soon...</h2>
        <p className="text-center"> &#123; "location":"{location}" , "minCustomers":{minCust}, "maxCustomers":{maxCust}, "avgCookies":{avgCookies} &#125;</p>
      </main>

      <footer className="bg-green-600 h-10">
        <p className="ml-6 pt-1">&#169;2021</p>
      </footer>
    </div>
  )
}
