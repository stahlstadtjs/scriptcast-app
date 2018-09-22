import Link from 'next/link';
import { SFC } from 'react';

export const Menu:SFC<{}> = () => <nav>
  <Link href="/"><a>Home</a></Link>
  <Link href="/about"><a>About</a></Link>
  <style jsx>{`
    nav {
      background-color: #2f2f2c;
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
</nav>;
