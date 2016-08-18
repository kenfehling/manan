import styles from './Page2.scss';

export default () => (
    <div className={styles.container}>
        <img className="cat" src={require('img/cat3.jpg')} />
    </div>
);