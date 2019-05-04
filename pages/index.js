import Layout from '../components/Layout';
import Link from 'next/link';

function PostLink({ id, title }) {
  return (
    <li>
      <Link href={`/p/${id}`}>
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
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
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

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with Zeit' }
  ];
}

export default Blog;
