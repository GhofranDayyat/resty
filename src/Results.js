import React  from 'react';
import './Results.scss'
import ReactJson from 'react-json-view'



class Results extends React.Component{
    render(){
        // console.log(this.props.results,'****************')
        return(
       <>
           
        <div id='show'>
                    <ReactJson src={this.props.result.headers} theme="tomorrow"  name='Headers'/>
                    <ReactJson src={this.props.result} theme="tomorrow" name='Response'/>                         
        </div>
       </>
            )
    }
}

export default Results;

