import styles from './Page1.scss';

export default () => (
    <div className={styles.container}>
        <img className="cat" src={require('img/cat2.png')} />
    </div>
);