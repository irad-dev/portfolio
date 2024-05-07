import styles from './FirstView.module.scss';

export const FirstView = () => {
  return (
    <div className={styles.container}>
      <p className={styles.catchCopy}>
        次のステップへの
        <span className={styles.catchCopyHighlight}>キッカケ</span>を与える
      </p>
    </div>
  );
};
