import {Link} from 'react-router-dom';
import React from 'react';
import If from './If'
import './History.scss'
import Details from './Details'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:'',
            method:'',
            body:'',
            result:[],
            condition:false
        }
    }
   updatDetails=((url, method, body ,result , condition )=>{
    this.setState( {url, method, body,result, condition } )
   })
    showDetails=e=>{
        e.preventDefault();
        let [method,url] =(e.target.innerText).split(' ');
        let saveDate = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
       
        saveDate.map((item,idx) => {
            if (item.url===url&&item.method===method) {
                this.updatDetails( item.url, item.method, item.body , item.result ,true )
            }
              })
        }


        render(){   
            let saveDate = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];           
            return(
                <>  
                <div id='main-history'>
                {saveDate.map((item,idx) => {
                    return(
                        <>
                        <p id='history'  onClick={this.showDetails} key={idx}><a href='/' className={item.method}> {item.method } <span className='hid'> { item.url}</span></a>  {item.url} </p>                                                                          
                        </>   
                              )})
                            }
                            <If condition={this.state.condition}>
                            <div>
                                {/* {console.log(this.state.url,'8888888888888888')} */}
                            <Link id='reRun-link' to={{ pathname:'/', query: { url: this.state.url, method: this.state.method, body: this.state.body } }}>Re Run</Link>                                                         
                                <Details detail={this.state}/>
                            </div>
                            </If>   
                </div>
   
                </>
                    )}
}
export default Detail;


