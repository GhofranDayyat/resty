 import React from 'react';
import './Details.scss'
import ReactJson from 'react-json-view'


function ViweDetails (props){
//  console.log(props.detail,'qqqqqqqqqqqqq');
    return(
        <>
            <div id='detail-div'>
                <p key={props.detail.method}>{props.detail.method}</p>
                <p key={props.detail.url}>{props.detail.url}</p>
                <ReactJson src={props.detail.result} theme="tomorrow"  name='body'/>
            </div>
        </>
    ) 

}

export default  ViweDetails;