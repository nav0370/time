import React from 'react'

// const [state, setState] = useState("00:00")

const input = (props) => {
    return (
        <div className="">
  
            <input style={{margin: 10, border: 1, borderColor: "#000", borderStyle: "solid"}} type={props.type} className="border" onChange={(e) => props.onChange(e)}/>
         
           
      
        </div>
    )
}

export default input
