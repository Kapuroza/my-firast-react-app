import { use, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"


export function MyFirstComponent(props) {
    const [name, setName] = useState("")

    return(
    <div style={{ margin: 20 }}>
      <input
      className='form-control'
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='np. Mariusz '
      />
      <p style={{ fontSize: 20 }}> Hello, {name}</p>
      <input
      className='btn btn-primary' value={"reset"} onClick={(e) => setName(null)}/>
      <p>{props.param1}</p>
    </div>
    )
}