import styles from './HomePage.scss';

export default () => (
    <div className={styles.container}>
        <img className="cat" src={require('img/cat1.jpg')} />
    </div>
);