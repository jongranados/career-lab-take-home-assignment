export function SearchResults({ cachedResults }) {
	if (!cachedResults) return;
	const { data } = cachedResults;

	return (
		<ul>
			{data.map((cachedDatum) => {
				const imageId = cachedDatum.image_id;
				const title = cachedDatum.title;
				const artist = cachedDatum.artist_title ?? 'Unknown Author';

				return (
					<li key={imageId}>
						<a href={`./${imageId}`}>{`${title} by ${artist}`}</a>
					</li>
				);
			})}
		</ul>
	);
}
