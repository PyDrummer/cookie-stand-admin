import { hours } from '../data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";

const element = <FontAwesomeIcon icon={faTrashAlt} size="1x" />
const element2 = <FontAwesomeIcon icon="fa-trash-alt" />

export default function CookieStandTable({ stands, onDelete }, props) {

    return (
        <table className="w-1/2 mx-auto my-10">
            <thead className="bg-green-600">
                <tr >

                    <th className="border border-black">Location</th>
                    {hours.map(slot => (
                        <th className="border border-black" key={slot}>{slot}</th>
                    ))}
                    <th className="border border-black">Totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {

                    return (
                        <tr key={stand.id} className="bg-green-400">

                            <th className="border border-black">
                                <div>

                                    <p className="">{stand.location}
                                    <span onClick={() => onDelete(stand)}> {element}</span>
                                    </p>
                                </div>
                            </th>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <td className="border border-black" key={i}>
                                    {amt}
                                </td>
                            ))}
                            <td className="border border-black" >{stand.totalDailyCookies}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="bg-green-600">
                    <th className="border border-black" >Totals</th>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <td className="border border-black" key={'amt' + i}>{amt}</td>
                    })}
                    <td className="border border-black">{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</td>
                </tr>
            </tfoot>
        </table>

    );
}