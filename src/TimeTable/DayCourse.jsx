/* eslint-disable react/prop-types */
const getCourseBackground = (type) => {
  return type !== "محاضرة" ? "bg-[#fcabab99]" : "bg-[#d06d6d]";
};

const DayCourse = ({ course }) => {
  const colSpan = course.End - course.Start;

  return (
    <div
      onClick={() => console.log(course)}
      className={`py-3 text-center border-[1px]  hover:scale-105 transition-all duration-500 col-span-${colSpan} ${getCourseBackground(
        course.Type
      )}`}
      style={{
        gridColumnStart: course.Start + 1,
        gridColumnEnd: `span ${colSpan}`,
      }}
    >
      <div className="font-bold">{course.Name}</div>
      <div>{`مجموعة ${course.Group} - ${course.Doctor} ${course.Hole}`}</div>
    </div>
  );
};

export default DayCourse;
