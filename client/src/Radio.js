const Radio = ({ isChecked, handleChange, value, label, name }) => {
  return (
    <div>
      <input
        name={name}
        type='radio'
        value={value}
        checked={isChecked}
        onChange={handleChange}
      /> {label}
    </div>
  );
}

export default Radio;