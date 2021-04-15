import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/data-fetcher'
import Head from 'next/head'

import HeaderCookieStandHeader from './cookie-stand-header'
import Footer from '../components/cookie-stand-footer'
import Table from '../components/cookie-stand-table'
import Form from '../components/cookie-stand-form'

export default function CookieStandAdmin({ token, onLogout, username }) {
    //Form stuff:
    const [noTable, setNoTable] = useState('No Cookie Stands Available');
    const [on, setOn] = useState(false)
    const [tableLocation, setTableLocation] = useState()
    const [tabelTotals, setTableTotals] = useState()
    const [allHours, setHours] = useState([])
    const [hardcodedCookieData, setHardCoded] = useState([])
    const [cookieData, setCookieData] = useState([]);

    //Login Stuff
    const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);
    const [cookieStands, setCookieStands] = useState([]);



    useEffect(() => {
        if (!data) return;
        setCookieStands(data);
    }, [data])

    if (error) return <h2>Ruh Roh</h2>
    if (!data) return <h2>Loading...</h2>

    async function createHandler(values) {

        const newStand = CookieStand.fromValues(values);

        newStand.location += '...'; // Add the ... to show loading state

        const updatedStands = [newStand, ...cookieStands]

        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();

    }

    async function deleteHandler(stand) {

        const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

        mutate(updatedStands, false);

        await deleteWithToken(stand.id, token);

        mutate(async stands => {
            return stands.filter(candidate => candidate.id !== stand.id);
        });
    }

    // Form stuff:
    

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderCookieStandHeader username={ username } onLogout={ onLogout }/>

            <main className="m-8">
                <Form noTable={noTable} setOn={ setOn } setNoTable={ setNoTable } setTableLocation={ setTableLocation } setTableTotals={ setTableTotals } setHardCoded={ setHardCoded } setCookieData={ setCookieData } cookieData={ cookieData } setHours={ setHours }/>
                <Table allHours={ allHours } cookieData={ cookieData } hardcoded={ hardcodedCookieData } on={ on } tableLocation={ tableLocation } tabelTotals={ tabelTotals }/>
                <h2 className="text-center mb-4">{ noTable }</h2>
            </main>
  < Footer cookieData={cookieData}/>
        </div>
    )
}