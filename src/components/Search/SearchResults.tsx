import React, { useMemo, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import DOMPurify from 'dompurify';
import { useRef } from 'react';

interface SearchResult {
    pageid: number;
    title: string;
    snippet: string;
}

interface SearchResultsProps {
    results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    const Row = useMemo(() => {
        return React.memo(({ index, style }: { index: number, style: React.CSSProperties }) => {
            const resultRef = useRef<HTMLDivElement | null>(null);

            useEffect(() => {
                if (resultRef.current) {
                    resultRef.current.tabIndex = 0; // Make the result focusable
                }
            }, []);

            return (
                <article key={results[index].pageid} style={style} ref={resultRef}>
                    <h3>{results[index].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(results[index].snippet) }} />
                    {/* Ensure that the HTML content being inserted is accessible */}
                    {/* dompurify to sanitize HTML content and remove any potentially harmful elements or attributes. */}
                </article>
            );
        });
    }, [results]);

    return (
        <div className='search-results'>
            {results.length === 0 ? (
                <p>No data found</p>
            ) : (
                <FixedSizeList
                    height={400}
                    itemCount={results.length}
                    itemSize={100}
                    width={'100%'}
                >
                    {Row}
                </FixedSizeList>
            )}
        </div>
    );
};

export default SearchResults;