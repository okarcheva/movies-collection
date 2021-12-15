import styles from './Filter.module.css';

const Filter = ({ label, selectedValue, options, onChange }) => {
  const currentValue = selectedValue
    ? options.find(o => o.displayValue === selectedValue.displayValue).displayValue : "";
  const id = `${label}-select`;

  const handleChange = (event) => {
    const option = options.find(o => o.displayValue === event.target.value);
    onChange(option);
  }

  return (
    <div className={styles.filter}>
      <label htmlFor={id}>{label}</label>
      <select name={label} id={id} value={currentValue} onChange={handleChange}>
        <option key="default" value="">Any</option>
        {options.map((option) =>
          (<option key={option.displayValue} value={option.displayValue}>{option.displayValue}</option>))
        }
      </select>
    </div>
  );
};

export default Filter;