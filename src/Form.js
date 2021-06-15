import React from 'react';
import './Form.scss';
import superagent from 'superagent'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:'',
            method: 'get',  // default get 
        }
    }
    clickHandler = e=>{ // should be arrow to prevent loss this value 
        e.preventDefault();
        this.setState({fetch:true})

         let url = e.target.url.value
         let method =  e.target.method.value
         let body =e.target.body.value
         try{
              superagent[`${method}`](url).send({body}).then(date=>{
                //  console.log(date.body,'//////////////');
                let query={method:method, url:url, body:body}
                this.props.handler(date.headers ,date.body.length ,date.body, date.req.url ,date.req.method)
                this.props.saveQuery(query)
            })    
   
        }catch(error){
            this.props.handler('error' , 0 , error.message, url, method,)
        }
    }
    render(){
        return(
            <React.Fragment>
                <main>
                <form onSubmit={this.clickHandler}>
                <div id='main-form'>
                    <div id='enter-url'>
                    <label>URL: </label>
                    <input type='url' name='url' id='url' required/>
                    <label>Body</label>
                    <textarea type='text' name='body' id='body'></textarea>
                    <button type='submit'>GO!</button>
                    </div>
            
                    <div id='methods'>
                    <label>GET</label>
                    <input type='radio' name='method' id='GET' value='get'  />
                    <label>POST</label>
                    <input type='radio' name='method' id='POST' value='post'  />
                    <label>PUT</label>
                    <input type='radio' name='method' id='PUT' value='put' />
                    <label>DELETE</label>
                    <input type='radio' name='method' id='DELETE' value='delete'  />
                    </div>
                </div>
               
                </form>
                </main>
            </React.Fragment>
        )
    }
}
export default Form;