import Header from "./Header";
import Content from "./Content";
import NodeTotal from "./total/NodeTotal";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <NodeTotal course={course} />
    </div>
  );
};
export default Course;
