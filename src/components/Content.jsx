const Content = ({ parts }) => {
  return (
    <div>
      <p>
        {parts[0].name}: {parts[0].exercises}
      </p>
      <p>
        {parts[1].name}: {parts[1].exercises}
      </p>
      <p>
        {parts[2].name}: {parts[2].exercises}
      </p>
      <p>
        {parts[3].name}: {parts[3].exercises}
      </p>
    </div>
  );
};
export default Content;
