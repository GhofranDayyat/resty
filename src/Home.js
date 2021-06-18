import React from 'react';
import Form from './Form';
import Results from './Results'
// import History from './History'
import If from './If'
import Else from './Else'
import Loading from './Loading'


class Home extends React.Component{
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
  mainUpdate=(headers , count ,results , url , method, userStorage,recived)=>{ // tack update from child-comp(form) to paraint comp state
    this.setState({headers, count, results,url , method, userStorage, recived})
    console.log(this.props.location.query,'ssssssssssssssss');

  }
  render(){
    return( 
      //add paraint as empty tag or Freagment tag 
      <>
            <Form handler = {this.mainUpdate}  toggle={this.toggle} populate ={this.props.location.query}/>
                <If condition={this.state.recived}>
                    <Results result = {this.state}/>
                    {/* <History storData = {this.state.userStorage}/> */}
                </If>
                <Else condition={this.state.recived} >
                    <Loading loading={this.state.loading}>
                        <h2>Please Waite</h2>
                        <div class="loader"></div>
                    </Loading>
                </Else>
                

      </>
    )
  }
}

export default Home;



