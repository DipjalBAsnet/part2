const AddUser = ({
  handleSubmit,
  handleNameChange,
  newName,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input onChange={handleNameChange} value={newName} /> <br />
        Number:{" "}
        <input value={newNumber} onChange={handleNumberChange} type="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default AddUser;
