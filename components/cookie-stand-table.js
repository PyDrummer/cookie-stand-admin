import { hours } from '../data'

export default function CookieStandTable({ stands, onDelete }, props) {

    return (
        <table className="w-1/2 mx-auto my-10">
            <thead>
                <tr >

                    <th className="border">Location</th>
                    {hours.map(slot => (
                        <th className="border" key={slot}>{slot}</th>
                    ))}
                    <th className="border">Totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {

                    return (
                        <tr className="border" key={stand.id}>

                            <th>
                                <div>

                                    <p>{stand.location}
                                    <span onClick={() => onDelete(stand)}> X</span>
                                    <i class="fa fa-trash-o" style="font-size:24px"></i>
                                    </p>
                                </div>
                            </th>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <td key={i}>
                                    {amt}
                                </td>
                            ))}
                            <td>{stand.totalDailyCookies}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th>Totals</th>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <td key={'amt' + i}>{amt}</td>
                    })}
                    <td>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</td>
                </tr>
            </tfoot>
        </table>

    );
}