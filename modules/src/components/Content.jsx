import HalfStackTotal from "./total/HalfStackTotal";

const Content = ({ course }) => {
  let halfStackPart = course[0].parts;
  let nodePart = course[1].parts;
  return (
    <div>
      {halfStackPart.map((part) => {
        return (
          <div key={part.id}>
            {part.name} : {part.exercises}
          </div>
        );
      })}
      <HalfStackTotal course={course} />
      <h2>{course[1].name}</h2>
      {nodePart.map((part) => {
        return (
          <div key={part.id}>
            {part.name} : {part.exercises}
          </div>
        );
      })}
      {/* <p>
        {course[0].parts[0].name}: {course[0].parts[0].exercises}
      </p>
      <p>
        {course[0].parts[1].name}: {course[0].parts[1].exercises}
      </p>
      <p>
        {course[0].parts[2].name}: {course[0].parts[2].exercises}
      </p>
      <p>
        {course[0].parts[3].name}: {course[0].parts[3].exercises}
      </p> */}
    </div>
  );
};
export default Content;
