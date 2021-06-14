
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0,
      results:{},
      url:'',
      headers:{}
       
    }
  }
  handelForm=(results , count ,headers , url)=>{      // tack update from child-comp(form) to paraint comp state
    this.setState({results, count,headers,url})
  }

  render(){
    return(
          //add paraint as empty tag or Freagment tag 
      <>  
      <Header/>
      <Footer/>
      <Form handler = {this.handelForm} />
      <Results res = {this.state}/>
      </>
    )
  }
}
// function App() {
//   return (
//     <React.Fragment>
//       <Header/>
//       <Form/>
//       <Footer/>
//       <Results/>
//     </React.Fragment>
//   )
// }

export default App;

