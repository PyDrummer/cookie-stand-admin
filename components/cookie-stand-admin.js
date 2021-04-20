import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/data-fetcher'
import Head from 'next/head'

import HeaderCookieStandHeader from './cookie-stand-header'
import Footer from '../components/cookie-stand-footer'
import CookieStandTable from '../components/cookie-stand-table'
import Form from '../components/cookie-stand-form'

export default function CookieStandAdmin({ token, onLogout, username }) {

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

        // console.log("values are", values)
        const newStand = CookieStand.fromValues(values);

        newStand.location += '...'; // Add the ... to show loading state

        const updatedStands = [newStand, ...cookieStands]
        
        // console.log('cookieStands are: ', newStand)
        console.log('cookieStands are: ', cookieStands)
        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();

    }

    async function deleteHandler(stand) {
        console.log('DeleteHandler is', stand)
        console.log('current cookieStands ', cookieStands)
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
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
            </Head>

            <HeaderCookieStandHeader username={ username } onLogout={ onLogout }/>

            <main className="m-8">
                <Form onCreate={ createHandler } />
                <CookieStandTable onDelete={ deleteHandler } stands ={ cookieStands } />
            </main>
  < Footer cookieData={cookieStands}/>
        </div>
    )
}