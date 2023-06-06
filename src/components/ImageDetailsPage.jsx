export function ImageDetailsPage({ selectedArt, setSelectedArt }) {
	const artist = selectedArt.artist_title ?? 'Unknown Artist';
	const title = selectedArt.title;
	const altText = selectedArt.thumbnail?.alt_text;
	const imageUrl = `https://www.artic.edu/iiif/2/${selectedArt.image_id}/full/843,/0/default.jpg`;
	const thumbnailExists = Boolean(selectedArt.thumbnail);

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

			{thumbnailExists ? (
				<img alt={altText} src={imageUrl} />
			) : (
				<p style={{ margin: '0 auto', fontWeight: 'bold' }}>
					Sorry, we do not have a thumbnail for this art piece.
				</p>
			)}
		</>
	);
}
