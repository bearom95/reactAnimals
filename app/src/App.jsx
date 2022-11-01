import './App.css';

import { Outlet } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/header';
import { Nav } from './components/Nav';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
