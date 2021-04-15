// export default function CookieStandFooter({ reports }) {
//     return (
//         <footer>
//             <p>{reports.length} Locations World Wide</p>
//         </footer>
//     )
// }

export default function Footer({ cookieData }){
    return(
      <footer className="bg-green-600 h-10">
        <p className="ml-6 pt-1">{cookieData.length} Locations World Wide</p>
      </footer>
    )
  }