import './Loading.scss'
const Loading = (props)=>{
    console.log(props);
    console.log(props.loading);
        return props.loading?props.children : null
        
}

export default Loading;