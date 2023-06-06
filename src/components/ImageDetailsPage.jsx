export function ImageDetailsPage({ selectedArt, setSelectedArt }) {
	const artist = selectedArt.artist_title ?? 'Unknown Artist';
	const title = selectedArt.title;
	const altText = selectedArt.thumbnail.alt_text;
	const imageId = selectedArt.image_id;
	const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

	console.log(selectedArt);
	function buttonClickHandler() {
		setSelectedArt();
	}
	return (
		<>
			<div>
				<h1>{title}</h1>
				<h2>{`by ${artist}`}</h2>
				<button onClick={() => buttonClickHandler()}>Back to Results</button>
			</div>
			<img alt={altText} src={imageUrl} />
		</>
	);
}
