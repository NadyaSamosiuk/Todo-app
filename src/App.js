import Todo from './Components/Todo'
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="app">
      <div className="app__item">   
        <h1 className="app__title">TO DO LIST</h1>
      </div>
      <Todo />
      <div className="footer"></div>
    </div>
  );
}

export default App;
