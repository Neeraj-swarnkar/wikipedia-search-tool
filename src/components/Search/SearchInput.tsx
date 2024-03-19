import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

interface SearchInputProps {
  onSearch: (query: string) => void;
  searchHistory: string[];
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, searchHistory }) => {
  const [query, setQuery] = useState('');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
  // Debounce the search function to reduce latency
  const debouncedSearch = debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 500);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value); // Trigger the debounced search function
  }, [debouncedSearch]);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='search-input form-group'>
      <label htmlFor="search-input"> Search Wikipedia:</label>
      <input id="search-input" type="text" className="form-control form-control-lg" aria-label="Search" value={query} onChange={handleInputChange} placeholder="Enter search query"/>

      <div className='search-history-acc'>
        <button className='accordion-button' onClick={toggleAccordion}>
          {isAccordionOpen ? 'Hide' : 'Show'} Search History
        </button>
        {isAccordionOpen && (
          <ul className='search-history' data-testid="search-history">
            {searchHistory.map((query, index) => (
              <li key={index}>{query}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
