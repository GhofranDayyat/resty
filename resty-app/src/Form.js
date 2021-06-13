import React from 'react';
import './Form.scss';
   


class Form extends React.Component{

    state={
        url:'',
        method: ''
    }
    clickHandler = (e)=>{ // should be arrow to prevent loss this value 
        e.preventDefault();
        let newStat = {url: e.target.url.value , method: e.target.method.value}
        this.setState(newStat)
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
                    <button type='submit'>GO!</button>
                    </div>
            
                    <div id='methods'>
                    <label>GET</label>
                    <input type='radio' name='method' id='GET' value='GET' />
                    <label>POST</label>
                    <input type='radio' name='method' id='POST' value='POST' />
                    <label>PUT</label>
                    <input type='radio' name='method' id='PUT' value='PUT' />
                    <label>DELETE</label>
                    <input type='radio' name='method' id='DELETE' value='DELETE' />
                    </div>
                </div>
                <div id='show'>
                    <p id='result-method'>{this.state.method}</p>
                    <p id='result-url'>{this.state.url}</p>
                </div>
                </form>
                </main>
            </React.Fragment>
        )
    }
}
export default Form;