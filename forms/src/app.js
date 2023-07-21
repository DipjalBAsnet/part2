import { useState } from "react";
import FilteredInput from "./components/filterInput";
import ShowUser from "./components/showUser";
import AddUser from "./components/addUser";

const App = () => {
  const personsList = [
    { name: "Dipjal", number: 9817986233, id: 1 },
    { name: "bikash", number: 981798099, id: 2 },
    { name: "bibek", number: 9806026421, id: 3 },
    { name: "kushal", number: 9842718805, id: 4 },
  ];

  const [persons, setPersons] = useState(personsList);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterItem, setFilterItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const duplicatePerson = persons.find((person) => person.name === newName);

    if (duplicatePerson) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };
    setPersons([...persons, newPerson]);
    setNewName("");
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

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterItem(value);
  };

  const filteredPerson = persons.filter((list) =>
    list.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <FilteredInput value={filterItem} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddUser
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <ShowUser filteredPerson={filteredPerson} />
    </div>
  );
};
export default App;
