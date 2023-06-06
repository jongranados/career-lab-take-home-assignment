export function SearchResults({ cachedResults }) {
	if (!cachedResults) return;
	const { data } = cachedResults;

	return (
		<ul>
			{data.map((cachedDatum) => {
				console.log(cachedDatum);
				return <li key={cachedDatum.image_id}>{cachedDatum.artist_title}</li>;
			})}
		</ul>
	);
}
