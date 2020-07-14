
import React , {useState, useEffect, useCallback} from 'react';
import './CounterApp.css';
import PropTypes from 'prop-types';
import CounterView from './CounterView';

//set is object that keeps only unique data
const functions = new Set();

// proptype typechecking on console
 //FUNCTIONAL COMPONENT
const Counter = (props) => {
    const [count,setCount] = useState(0);
    const [whatever,setWhatever] = useState(10);

    // const setArray = useState(0);
    // const count = setArray[0];
    // const setCount = setArray[1];


    const { title } = props
    //const title = props.title

    // const change = (step) => () => setCount(count + step);
    // const doWhatever = () => setWhatever(whatever + 1);

    //useCallBack FUNCTION
    const change = useCallback((step) => () => setCount(count + step),[count]);
    const doWhatever = useCallback(() => setWhatever(whatever + 1),[whatever]);
    // each dependency is for giving back the previous callback function if it is not changed

    // debugger

    functions.add(change);
    functions.add(doWhatever);
    
    return(
        <div className = "counter-style">
            <h1>{ title }</h1>
            <CounterView CountValue = {count} changeFunc = {change}/>
            <button onClick = {doWhatever}>Do whatever</button>
            <h1>Function: {functions.size}</h1>
        </div>
        )
    
}

Counter.propTypes = {
    title: PropTypes.string.isRequired
};


export default Counter;


//{ } is used bcz we are writing javascript Expression.

//USER EFFECT

    // useEffect(() => {
    //     console.log("USE EFEECT CALL")
    // })    // CALL EVERYTIME  // independent

    // useEffect(() => {
    //     console.log("USE EFEECT CALL")
    // }, [])   // CALL ONLY ONCE i.e. no dependencies

    // useEffect(() => {
    //     console.log("USE EFEECT CALL")
    // }, [count])   // call only at the count as the dependencies

    


// // CLASS COMPONENT
// class Counter extends React.Component{

//     constructor(){
//         super();  

//         this.state = {
//             count : 0
//         }  
//         // this.increment = this.increment.bind(this);
//         // this.decrement = this.decrement.bind(this);
//     }

//     // state = {
//     //     count : 0
//     // }

//     // // Two more lifecycle functions
//     // componentDidMount(){
//     //     alert('Component did Mount Call')
//     // }

//     // componentDidUpdate(){
//     //     alert('Component did Update Call')
//     // }

//     change(step){
//         this.setState({
//             count: this.state.count + step
//         })
//     }

//     //Life Cycle Function
//     render(){
//         //alert('Component did Render Call');
//         const {count} = this.state   //bcz the var and the function name are same to enclose it in curly bracket
//         //OR
//         // const count = this.state.count

//         const {title} = this.props;

//         return(
//             <div className = "counter-style">
//             <h1>{ title }</h1>
//             <h2> {count} </h2>
//             <button onClick = {() => this.change(1)}>Increment</button>
//             <button onClick = {() => this.change(-1)}>Decrement</button>
//             </div>
//         )
//     }
// }












// if we will write ==> <button onClick = {increment()}>Increment</button>
//    then we have to make the function like this ==> 
//    const increment = () =>{
//        return () => alert('Incrementing');
// }


// const change = (step) =>{
    //     // return () => {
    //     //     setCount(count + step);
    //     // }

    //     // return function(){
    //     //     setCount(count + step);
    //     // }
    // }


// const increment = () =>{
//     setCount(count + 1);
// }
// const decrement = () =>{
//     setCount(count - 1);
// }

// return(
//     <div className = "counter-style">
//         <h1 className = "value">{count}</h1>
//         <button onClick = {increment}>Increment</button>
//         <button onClick = {decrement}>Decrement</button>
//     </div>
// )



    // const change = (step) =>{
    //     setCount(count + step);
    // }

    // return(
    //     <div className = "counter-style">
    //         <h1> {count} </h1>
    //         <button onClick = {() => change(1)}>Increment</button>
    //         <button onClick = {() => change(-1)}>Decrement</button>
    //     </div>
    // )


// this binding in class
//METHOD 1
//if         // this.increment = this.increment.bind(this);
//then       // <button onClick = {this.increment}>Increment</button>

//METHOD 2
//if  
    // increment = () => {
    // this.setState({
    //     count: this.state.count + 1
    // })
    // }
//then       // <button onClick = {this.increment}>Increment</button>
