import { hours } from '../data'

export default function CookieStandTable({ stands, onDelete }, props) {

    return (
        <table>
            <thead>
                <tr>

                    <th>Location</th>
                    {hours.map(slot => (
                        <th key={slot}>{slot}</th>
                    ))}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {

                    return (
                        <tr key={stand.id}>

                            <th>
                                <div>

                                    <p>{stand.location}</p>

                                    <span onClick={() => onDelete(stand)}>X</span>
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