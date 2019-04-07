import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) {
		return <div>Select a song</div>;
	}

	return (
		<div>
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</div>
	);
};

// reach into redux store and pull up value we are interested in
const mapStateToProps = (state) => {
	//console.log(state);
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
