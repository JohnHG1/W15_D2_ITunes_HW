import React from 'react';
import SongSelector from '../components/SongSelector';
import Song from '../components/Song';

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
    this.fetchSongs = this.fetchSongs.bind(this)
  }
  
  componentDidMount() {
    this.fetchSongs()
  }

  fetchSongs() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(res => res.json())
      .then(content => this.setState({ songs: content.feed.entry }))
  }


  render() {
    return (
      <div className="music-container">
        <h1>Top 20 iTunes Hits in the UK</h1>
         
          <div className="button" onClick={this.fetchSongs}>Music</div>
        <SongSelector songs={this.state.songs}></SongSelector>
      </div>
    )
  }
}

export default MusicContainer;