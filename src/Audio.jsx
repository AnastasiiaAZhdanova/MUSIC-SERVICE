import React from 'react';
import s from './pages/main/bar.module.css';

class AudioPlayer extends React.Component {
  state = {
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    //currentTrack: 0,
    //tracks: [],
  };

  audioRef = React.createRef();

  //componentDidMount() {
  // this.setState({ tracks: this.props.tracks });
  //}

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

  handleVolumeChange = (e) => {
    this.setState({ volume: e.target.value });
    this.audioRef.current.volume = e.target.value;
  };

  handleSeek = (e) => {
    this.audioRef.current.currentTime = e.target.value;
  };

  handleNextTrack = () => {
    if (this.state.currentTrack < this.state.tracks.length - 1) {
      this.setState((prevState) => ({
        currentTrack: prevState.currentTrack + 1,
      }));
    }
  };

  handlePrevTrack = () => {
    if (this.state.currentTrack > 0) {
      this.setState((prevState) => ({
        currentTrack: prevState.currentTrack - 1,
      }));
    }
  };

  render() {
    const { playing, currentTime, duration, volume, currentTrack, tracks } =
      this.state;
    const { src } = this.props;

    return (
      <div className={s.player__block}>
        <audio
          ref={this.audioRef}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
          onEnded={this.handleNextTrack}
        />
        <div>
          <input
            className={s.player__progressBar}
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={this.handleSeek}
          />
        </div>
        <div className={s.player__btnPrev}>
          <svg
            //onClick={this.handlePrevTrack}
            className={s.player__btnPrevSvg}
            alt="prev"
          >
            <use xlinkHref="./img/icon/sprite.svg#icon-prev" />
          </svg>
        </div>

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

        <div className={s.player__btnNext}>
          <svg
            //onClick={this.handleNextTrack}
            className={s.player__btnNextSvg}
            alt="next"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-next" />
          </svg>
        </div>

        <div className={s.player__volumeBar}>
          <div className={`${s.bar__volumeBlock} ${s.volume}`}>
            <div className={s.volume__content}>
              <div className={s.volume__image}>
                <svg className={s.volume__svg} alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={this.handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
