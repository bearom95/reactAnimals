import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      <NavLink to="gallery">Gallery</NavLink>
      <NavLink to="form">Collaborate</NavLink>
      <NavLink to="finder">Search</NavLink>
    </nav>
  );
};
