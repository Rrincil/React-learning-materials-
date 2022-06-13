//import logo from './logo.svg';
import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
function App() {
  const elements =  useRoutes(routes);
  return (
      <div className="App">
        {/* 注册路由 */}
        {elements}
      </div>
  );
}

export default App;
