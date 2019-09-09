import React, { useState } from 'react';

const App = ({ name = 'World' }) => {
  const [isButtonClicked, markButtonAsClicked] = useState(false);

  return (
    <div>
      <p>Hello {name}</p>
      <div>
        <button onClick={() => markButtonAsClicked(true)}>Click me!</button>

        {isButtonClicked ? <h1>bye!</h1> : null}
      </div>
    </div>
  );
};

export default App;
