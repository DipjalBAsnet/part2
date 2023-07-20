const HalfStackTotal = ({ course }) => {
  const halfStackPart = course[0].parts;

  const halfStackTotal = halfStackPart.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return (
    <div>
      <b>Total of {halfStackTotal} Exercises</b> <br />
    </div>
  );
};
export default HalfStackTotal;
