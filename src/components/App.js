import React, { useEffect, useState } from 'react';

export default function App() {
    const [dogBreed, setDogBreed] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setDogBreed(data.message);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.error('Error fetching random dog image:', error);
            });
    }, []);

    // Show loading indicator if data has not been loaded
    if (!isLoaded) return <p>Loading...</p>;

    return (
        <div>
            <h1>Random Dog Image</h1>
            <img src={dogBreed} alt="A Random Dog" />
        </div>
    );
}
