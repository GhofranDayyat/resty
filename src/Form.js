import React from 'react';
import './Form.scss';
import superagent from 'superagent'

// function 
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:'',
            method: '' ,
            userStorage:localStorage.getItem('history')?JSON.parse(localStorage.getItem('history')):[],
        }
    }

    clickHandler = e=>{ // should be arrow to prevent loss this value 
        e.preventDefault();       
        this.props.toggle()   
        let url = e.target.url.value ;
         let method = e.target.method.value ;
         let body =e.target.body.value ;                                                   
         try{
              superagent[`${method}`](url).send({body}).then(date=>{
                let query={method:method, url:url, body:body, result:date.body}
                try{
                    let flag=0
                    this.state.userStorage.forEach(result=>{
                    if(query.url===result.url && query.method===result.method){
                    flag=1
                    }
                    })
                    if(!flag){ //not exist
                        this.setState({userStorage:[...this.state.userStorage,query]})
                        console.log('not');
                        localStorage.setItem('history',JSON.stringify(this.state.userStorage))
                    }else{ //exist
                        console.log('not');
                        this.setState({userStorage:[...this.state.userStorage]})    
                    }
                  
                    this.props.handler(date.headers ,date.body.length ,date.body, date.req.url ,date.req.method,this.state.userStorage, true)

                }catch(error){
                    this.props.handler('error' , 0 , error.message, url, method,this.state.userStorage,true)
                }           
            })    
   
        }catch(error){
            this.props.handler('error' , 0 , error.message, url, method,true)
        }
    }
/// Re Run to populate the form 
    componentDidMount(){
        if(this.props.populate){
          this.populate();
        }
      }  
    populate=(()=>{
        let url ;
        let method ;
        let body ;
        url = this.props.populate.url
        method = this.props.populate.method
        body =this.props.populate.body
        document.getElementById(`${method}`).checked=true
        document.getElementById('url').value=url
        document.getElementById('body').value=body
    })  
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

export default Form