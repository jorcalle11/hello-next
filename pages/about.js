import Markdown from 'react-markdown';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
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
}
