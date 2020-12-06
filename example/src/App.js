import React from 'react'

import { ScrollRestorer, useScrollRestorer } from 'react-scroll-restorer';

// ComponentOne with scrollable content
const ComponentOne = () => {
  useScrollRestorer("ComponentOne");

  return (
    <p style={{paddingTop: '36px', textAlign: 'center'}}>
      {[...Array(100).keys()].map((num) => (
        <span key={num + 1}>
          ComponentOne • {num + 1}
          <br />
        </span>
      ))}
    </p>
  );
}

// ComponentTwo with scrollable content
const ComponentTwo = () => {
  useScrollRestorer("ComponentTwo");

  return (
    <p style={{paddingTop: '36px', textAlign: 'center'}}>
      {[...Array(100).keys()].map((num) => (
        <span key={num + 1}>
          ComponentTwo • {num + 1}
          <br />
        </span>
      ))}
    </p>
  );
}

const App = () => {
  const [toggleSwitch, setToggleSwitch] = React.useState(true);

  return <ScrollRestorer>
      <button
        style={{ 
          position: "fixed", top: "0", left: '50%', 
          transform: 'translateX(-50%)', padding: "8px", marginTop: '8px' }}
        onClick={(_) => {
          setToggleSwitch(!toggleSwitch);
        }}>
        Show {toggleSwitch ? "ComponentTwo" : "ComponentOne"}
      </button>
      {toggleSwitch ? <ComponentOne /> : <ComponentTwo />}
  </ScrollRestorer>
}

export default App
