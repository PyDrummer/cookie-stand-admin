import Head from 'next/head'
import React, {useState} from 'react'
// import Link from 'next/link'
// Login imports
import { getToken } from '../services/data-fetcher'
// Form imports
import Header from '../components/cookie-stand-header'
import Footer from '../components/cookie-stand-footer'
import Table from '../components/cookie-stand-table'
import Form from '../components/cookie-stand-form'
import LoginForm from '../components/loginform'
import CookieStandAdmin from '../components/cookie-stand-admin'

export default function Home() {
  // Form stuff:
  // const [noTable, setNoTable] = useState('No Cookie Stands Available');
  // const [on, setOn] = useState(false)
  // const [tableLocation, setTableLocation] = useState()
  // const [tabelTotals, setTableTotals] = useState()
  // const [allHours, setHours] = useState([])
  // const [hardcodedCookieData, setHardCoded] = useState([])
  // const [cookieData, setCookieData] = useState([]);

  // Login stuff:
  const [token, setToken] = useState();
  const [username, setUsername] = useState('');

  async function loginHandler(values) {

      const fetchedToken = await getToken(values);

      setToken(fetchedToken);

      setUsername(values.username);
  }

  function logoutHandler() {
      setToken(null);
  }

  if (!token) return (< LoginForm onSubmit={loginHandler} />)

  return (
    < CookieStandAdmin token={token} onLogout={logoutHandler} username={username} />
    // <div className="">
    //   <Head>
    //     <title>Cookie Stand</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   < Header title="Cookie Stand Admin" />
    //   <main className="m-8">
    //     <Form noTable={noTable} setOn={ setOn } setNoTable={ setNoTable } setTableLocation={ setTableLocation } setTableTotals={ setTableTotals } setHardCoded={ setHardCoded } setCookieData={ setCookieData } cookieData={ cookieData } setHours={ setHours }/>
    //     <Table allHours={ allHours } cookieData={ cookieData } hardcoded={ hardcodedCookieData } on={ on } tableLocation={ tableLocation } tabelTotals={ tabelTotals }/>
    //     <h2 className="text-center mb-4">{noTable}</h2>
    //   </main>
    //   < Footer cookieData={cookieData}/>
      
    // </div>
  )
}
