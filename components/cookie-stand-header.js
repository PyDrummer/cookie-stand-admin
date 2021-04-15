// import Link from 'next/link'

// export default function Header(props){
//     return(
//       <header className="flex-1 text-3xl text-left bg-green-600 p-2">
//         <Link href="/overview">
//           <a className="float-right text-base bg-gray-100 pr-1 pl-1">Overview</a>
//         </Link>
//         <h1>{props.title}</h1>
//       </header>
//     )
//   }


  import Link from 'next/link'

  export default function CookieStandHeader({ username, onLogout }) {
      return (
          <header >
              <h1 >
                  Cookie Stand Admin
                  </h1>
              <div >
                  <p >{username}</p>
                  <Link href="/">
                      <a onClick={onLogout} >Sign Out</a>
                  </Link>
                  <nav>
                      <Link href="/overview"><a>Overview</a></Link>
                  </nav>
              </div>
          </header>
      )
  }