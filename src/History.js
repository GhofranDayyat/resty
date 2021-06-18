 import React from 'react';
import './History.scss'



function  handelfillfield(e){
    e.preventDefault();
    let [method,url]=(e.target.innerText).split(' ')
    console.log((e.target.innerText).split(' '));
    document.getElementById(`${method}`).checked=true
    document.getElementById('url').value=url
    if(url===undefined){
    return alert('Press on url')
    }
} 


function History (props){
    // console.log(props.storData,'****************')
    return(
        <>    

        {props.storData.map((item,idx) => {

            return (
                <p id="history"  onClick={handelfillfield} key={idx}><a href='/' className={item.method}>{item.method}<span className='hid'>{item.url}</span></a> {item.url} </p>
                
                )
            })
        }
       </>
            )
        }
  


export default History;

