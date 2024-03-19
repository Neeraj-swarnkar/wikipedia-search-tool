import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import SearchInput from '../components/Search/SearchInput';
import SortOptions from '../components/Sort/SortOptions';
import SearchResults from '../components/Search/SearchResults';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders "Wikipedia Search Tool" in an h1 tag', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Wikipedia Search Tool');
  });

  test('renders SearchInput component', () => {
    const handleSearch = jest.fn();
    render(<SearchInput onSearch={handleSearch} searchHistory={[]} />);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });

  test('renders SortOptions component', () => {
    const handleSortChange = jest.fn();
    render(<SortOptions onChange={handleSortChange} />);
    const sortOptions = screen.getByRole('combobox');
    expect(sortOptions).toBeInTheDocument();
  });

});
