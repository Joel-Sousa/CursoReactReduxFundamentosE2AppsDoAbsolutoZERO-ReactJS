import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';
import {tst} from '../util/data'
import {BrowserRouter as Router, } from 'react-router-dom';

function App() {
    
  return (
    <div className="App">
        <Router>
            <Menu/>
            <Content/>
        </Router>
    </div>
  );
}
export default App;
