import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// Method 1 - Page content as a prop
function Layout(props) {
  return (
    <section style={layoutStyle}>
      <Header />
      {props.children}
    </section>
  );
}

// Method 2 - Layout as a Higher Order Component
function withLayout(Page) {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
}

export default Layout;
