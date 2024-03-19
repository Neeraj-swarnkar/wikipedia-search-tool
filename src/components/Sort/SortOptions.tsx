import React, { useCallback } from 'react';

interface SortOptionsProps {
    onChange: (sortBy: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onChange }) => {
    // Memoize the change handler function using useCallback to prevent unnecessary re-creations
    const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }, [onChange]);

    return (
        <div className='sort-options'>
            <label htmlFor="sort">Sort by: </label>
            <select className="form-control col-sm-2" id="sort" onChange={handleSortChange} aria-label="Sort options">
                <option value="relevance">Relevance</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
};

export default SortOptions;
