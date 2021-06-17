import React from 'react';
import Form from './Form';
import Results from './Results'
import History from './History'
import If from './If'
import Else from './Else'
import Loading from './Loading'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headers:{},
      count : 0,
      results:{},
      url:'',
      method:'',
      userStorage:localStorage.getItem('history')?JSON.parse(localStorage.getItem('history')):[],
      recived:false,
      loading:false
    }
  }
  toggle = () => {
    this.setState({loading: !this.state.loading});
}
  handelForm=(headers , count ,results , url , method, recived)=>{      // tack update from child-comp(form) to paraint comp state
    this.setState({headers, count, results,url , method, recived})
    // console.log(this.state,'ssssssssssssssss');
  }
  handelLocalStorage=(date)=>{
    let flag=0
    this.state.userStorage.forEach(result=>{
      if(date.url===result.url && date.method===result.method){
        flag=1
      }
    })
    if(!flag){
      this.setState({userStorage:[...this.state.userStorage,date]})
      localStorage.setItem('history',JSON.stringify(this.state.userStorage))
    } 
    this.setState({userStorage:[...this.state.userStorage]})
  }
  
  render(){
    return( 
      //add paraint as empty tag or Freagment tag 
      <>
      <main>
        <Switch>
          <Route exact path='/'> 
            <Form handler = {this.handelForm} saveQuery={this.handelLocalStorage} toggle={this.toggle}/>
                <If condition={this.state.recived}>
                    <Results result = {this.state}/>
                    <History storData = {this.state.userStorage}/>
                </If>
                <Else condition={this.state.recived} >
                    <Loading loading={this.state.loading}>
                        <h2>Please Waite</h2>
                        <div class="loader"></div>
                    </Loading>
                </Else>
          </Route>
          <Route exact path='/history'>
          <History storData = {this.state.userStorage}/>

          </Route>
          <Route exact path='Help' render={()=><p>from Help</p>}/>
          {/* <Route path='*'>404 Not Found</Route> */}
          <Route component={NotFound} />

        </Switch>
      </main>


      
      
      </>
    )
  }
}


export default App;



