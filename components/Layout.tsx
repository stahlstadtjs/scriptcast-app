import { SFC } from 'react';

const Layout:SFC<{}> = ({ children }) => {
  return <>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        line-height: 1.5em;
        position: relative;
      }

      *, *:after, *:before {
       box-sizing: border-box;
      }

      main {
        margin: 1rem auto;
        max-width: 1000px;
        padding: 2rem;
      }

      h1, h2 {
        line-height: 1.2em;
        margin-top: 0;
      }

      a {
        text-decoration: none;
      }

      .visually-hidden {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
      }
    `}</style>
    <main>
      {children}
    </main>
  </>
}

export default Layout;
