import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState('');
  const [animalsCollection, setAnimalsCollection] = useState([]);

  useEffect(() => {
    const getAnimalsFiltered = async () => {
      const data = await fetch(`http://localhost:8080/animals?name=${filter}`);
      const dataToJson = await data.json();
      return {
        id: dataToJson[0].id,
        name: dataToJson[0].name,
        image: dataToJson[0].image_link,
        latin_name: dataToJson[0].latin_name,
      };
    };

    getAnimalsFiltered().then((animal) => setAnimalsCollection([animal]));
  }, [filter]);
  return (
    <div className="finderdiv">
      <input
        value={filter}
        placeholder="Type an animal"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <ul>
        {animalsCollection.map((animal) => (
          <li className="animalminicard" key={animal.id}>
            <Link to={`/gallery/${animal.id}`}>
              <h1>{animal.name}</h1>
            </Link>
            <img src={animal.image} alt={animal.name} />
            {/* <h2>{animal.latin_name}</h2> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
