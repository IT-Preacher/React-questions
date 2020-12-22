import './App.css';
import Layout from './hoc/Layout/Layout.js'

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Layout>
        <div style={{width: 400, border: '1px solid black'}}>
          <h1>Children element in Layout</h1>
        </div>
      </Layout>
    </div>
  );
}

export default App;
