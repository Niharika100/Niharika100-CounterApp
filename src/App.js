import React from 'react';
import Counter from './Component/CounterApp/CounterApp';

const App = () =>{
    return(
        // props
        <Counter title = "My Counter Application"/>
    )
}

  export default App;

  // function App(prop){
//     return(
//       <div className = {prop.className}>
//         Hello 
//         <h2>How are you</h2>
//       </div>
//     )
//   }

// const App = () => {
//     return(
//       <div>
//         Hello 
//         <h2>How are you</h2>
//       </div>
//     )
//   }