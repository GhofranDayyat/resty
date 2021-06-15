import React from 'react';


class History extends React.Component{
    render(){
        console.log(this.props.storData,'****************')
        return(
       <>
            {this.props.storData.map(item => { 
            return <div>
            <p>{item.method}</p> <p>{item.url}</p> 
            </div> 
            })
     }
       </>
        )
    }
}



export default History;
