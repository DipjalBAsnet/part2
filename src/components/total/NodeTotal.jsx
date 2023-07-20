const NodeTotal = ({ course }) => {
  const nodePart = course[1].parts;

  const nodeTotal = nodePart.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <b>Total of {nodeTotal} Exercises</b>
    </div>
  );
};
export default NodeTotal;
