export function ImageDetailsPage({ selectedArt, setSelectedArt }) {
	const artist = selectedArt.artist_title ?? 'Unknown Artist';
	const title = selectedArt.title;
	const altText = selectedArt.thumbnail.alt_text;
	const imageId = selectedArt.image_id;
	const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

	function buttonClickHandler() {
		setSelectedArt();
	}
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
				}}
			>
				<h1>{title}</h1>
				<h2>{`- ${artist}`}</h2>
			</div>
			<button
				style={{
					margin: '0 auto 3rem',
					padding: '1rem',
					width: 'fit-content',
					fontSize: '2rem',
					fontWeight: 'bold',
				}}
				onClick={() => buttonClickHandler()}
			>
				Back to Results
			</button>
			<img alt={altText} src={imageUrl} />
		</>
	);
}
