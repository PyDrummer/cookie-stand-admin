import Head from 'next/head'
import React, {useState} from 'react'
import Link from 'next/link'


export default function Overview() {

    return(
        <div className="">
            <Head>
                <title>Cookie Stand</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title="Overview Page"/>
            <main className="m-8">
                <h2>Content coming soon...</h2>
            </main>
            <Footer />
      
        </div>
    )

    function Header(props){
        return(
          <header className="flex-1 text-3xl text-left bg-green-600 p-2">
            <Link href="/">
              <a className="float-right text-base bg-gray-100 pr-1 pl-1">Return to the main page</a>
            </Link>
            <h1>{props.title}</h1>
          </header>
        )
      }

    function Footer(props){
        return(
          <footer className="bg-green-600 h-10">
            <p className="ml-6 pt-1">Created by Anthony Beaver</p>
          </footer>
        )
      }
}