
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results'
import History from './History'


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
       fetch:false
    }
  }
  handelForm=(headers , count ,results , url , method)=>{      // tack update from child-comp(form) to paraint comp state
    this.setState({headers, count, results,url , method})
    // console.log(this.state,'ssssssssssssssss');
  }
  handelLocalStorage=(date)=>{
    // console.log(date,'*******');
    this.setState({userStorage:[...this.state.userStorage,date]})
    localStorage.setItem('history',JSON.stringify(this.state.userStorage))
  }
  render(){
    return(
          //add paraint as empty tag or Freagment tag 
      <>  
      <Header/>
      <Footer/>
      <Form handler = {this.handelForm} saveQuery={this.handelLocalStorage} />
      <Results result = {this.state}/>
      <History storData = {this.state.userStorage}/>
      </>
    )
  }
}

export default App;

