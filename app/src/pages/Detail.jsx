import './Detail.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Image } from '../components/Image';
export const Detail = () => {
  const [animal, setAnimal] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getAnimal = async () => {
      const data = await fetch(`http://localhost:8080/animals/${id}`);
      const response = await data.json();
      setAnimal(response);
    };
    getAnimal();
  }, []);

  return (
    <div className="animaldiv">
      <h1>{animal.name}</h1>
      <h2>{animal.latin_name}</h2>
      {/*  <img src={animal.image_link} alt={animal.name} />  //si no componetizase*/}
      <Image src={animal.image_link} alt={animal.name} />
      <div className="description">
        <p>Type: {animal.animal_type}</p>
        <p>Activity: {animal.active_time}</p>
        <p>Habitat: {animal.habitat}</p>
        <p>Diet: {animal.diet}</p>
      </div>
    </div>
  );
};
