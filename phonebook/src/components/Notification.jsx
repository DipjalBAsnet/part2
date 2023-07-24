const Notification = ({ notification, filteredPerson, recentlyAddedName }) => {
  return (
    <div className="notification">
      {filteredPerson && recentlyAddedName.length > 0 && (
        <p>{`Added ${recentlyAddedName} to the Phonebook`}</p>
      )}
      {notification}
    </div>
  );
};
export default Notification;
