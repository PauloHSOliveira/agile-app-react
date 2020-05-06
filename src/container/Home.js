import React from 'react';

import HomeCard from '../components/HomeCard';

function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        <HomeCard title="Teste 1" />
        <HomeCard title="Teste 2" />
        <HomeCard title="Teste 3" />
      </div>
    </div>
  );
}

export default Home;
