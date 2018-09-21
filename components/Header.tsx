import { SFC } from 'react';

export const Header:SFC<{}> = () => <div className="masthead">
  <div className="wrapper">
    <img src="/static/assets/logo.svg" alt="ScriptCast - A Podcast about JavaScript"/>
  </div>
  <style jsx>{`
    .masthead {
      background-image: url(/static/assets/header-240.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      min-height: 30vw;
      max-height: 30vh;
      height: 100vh;
    }

    .wrapper {
      margin: 0 auto;
      max-width: 1000px;
      padding: 2rem;
      position: relative;
      height: 100%;
    }

    @media(min-width: 640px) {
      .masthead {
        background-image: url(/static/assets/header-640.jpg);
      }
    }

    @media(min-width: 800px) {
      .masthead {
        background-image: url(/static/assets/header-800.jpg);
      }
    }

    @media(min-width: 1024px) {
      .masthead {
        background-image: url(/static/assets/header-1024.jpg);
      }
    }

    img {
      min-width: 300px;
      max-width: 500px;
      width: 100%;
      position: absolute; 
      right: 2rem;
      top: 50%;
      transform: translate(0, -50%);
    }
  `}</style>
</div>
