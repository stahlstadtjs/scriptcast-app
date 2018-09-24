import { Component, SyntheticEvent } from 'react';
import React from 'react';

import '../styles/Player.css';

import { ProgressBar, ProgressState } from './Progressbar';
import { Button } from './Button';

import { MdPlayArrow, MdPause } from "react-icons/md";


type PlayerState = {
  playing: boolean,
  aria: ProgressState
};

type PlayerProps = { type?: string, url: string };

class Player extends Component<PlayerProps, PlayerState> {

  audioRef : React.RefObject<HTMLAudioElement>;

  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      aria: {
        value: 0,
        max: 0,
        text: "0:00"
      }
    }
    this.audioRef = React.createRef();
  }

  toReadableTime(time: number) {
    let hours = '';
    let minutes = 0;
    let seconds = 0;
    if(time > 3600) {
      hours = `${("00" + Math.floor(time / 60)).slice(-2)}:`;
      time = time / 60;
    }
    if(time > 60) {
      minutes = Math.floor(time / 60);
      time = time / 60;
    }
    seconds = Math.floor(time);
    return `${hours}${("00" + minutes).slice(-2)}:${("00" + seconds).slice(-2)}`;
  }

  updateAudio(event: SyntheticEvent<HTMLAudioElement>) {
    const { currentTime, duration } = event.currentTarget;
    const text = this.toReadableTime(currentTime)
    this.setState({
      aria: {
        value: Math.floor(currentTime),
        max: duration,
        text,
      }
    })
  }

  play() {
    this.audioRef.current.play();
    this.setState({
      playing: true
    });
  }

  pause() {
    this.audioRef.current.pause();
    this.setState({
      playing: false
    });
  }

  componentDidUpate(prevProps: PlayerProps) {
    if(prevProps.url !== this.props.url) {
      this.play();
    }
  }

  render() {
    const { url } = this.props;
    const { aria } = this.state;
    const updateAudio = this.updateAudio.bind(this);
    const play = this.play.bind(this);
    const pause = this.pause.bind(this);

    if (url) {
      const buttonProps = this.state.playing ? 
        { label: 'Pause', icon: <MdPause />, method: pause } : 
        { label: 'Play', icon: <MdPlayArrow />, method: play };
       

      return <div className="player">
        <audio ref={this.audioRef}
          onLoadedMetadata={updateAudio}
          onTimeUpdate={updateAudio}
          onPause={pause}
          onPlay={play}
          autoPlay={true} src={url}></audio>
        <button aria-label={buttonProps.label} className="btn realestate" onClick={buttonProps.method}>{buttonProps.icon}</button>
        <div className="player-meta">
          {aria.text} 
        </div>
        <ProgressBar aria={aria} audio={this.audioRef} />
      </div>;
    }
    return <></>;
  }
}

export default Player;
