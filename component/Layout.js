import Link from 'next/Link';
import Head from 'next/head';

const Layout = ({children,title}) => (
  <div className={"root"}>
      <Head>
          <title>SESA</title>
          <link href={"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"}/>
      </Head>
      <header>
            <Link href={"/index"}><a>Home</a></Link>
            <Link href={"/about"}><a>About</a></Link>
            <Link href={"/who"}><a>Who</a></Link>

      </header>

      <h1>{title}</h1>
      {children}

      <footer>
            &copy; {new Date().getFullYear()}
      </footer>

        <style jsx>{`
        
            .root{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            
            header{
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 1em;
                font-size: 1.5rem;
                background: indigo;
            }
            
            header a{
               color: darkgray;
               text-decoration: none;
               padding: 0 1em;
            }
            header a:hover{
                font-weight: bold;
                color: lightgray;
            }
            footer{
                oadiing: 1em;
            }
        `}
        </style>

      <style global jsx>{`
            body{
                marging: 0;
            }
      `}

      </style>
  </div>
);

export default Layout;
