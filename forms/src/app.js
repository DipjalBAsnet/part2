import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
    setNumbers([numbers, newPerson]);
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  };

  const handleNumberChange = (event) => {
    const { value } = event.target;
    setNewNumber(value);
  };

  const duplicatePerson = persons.find((person) => person.name === newName);

  if (duplicatePerson) {
    alert(`${newName} is already added to phonebook`);
    return;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input onChange={handleNameChange} value={newName} /> <br />
          Number:{" "}
          <input
            value={newNumber}
            onChange={handleNumberChange}
            type="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
