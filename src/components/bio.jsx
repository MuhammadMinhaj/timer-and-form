import React from 'react'

function Bio(props){
    return (
        <div className="bio">
            <h3><strong>Author: </strong>{props.name}</h3>
            <h3><strong>Title: </strong>{props.title}</h3>
        </div>
    )
}
export default Bio