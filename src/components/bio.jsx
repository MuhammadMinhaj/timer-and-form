import React from 'react'

function Bio(props){
    let style = {
        borderBottom:'1px solid black',
        paddingBottom:'1rem'
    }
    return (
        <div className="bio">
            <h3><strong></strong>{props.name}</h3>
            <h3 style={style}><strong></strong>{props.title}</h3>
        </div>
    )
}
export default Bio