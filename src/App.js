import React from 'react';
import './App.css';

const App = () => {
  const AppLayout = () => (
    <>
      <header>Header - it will contain the nav bar</header>
      <aside>Sidebar - This is will contain the sidebar menu</aside>
      <main>
        <p>
          Main - Wow it works!! This is starter pack project, with react and
          webpack built from scratch! Port-env: {process.env.PORT}
        </p>
      </main>
      <footer className='footer'>Footer - Made by Josh Uvi</footer>
    </>
  );
  return <AppLayout />;
};

export default App;
