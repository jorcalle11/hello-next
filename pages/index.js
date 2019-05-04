import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function PostLink({ id, name }) {
  return (
    <li>
      <Link as={`/p/${id}`} href={`/post?id=${id}`}>
        <a>{name}</a>
      </Link>
      <style jsx>
        {`
          li {
            list-style-type: none !important;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
    </li>
  );
}

function Blog({ shows }) {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <PostLink key={show.id} id={show.id} name={show.name} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  const shows = data.map(i => i.show);
  console.log(`Show data fetched. Count: ${data.length}`);
  return { shows };
};

export default Blog;
