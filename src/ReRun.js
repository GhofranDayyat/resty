import React from 'react';
import {Link} from 'react-router-dom';


function detail (props){
    console.log(props,'*************');
return (//send date with pathname as obj 
    <>
                  <Link id='link' to={{ pathname: '/', query: { url: this.state.url, method: this.state.method, body: this.state.body } }}>Re Run</Link>

    {/* <p>{props.reRun.url}</p>
    <p>{props.reRun.method}</p>
    <p>{props.reRun.body}</p> */}
</>
)

}
export default detail;