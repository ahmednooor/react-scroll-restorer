import React from "react";

import { ScrollRestorer, useScrollRestorer } from "react-scroll-restorer";

// ComponentOne with scrollable content
const ComponentOne = () => {
  useScrollRestorer("ComponentOne"); // simple usage

  return (
    <p style={{ paddingTop: "36px", textAlign: "center" }}>
      {[...Array(100).keys()].map((num) => (
        <span key={num + 1}>
          ComponentOne • {num + 1}
          <br />
        </span>
      ))}
    </p>
  );
};

// ComponentTwo with scrollable content
const ComponentTwo = () => {
  const [loading, setLoading] = React.useState(true);

  // usage with dependencies. restores scroll whenever loading is updated.
  useScrollRestorer("ComponentTwo", [loading]);

  React.useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <p style={{ paddingTop: "36px", textAlign: "center" }}>
      {loading
        ? "Loading ..."
        : [...Array(100).keys()].map((num) => (
            <span key={num + 1}>
              ComponentTwo • {num + 1}
              <br />
            </span>
          ))}
    </p>
  );
};

const App = () => {
  const [toggleSwitch, setToggleSwitch] = React.useState(true);

  return (
    <ScrollRestorer>
      <button
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "8px",
          marginTop: "8px"
        }}
        onClick={(_) => {
          setToggleSwitch(!toggleSwitch);
        }}>
        Show {toggleSwitch ? "ComponentTwo" : "ComponentOne"}
      </button>
      {toggleSwitch ? <ComponentOne /> : <ComponentTwo />}
    </ScrollRestorer>
  );
};

export default App;
