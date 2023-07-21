const Total = ({ course }) => {
  const halfStackPart = course[0].parts;
  const nodePart = course[1].parts;

  const halfStackTotal = halfStackPart.reduce(
    (total, part) => total + part.exercises,
    0
  );

  const nodeTotal = nodePart.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <b>Total of {halfStackTotal} Exercises</b> <br />
      <b>Total of {nodeTotal} Exercises</b>
    </div>
  );
};
export default Total;
