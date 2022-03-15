import React from "react";

const Body = () => {
    return (
        <div id="body">
        <div className="row">
          <div className = "col" id = "component1" >
            <img src="/icon1.png" alt="first"/>
            <h1>Declarative</h1>                    
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="col justify-content-center" id="component2">
            <img src="/icon2.png" alt="second"/>
            <h1>Components</h1>                    
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="col justify-content-center" id="component3">
            <img src="/icon3.png" alt="third"/>
            <h1>Single-Way</h1>                    
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="col justify-content-center" id="component4">
            <img src='/icon4.png' alt="fourth"/>
            <h1>JSX</h1>                    
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
      </div>
    </div>

    )


}
export default Body;