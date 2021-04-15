import TableOn from './cookie-stand-tableOn'
import TotalOn from './cookie-stand-totalOn'

// import React, { useState } from 'react'

export default function Table(props){
    return(
      <table className="w-1/2 mx-auto my-4">
        <thead>
            <tr>
              < TableOn on={props.on} tableLocation={ props.tableLocation }/>
              {props.allHours.map(each =>(
                <th className="border border-black-900">{ each }</th>
              ))}
              < TotalOn on={props.on} tabelTotals={ props.tabelTotals }/>
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
                  {console.log("data is", data)}
                  <td className="border border-black-900">{data.newLocation}</td>
                  {data.sales[0].map(each =>(
                    <td className="border border-black-900">{each}</td>
                  ))}
                  <td className="border border-black-900">{data.sales[1]}</td>
                </tr>
              ))} 
        </tbody>
      </table>
    )
  }