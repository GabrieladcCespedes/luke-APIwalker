import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import obiWanImage from '../assets/obi-wan-kenobi.jpg'; // Importa la imagen

const Resource = () => {
    const { resource, id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(false);
                const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
                setData(response.data);
            } catch (err) {
                setError(true);
            }
        };

        fetchData();
    }, [resource, id]);

    if (error) {
        return (
            <div>
                <h1>Estos no son los droides que está buscando</h1>
                <img src={obiWanImage} alt="Obi-Wan Kenobi" />
            </div>
        );
    }

    return (
        <div>
            {data ? (
                <div>
                    {Object.keys(data).slice(0, 4).map((key) => (
                        <p key={key}>
                            <strong>{key}:</strong> {data[key]}
                        </p>
                    ))}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default Resource;
