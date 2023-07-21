const FilteredInput = ({ value, onChange }) => {
  return (
    <div>
      filter with shown:
      <input value={value} onChange={onChange} />
    </div>
  );
};
export default FilteredInput;
