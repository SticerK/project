const TextField = ({ label, name, value, onChange, type, error }) => {
  return (
    <div>
      <label>
        {label}
        <input name={name} value={value} type={type} onChange={onChange} />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
