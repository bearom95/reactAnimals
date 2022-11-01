import './Home.css';

import { Image } from '../components/Image';

export const Home = () => {
  return (
    <div className="homediv">
      <h1>Home</h1>
      <p>
        This site consits of a wild animals enciclopedy where all users can contribute by
        adding new animals.
      </p>
      <p>
        If you wish to collaborate just click on the Collaborate link that appears on the
        menu.
      </p>
      <Image
        src={
          'https://res.cloudinary.com/dbdj2oecy/image/upload/v1667322289/animalseyes_r0rg4d.png'
        }
        alt="animals-eyes"
      />
    </div>
  );
};
