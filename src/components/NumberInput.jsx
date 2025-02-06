export default function NumberInput({ label, value, onChange }) {
  
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input type="number" required value={value} onChange={handleChange} />
    </p>
  );
}
