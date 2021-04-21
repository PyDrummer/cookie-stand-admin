import Head from 'next/head'
import React, {useState} from 'react'
// import Link from 'next/link'
// Login imports
import { getToken } from '../services/data-fetcher'
// Form imports
import LoginForm from '../components/loginform'
import CookieStandAdmin from '../components/cookie-stand-admin'
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
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
   )
}
