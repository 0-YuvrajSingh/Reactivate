import { useState, useEffect } from "react";

export function FruitSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if(query.trim() === ''){
            setResults([]);
            return;
        }

        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
                const data = await response.json();
                setResults(data.map(fruit => fruit.name));
            } catch (error) {
                console.error(error);
            }
        }, 700);

        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fruits..."
            />
            <div>
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}
