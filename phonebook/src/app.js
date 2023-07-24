import { useState, useEffect } from "react";
import FilteredInput from "./components/filterInput";
import ShowUser from "./components/showUser";
import AddUser from "./components/addUser";
import noteService from "./services/notes";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterItem, setFilterItem] = useState("");
  const [notification, setNotification] = useState();
  const [recentlyAddedName, setrecentlyAddedName] = useState("");

  useEffect(() => {
    noteService
      .getAll()
      .then((response) => {
        console.log("data fetched", response);
        setPersons(response);
      })
      .catch((error) => {
        console.log("error while fetching the data", error);
      });
  }, []);

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

    noteService
      .create(newPerson)
      .then((response) => {
        console.log("response from server after creating", response);
        setPersons([...persons, response]);
        setNewName("");
        setNewNumber("");
        setrecentlyAddedName(newPerson.name);
      })
      .catch((error) => {
        console.log("error while creating a new person", error);
      });
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

  const filteredPerson = persons.filter((list) => {
    const personsList = list.name ? list.name.toLowerCase() : "";
    const filteredPerson = filterItem ? filterItem.toLowerCase() : "";
    return personsList.includes(filteredPerson);
  });

  const handleRemove = async (id) => {
    const personToRemove = persons.find((person) => person.id === id);
    const confirmDeletion = window.confirm(
      `Do you want to remove ${personToRemove.name} ? `
    );

    if (confirmDeletion) {
      try {
        await noteService.remove(id).then(() => {
          console.log("succesfully deleted");
          setPersons(persons.filter((person) => person.id !== id));
        });
      } catch (error) {
        console.log("error while deleting the user", error);
      }
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification
        notification={notification}
        filteredPerson={filteredPerson}
        recentlyAddedName={recentlyAddedName}
      />
      <br />
      <FilteredInput value={filterItem} onChange={() => handleFilterChange} />
      <h2>add a new</h2>
      <AddUser
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <ShowUser filteredPerson={filteredPerson} handleRemove={handleRemove} />
    </div>
  );
};
export default App;
