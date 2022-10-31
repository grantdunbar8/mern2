import MyCounter from './components/MyCounter'
import MyGithub from './components/MyGithub'

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Grant Dunbar - p73c353</h2><hr />
      <MyCounter adder={1} startNum={77} /><hr />
      <MyCounter adder={2} startNum={45} /><hr />
      <MyGithub /><hr />
    </div>
  );
}

export default App;
