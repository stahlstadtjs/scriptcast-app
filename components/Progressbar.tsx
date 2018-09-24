import { Component, MouseEvent, KeyboardEvent } from "react";

import '../styles/Progressbar.css';

export type ProgressState = {
  max: number,
  value: number,
  text: string;
}

export class ProgressBar extends Component<{ aria: ProgressState, audio: React.RefObject<HTMLAudioElement> }> {
  constructor(props) {
    super(props);
  }

  progressWidth(value: number, max: number) {
    return `${(value * 100) / max}%`;
  }

  trackClick(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    const { current } = this.props.audio;
    const x = e.pageX - e.currentTarget.offsetLeft;
    if (x > 16 && x < e.currentTarget.offsetWidth - 16) {
      const val = (x - 16) / (e.currentTarget.offsetWidth - 32);
      current.currentTime = val * current.duration;
    }
  }

  trackPress(e: KeyboardEvent<HTMLDivElement>) {
    if(e.keyCode === 38 || e.keyCode === 39) {
      this.props.audio.current.currentTime += 10;
    } else if(e.keyCode === 37 || e.keyCode === 40) {
      this.props.audio.current.currentTime -= 10;
    }
  }

  render() {
    const { aria } = this.props;
    const trackClick = this.trackClick.bind(this);
    const trackPress = this.trackPress.bind(this);
    return <div className="progressbar" onClick={trackClick} onKeyDown={trackPress} tabIndex={0}>
      <div className="progress-track"
        aria-valuemax={aria.max}
        aria-valuenow={aria.value}
        aria-valuetext={aria.text}
        role="progressbar"
        style={{
          width: this.progressWidth(aria.value, aria.max)
        }}>
      </div>
    </div>
  }
}

