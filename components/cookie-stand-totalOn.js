

export default function TotalOn(props){
    if (props.on) {
      return (
          <th className="border border-black-900">{ props.tabelTotals }</th>
      )
    } else {
      return ('')
    }
  }