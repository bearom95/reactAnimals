import './Form.css';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Image } from '../components/Image';

export const Form = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [latin_name, setLatinName] = useState('');
  const [type, setType] = useState('');
  const [activity, setActivity] = useState('');
  const [habitat, setHabitat] = useState('');
  const [diet, setDiet] = useState('');

  const navigate = useNavigate();

  const createAnimal = (ev, name, image, latin_name, type, activity, habitat, diet) => {
    ev.preventDefault();

    const animal = {
      name: name,
      image_link: image,
      latin_name: latin_name,
      animal_type: type,
      active_time: activity,
      habitat: habitat,
      diet: diet,
      id: uuidv4(),
    };

    postAnimal(animal);
    navigate('/gallery');
  };

  const postAnimal = async (item) => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/animals',
      data: item,
    });
  };

  return (
    <div className="formpagediv">
      <h1>Collaborate with us</h1>
      <p>Here´s how you can help the community.</p>
      <p>
        Complete the form below with the animal´s details and help the Enciclopedy grow!
      </p>
      <div className="formandpreview">
        <form
          onSubmit={(ev) =>
            createAnimal(ev, name, image, latin_name, type, activity, habitat, diet)
          }
        >
          <fieldset>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(ev) => setName(ev.target.value)} />
            <label htmlFor="image">Image url</label>
            <input type="text" onChange={(ev) => setImage(ev.target.value)} />
            <label htmlFor="latin_name">Latin Name</label>
            <input type="text" onChange={(ev) => setLatinName(ev.target.value)} />
            <label htmlFor="type">Type</label>
            <input type="text" onChange={(ev) => setType(ev.target.value)} />
            <label htmlFor="activity">Activity</label>
            <input type="text" onChange={(ev) => setActivity(ev.target.value)} />
            <label htmlFor="habitat">Habitat</label>
            <input type="text" onChange={(ev) => setHabitat(ev.target.value)} />
            <label htmlFor="diet">Diet</label>
            <input
              className="dietinput"
              type="text"
              onChange={(ev) => setDiet(ev.target.value)}
            />
          </fieldset>
          <input className="submitbtn" type="submit" value="Create" />
        </form>
        <div className="previewdiv">
          <p>PREVIEW</p>
          <div className="animaldivpreview">
            <h1>{name}</h1>
            <h2>{latin_name}</h2>
            <Image src={image} alt="" />
            <div className="description">
              <p>Type: {type}</p>
              <p>Activity: {activity}</p>
              <p>Habitat: {habitat}</p>
              <p>Diet: {diet}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
