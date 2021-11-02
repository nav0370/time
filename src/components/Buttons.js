import React from 'react'

const Buttons = (props) => {

    return (
        <div>
            <button className="px-3 py-2 m-2 bg-blue-200" type={props.type}>{props.value}</button>
            
        </div>
    )
}

export default Buttons
