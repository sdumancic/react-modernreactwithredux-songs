import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button onClick={() => this.props.selectSong(song)} className="ui button primary">
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

/*
   always get first argument state from redux store and always returns object
   that is going to show as PROPS inside of our component
*/
const mapStateToProps = (state) => {
	console.log(state);
	return { songs: state.songs };
};

// selectSong actionCreator will be added to our component as a prop
// when we call it it will automatically take the action and send it to redux dispatch
export default connect(mapStateToProps, {
	selectSong : selectSong
})(SongList);
