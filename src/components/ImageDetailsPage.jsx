export function ImageDetailsPage({ selectedArt, setSelectedArt }) {
	function buttonClickHandler() {
		setSelectedArt(false);
	}
	return <button onClick={() => buttonClickHandler()}>Back to Results</button>;
}
