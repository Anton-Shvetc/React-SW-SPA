import cn from 'classnames'
import styles from './App.module.css';
import PeoplePage from '../PeoplePage';


function App() {
  return (
    <div className="App">
    <div className= {cn(styles.header)}>
      <PeoplePage/>
    </div>
    </div>
  );
}

export default App;
