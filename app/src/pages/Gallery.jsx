import './Gallery.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../components/Image';

export const Gallery = () => {
  const [animals, setAnimals] = useState([]);
  const [deleted, setDeleted] = useState('');

  useEffect(() => {
    const getAnimals = async () => {
      const data = await fetch('http://localhost:8080/animals');
      const dataToJson = await data.json();
      setAnimals(dataToJson);
    };

    getAnimals();
  }, [deleted]);

  const deleteminicard = (ev, id) => {
    ev.preventDefault();
    deleteanimal(id);
    setDeleted(id);
  };

  const deleteanimal = async (id) => {
    axios({
      method: 'delete',
      url: `http://localhost:8080/animals/${id}`,
    });
  };

  /* const deleteminicard = (id del animal) y se ejecuta cuando clik en el boton de delete */

  return (
    <div className="animalsLayout">
      <div className="introdiv">
        <h2>Animals Gallery</h2>
        <p>Click in any animal to know more about it.</p>
        <p>You can also delete the animal if the information is incorrect.</p>
      </div>
      <div className="allminicards">
        {animals.map((animal) => (
          <div className="animalminicard" key={animal.id}>
            <Link to={`/gallery/${animal.id}`}>
              <h1>{animal.name}</h1>
            </Link>
            <Image src={animal.image_link} alt={animal.name} />
            <button onClick={(ev) => deleteminicard(ev, animal.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
