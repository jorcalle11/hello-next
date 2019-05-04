import Layout from '../components/Layout';
import Link from 'next/link';
import loadDB from '../lib/load-db';

function PostLink({ id, title }) {
  return (
    <li>
      <Link as={`/p/${id}`} href={`/post?id=${id}`}>
        <a>{title}</a>
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

function Blog({ stories }) {
  return (
    <Layout>
      <h1>Hacker News - Latest</h1>
      <ul>
        {stories.map(story => (
          <PostLink key={story.id} id={story.id} title={story.title} />
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
  const db = await loadDB();
  const ids = await db.child('topstories').once('value');
  const promises = ids
    .val()
    .slice(0, 10)
    .map(id => {
      return db
        .child('item')
        .child(id)
        .once('value');
    });
  const result = await Promise.all(promises);
  const stories = result.map(s => s.val());

  console.log(`Show data fetched. Count: ${stories.length}`);
  return { stories };
};

export default Blog;
