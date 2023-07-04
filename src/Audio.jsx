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
    //const { playing } = this.state;
    const { src } = this.props;

    return (
      <div className={s.player__block}>
        <audio
          ref={this.audioRef}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div className={`${s.player__btnPlay} ${s._btn}`}>
          <svg
            onClick={this.handlePlay}
            className={s.player__btnPlaySvg}
            alt="play"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          </svg>
        </div>
        <div className={s.player__btnNext}>
          <svg
            onClick={this.handlePause}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square"
          >
            <rect width="14" height="14" x="3" y="3" fill="#D9D9D9"/>
          </svg>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
