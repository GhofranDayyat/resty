import React from 'react';
import Home from './Home'
import {Switch, Route} from 'react-router-dom'
import ReRun from './History'


class App extends React.Component{
  render(){
    return( 
      //add paraint as empty tag or Freagment tag 
      <>
      <main>
        <Switch>
            
          <Route exact path='/' component={Home}/> 


          <Route exact path='/history' component={ReRun}/>  


           <Route exact path='/help' render={()=><h2>React App for Testing APIs
            <p>POST:== TO send Date</p>
            <p>Get:== TO get Date</p>
            <p>PUT:== TO update Date</p>
            <p>DELETE:== TO delete Date</p>
           </h2>
            }  />


          <Route path='*'>404 Not Found</Route>


        </Switch>
      </main>


      
      
      </>
    )
  }
}

export default App;



