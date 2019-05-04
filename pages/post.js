import Layout from '../components/Layout';
import loadDB from '../lib/load-db';

function Post({ item }) {
  return (
    <Layout>
      <h1>{item.title}</h1>
      <p>
        URL:{' '}
        <a target="_blank" href={item.url}>
          {item.url}
        </a>
      </p>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const id = context.query.id;
  const db = await loadDB();
  let item = await db
    .child('item')
    .child(id)
    .once('value');

  item = item.val();
  return { item };
};

export default Post;
