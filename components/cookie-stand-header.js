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
          <header className="flex-1 text-left bg-green-600 pb-5">
            
            <div className="float-right mr-40 mt-5">
                <nav>
                    <p className="float-left mr-10 border bg-green-200 rounded-md px-5 py-1">{username}</p>
                    <Link href="/">
                        <a className="float-left mr-10 border bg-green-700 rounded-md px-5 py-1" onClick={onLogout} >Sign Out</a>
                    </Link>
                
                    <Link href="/overview"><a className="float-left mr-10 border bg-green-200 rounded-md px-5 py-1" >Overview</a></Link>
                </nav>
            </div>
            <h1 className="text-3xl font-bold pt-5 pl-5">
                  Cookie Stand Admin
            </h1>
          </header>
      )
  }