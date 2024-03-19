import React, { useState } from 'react';
import logo from '../assets/Wikipedia-logo.png';
import './App.css';
import  '../components/Search/Search.css';
import SearchInput from '../components/Search/SearchInput';
import SearchResults from '../components/Search/SearchResults';
import SortOptions from '../components/Sort/SortOptions';
import axios from 'axios';

interface SearchResult {
  pageid: number;
  title: string;
  snippet: string;
}

const App: React.FC = () => {

  const [results, setResults] = useState<SearchResult[]>([]);
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const port = process.env.PORT || 5000;
      const host = process.env.HOST || 'http://localhost';
      const response = await axios.get(`${host}:${port}/api/search?query=${query}`);
      setResults(response.data.query.search);
      setSearchHistory(prevHistory => [...prevHistory, query]);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === 'relevance') {
      // Sort by relevance by the snippet length
      // return b.snippet.length - a.snippet.length;
      // relevant sorting on the ranking of the search results
      return b.pageid - a.pageid;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Wikipedia Search Tool
        </h1>
      </header>
      <SearchInput onSearch={handleSearch} searchHistory={searchHistory}/>
      <SortOptions onChange={handleSortChange} />
      <SearchResults results={sortedResults} />
    </div>
  );
}

export default App;
