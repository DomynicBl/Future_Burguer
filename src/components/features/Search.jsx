import { useState, useEffect } from 'react';

function useSearch(data) {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.position.toLowerCase().includes(search.toLowerCase()) ||
            item.shift.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(results);
    }, [search, data]);

    return { search, setSearch, filteredData };
}

export default useSearch;
