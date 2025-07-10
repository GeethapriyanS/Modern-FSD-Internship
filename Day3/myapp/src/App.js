import React from 'react';
import Comp1,{A} from './components/Comp1';
import {Comp2}  from './components/Comp2';
import image1 from './react-lifecycle.png';
import GrandParent from './components/GrandParent';
import Counter from './Counter';

function App() {
  const a=React.createElement('h1',null,'Hello World');
  const b=React.createElement('img',{src:image1,alt:'React Logo',height:"100px",width:"100px"});
  const c=React.createElement('div',null,
      React.createElement('img',{src:image1,alt:'React Logo',height:"400px",width:"400px"}),
      React.createElement('h1',null,'Component 3'),
      React.createElement('div',null,
          React.createElement('button',null,'Click'),
          React.createElement('p',null,'Hello Everyone'),
          React.createElement('div',null,
              React.createElement('p',null,'Hello')
          )
      )
  );

  return (
    <div className="App">
        {/* {c}
        <Comp1 a="hello" b="Geethapriyan"/>
        <Comp2 /> */}
        {/* <GrandParent/> */}
        {/* <A /> */}
        <Counter/>
    </div>
  );
}

export default App;
