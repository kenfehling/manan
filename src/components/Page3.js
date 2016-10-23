import styles from './Page3.scss';

export default ({children}) => (
    <div className={styles.container}>
        <div className="title">Page 3</div>
        {children}
    </div>
);