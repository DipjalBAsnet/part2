const ShowUser = ({ filteredPerson, handleRemove }) => {
  return (
    <div>
      {filteredPerson.map((person) => (
        <ul key={person.id}>
          <li>
            {person.name} : {person.number}{" "}
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ShowUser;
