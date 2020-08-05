import React from 'react'

function Social(props){
    return <a className="social" href={props.url}>{props.social}</a>
}

export default Social