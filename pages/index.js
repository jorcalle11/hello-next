import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function PostLink({ id, name }) {
  return (
    <li>
      <Link as={`/p/${id}`} href={`/post?id=${id}`}>
        <a>{name}</a>
      </Link>
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
