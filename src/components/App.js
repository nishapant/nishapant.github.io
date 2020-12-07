import React from 'react';
import { Typography } from 'antd';

import '../style/App.css'

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title strong className="heading">
        Welcome! <span role="img" aria-label="sparkle">✨</span>
      </Title>
      <Typography className="paragraphs">
        I’m an undergraduate at the University of Illinois at Urbana-Champaign studying computer science. On campus I have been 
        involved with the Crowd Dynamics Lab researching bluetooth technology for COVID-19 contract tracing.
      </Typography>
      <Typography className="paragraphs">
        Currently working on the engineering team at <a href="https://www.moderntreasury.com/" className="mt-link">Modern Treasury</a>, a tool for payment operations <span role="img" aria-label="money bag">💰</span>, 
        backed by Benchmark Capital. Previously I interned on the iOS team at <a href="https://vimeo.com/" className="vimeo-link">Vimeo</a>, an ad-free video platform <span role="img" aria-label="videos">📹</span>.
      </Typography>
      <Typography className="paragraphs">
        Outside of school and work, I enjoy distance running, food, music, cities, and photography.
      </Typography>
    </div>
  );
}

export default App;
