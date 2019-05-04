import { withRouter } from 'next/router';
import Layout from '../components/Layout';

function Post(props) {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog content</p>
    </Layout>
  );
}

export default withRouter(Post);
