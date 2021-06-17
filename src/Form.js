import React from 'react';
import './Form.scss';
import superagent from 'superagent'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:'',
            method: '' 
        }
    }

    clickHandler = e=>{ // should be arrow to prevent loss this value 
        e.preventDefault();
        this.props.toggle()
         let url = e.target.url.value
         let method = e.target.method.value
         let body =e.target.body.value
         try{
            //  document.getElementById('get').style.color='red'
             console.log(document.getElementById('get'));
              superagent[`${method}`](url).send({body}).then(date=>{
                let query={method:method, url:url, body:body}
                try{
                    this.props.handler(date.headers ,date.body.length ,date.body, date.req.url ,date.req.method, true)
                    this.props.saveQuery(query)
                }catch(error){
                    this.props.handler('error' , 0 , error.message, url, method,)
                }

           
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
                    <input type='url' name='url' id='url' required/>
                    <button type='submit'>GO!</button>
                    </div>
            
                    <div id='methods'>
                    <label>GET</label>
                    <input type='radio' name='method' id='get' value='get' defaultChecked />
                    <label>POST</label>
                    <input type='radio' name='method' id='post' value='post'  />
                    <label>PUT</label>
                    <input type='radio' name='method' id='put' value='put' />
                    <label>DELETE</label>
                    <input type='radio' name='method' id='delete' value='delete'  />
                    <textarea type='text' name='body' id='body'></textarea>
                    </div>
                </div>
               
                </form>
                </main>
            </React.Fragment>
        )
    }
}
export default Form;