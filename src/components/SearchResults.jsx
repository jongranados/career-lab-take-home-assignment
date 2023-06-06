export function SearchResults({ cachedResults, setSelectedArt }) {
	if (!cachedResults) return;
	const { data } = cachedResults;

	function handleClick(event, cachedDatum) {
		event.preventDefault();
		setSelectedArt(cachedDatum);
	}

	return (
		<ul>
			{data.map((cachedDatum) => {
				const imageId = cachedDatum.image_id;
				const title = cachedDatum.title;
				const artist = cachedDatum.artist_title ?? 'Unknown Author';

				return (
					<li key={imageId}>
						<a
							href={`./${imageId}`}
							onClick={(event) => handleClick(event, cachedDatum)}
						>{`${title} by ${artist}`}</a>
					</li>
				);
			})}
		</ul>
	);
}
