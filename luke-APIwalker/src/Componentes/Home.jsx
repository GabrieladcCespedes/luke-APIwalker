import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            navigate(`/${resource}/${id}`);
        } else {
            alert('Please enter an ID');
        }
    };

    return (
        <div>
            <h1>Bienvenida</h1>
            <form onSubmit={handleSubmit}>
                <select value={resource} onChange={(e) => setResource(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="films">Films</option>
                </select>
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                />
                <button type="submit">Fetch Data</button>
            </form>
        </div>
    );
};

export default Home;
