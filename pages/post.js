import Layout from '../components/Layout';
import fecth from 'isomorphic-unfetch';

function Post({ show }) {
  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show.image.medium} />
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const id = context.query.id;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show ${show.name}`);
  return { show };
};

export default Post;
