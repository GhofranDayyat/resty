import React from 'react';
import './History.scss'
import {Switch, Route} from 'react-router-dom'

import NotFound from './NotFound';


function  handelfillfield(e){
    e.preventDefault();
    let [method,url]=(e.target.innerText).split(' ')
    console.log((e.target.innerText).split(' '));
    document.getElementById(`${method}`).checked=true
    document.getElementById('url').value=url
    if(url){
        <Route component={NotFound} />
    }
} 


function History (props){
    // console.log(props.storData,'****************')
    return(
        <>    

        {props.storData.map((item,idx) => {
            //  document.getElementById(`${item.method}`).style.color='red';
            // console.log(document.getElementById(`${item.method}`));
            var myPara = document.createElement("p");

            // if(item.method==='get'){
                myPara.setAttribute("id", "test");
                myPara.textContent= `${6562}`
                // document.getElementById('test').style.color='yalow'
             console.log(myPara);
            // }
            return (
                <p id="history"  onClick={handelfillfield} key={idx}><a href='/' className={item.method}>{item.method}<span className='ee'>{item.url}</span></a> {item.url} </p>
                
                )
            })
        }
       </>
            )
        }
  


export default History;

