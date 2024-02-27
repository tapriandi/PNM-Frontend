//
const Input = (props) => {
  const { type = "text", label, placeholder, value, onChange } = props;

  return (
    <div>
      <label htmlFor="">{label}</label>
      <br/>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};


export default Input