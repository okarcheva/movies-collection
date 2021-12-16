import styles from './MetaDataItem.module.css';

const MetaDataItem = ({ label, value }) => {
  return (
    <div className={styles.metadataItem}>
      <p>{`${label}:`}</p>
      <p>{value}</p>
    </div>
  )
};

export default MetaDataItem;