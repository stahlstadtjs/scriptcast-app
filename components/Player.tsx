import { SFC } from 'react';

const Player:SFC<{ type?: string, url: string }> = ({url}) => {
  if (url) {
    return <div>
      <style jsx>{`
        audio {
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      `}</style>
      <audio autoPlay={true} controls src={url}></audio>
    </div>;
  }
  return <></>;
}

export default Player;
