import cn from 'classnames'
import styles from './App.module.css';
import { getApiResource } from '../../utils/network';


function App() {
  return (
    <div className="App">
    <div className= {cn(styles.header)}>Hello</div>
    </div>
  );
}

export default App;
