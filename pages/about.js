import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import { withAmp, useAmp } from 'next/amp';

export default withAmp(
  function About() {
    const isAmp = useAmp();
    return (
      <Layout>
        <p>
          Welcome to the {isAmp ? 'AMP' : 'normal'} version of the About page!!
        </p>
        <div className="markdown">
          <Markdown
            source={`
This is the About page

Yes. we can have a [Link](/link).
And we can have a title as well.

### This is the title

and here's the content
      `}
          />
        </div>
        <style jsx global>{`
          .markdown {
            font-family: 'Arial';
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
      </Layout>
    );
  },
  { hybrid: true }
);
