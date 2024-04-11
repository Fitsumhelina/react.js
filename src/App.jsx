// App.jsx

import React from 'react';
import Card from './Card';
import one from './assets/1st.jpg'
import two from './assets/2nd.jpg'
import three from './assets/3rd.jpg'

function App() {
  return (
    <div className="App">
      {/* Call the Card component multiple times with different attributes */}
      <Card
        imageUrl={one}
        title="code nurd "
        description="winner of the python hackathon "
      />
      <Card
        imageUrl={two}
        title="codepia"
        description="win the second position in python hackathon "
      />
      <Card
        imageUrl={three}
        title="j part "
        description="win the third position in python hackathon "
      />
    </div>
  );
}

export default App;
