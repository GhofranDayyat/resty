import React from 'react';
import './History.scss'


function  handelfillfield(e){
    e.preventDefault();
    let [method,url]=(e.target.innerText).split(' ')
    document.getElementById(`${method}`).checked=true
    document.getElementById('url').value=url
}   
function History (props){
        // console.log(this.props.results,'****************')
        return(
       <>    
        {props.storData.map((item,idx) => {            
            return (
            <p id="history" onClick={handelfillfield} key={idx}>{item.method} {item.url}</p>
                   )
        })
        }
       </>
            )
}
export default History;

