import { Link } from 'react-router';
import styles from './App.scss';

export default ({children}) => (
  <div className={styles.container}>
      <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/page1'>Page1</Link>
          <Link to='/page2'>Page2</Link>
          <Link to='/page3/detail_1'>Page3-1</Link>
          <Link to='/page3/detail_2'>Page3-2</Link>
      </div>
      <div className='content'>
          {children}
      </div>
  </div>
);