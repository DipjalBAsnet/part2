const ShowUser = ({ filteredPerson }) => {
  return (
    <ul>
      {filteredPerson.map((person) => (
        <li key={person.id}>
          {person.name} : {person.number}
        </li>
      ))}
    </ul>
  );
};
export default ShowUser;
