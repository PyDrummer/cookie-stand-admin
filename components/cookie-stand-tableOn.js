export default function TableOn(props){
    if (props.on) {
      return (
        <th className="border border-black-900">{ props.tableLocation }</th>
      )
    } else {
      return ('')
    }
  }