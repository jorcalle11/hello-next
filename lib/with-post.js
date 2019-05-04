import React from 'react';
import Layout from '../components/Layout';
import marked from 'marked';
import dynamic from 'next/dynamic';
const Highlight = dynamic(import('react-highlight'));

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

export default function withPost(options) {
  return class PostPage extends React.Component {
    renderMarkdown() {
      // If a code snippet contains in the markdown content
      // then use Highlight component
      if (/~~~/.test(options.content)) {
        return (
          <div>
            <Highlight innerHTML>{marked(options.content)}</Highlight>
          </div>
        );
      }

      // If not, simply render the generated HTML from markdown
      return (
        <div dangerouslySetInnerHTML={{ __html: marked(options.content) }} />
      );
    }

    render() {
      return (
        <Layout>
          <h1>{options.title}</h1>
          {this.renderMarkdown()}
        </Layout>
      );
    }
  };
}
