import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { SearchResults } from './SearchResults';

import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [cachedResults, setCachedData] = useState();
	const [selectedArt, setSelectedArt] = useState();
	// console.log('in App.jsx', selectedArt)
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local cachedResults, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js

		searchArtworks(query).then((json) => {
			setCachedData(json);
		});
	}

	return (
		<div className="App">
			{!selectedArt ? (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<SearchResults
						cachedResults={cachedResults}
						setSelectedArt={setSelectedArt}
					/>
					<Footer />
				</>
			) : (
				<ImageDetailsPage selectedArt={selectedArt}></ImageDetailsPage>
			)}
		</div>
	);
}
