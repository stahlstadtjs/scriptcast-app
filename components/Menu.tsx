import Link from 'next/link';
import { SFC } from 'react';

export const Menu:SFC<{}> = () => <nav>
  <style jsx>{`
    nav {
      background-color: #2f2f2c;
    }

    .nav-wrapper {
      max-width: 1050px;
      margin: 0 auto;
      display: flex;
    }

    a {
      color: white;
      transition: color 100 ease;
      padding: 1rem;
    }

    a:hover {
      color: #f7df1e;
    }
  `}</style>
  <div className="nav-wrapper">
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/people"><a>Guests &amp; Hosts</a></Link>
  </div>
</nav>;
