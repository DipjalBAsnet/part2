const Total = ({ parts }) => {
  const totalEcericese = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );
  return (
    <div>
      <b>Total of {totalEcericese} Exercises</b>
    </div>
  );
};
export default Total;
