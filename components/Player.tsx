import { SFC } from 'react';

const Player:SFC<{ type?: string, url: string }> = ({type, url}) => {
  if (url) {
    return <>
    <style jsx>{`
      audio {
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    `}</style>
    <audio autoPlay={true} controls src={url}></audio>
    </>;
  }
  return <></>;
}

export default Player;
