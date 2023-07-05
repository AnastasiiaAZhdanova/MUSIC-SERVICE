import React from 'react';
import s from './pages/main/bar.module.css';

class AudioPlayer extends React.Component {
  state = {
    playing: false,
  };

  audioRef = React.createRef();

  handlePlay = () => {
    this.audioRef.current.play();
    this.setState({ playing: true });
  };

  handlePause = () => {
    this.audioRef.current.pause();
    this.setState({ playing: false });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
      duration: this.audioRef.current.duration,
    });
  };

  render() {
    const { playing } = this.state;
    const { src } = this.props;

    return (
      <div className={s.player__block}>
        <audio
          ref={this.audioRef}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div className={`${s.player__btnPlay} ${s._btn}`}>
          {!playing ? (
            <svg
              onClick={this.handlePlay}
              className={s.player__btnPlaySvg}
              alt="play"
            >
              <use xlinkHref="img/icon/sprite.svg#icon-play" />
            </svg>
          ) : (
            <svg
              onClick={this.handlePause}
              className={s.player__btnPauseSvg}
              alt="pause"
            >
              <use xlinkHref="img/icon/sprite.svg#icon-pause" />
            </svg>
          )}
        </div>
        
      </div>
    );
  }
}

export default AudioPlayer;
