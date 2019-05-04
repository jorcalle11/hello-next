import Layout from '../components/Layout';
import { withRouter } from 'next/router';

function Post({ router }) {
  return (
    <Layout>
      <h1>{router.query.id}</h1>
    </Layout>
  );
}

export default withRouter(Post);
