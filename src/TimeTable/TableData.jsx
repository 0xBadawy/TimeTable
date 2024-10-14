import React from "react";
import { getPaddingClassAll, SortTableArray } from "../Functions/Functions";
import DayCourse from "./DayCourse";

const TableData = ({ Day }) => {
  const Head = [
    "",
    "9-10",
    "10-11",
    "11-12",
    "12-1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
    "5-6",
  ];

  return (
    <div className="p-8 min-w-[1000px]" style={{ direction: "rtl" }}>
      {/* Time Header */}
      <div className="grid grid-cols-10">
        {Head.map((timeSlot, index) => (
          <div
            key={index}
            className="text-center text-xl min-h-12 gap-1 p-2 font-bold bg-[#723333]   text-white border-x-2"
          >
            {timeSlot}
          </div>
        ))}
      </div>
      {Day.map((item, index) => {
        const sortedCourses = [...item.course].sort(
          (a, b) => a.Start - b.Start
        );
        let DayCourses = SortTableArray(sortedCourses);
        const paddingClass = getPaddingClassAll(item);
        return (
          <div key={index} className="grid grid-cols-10 border-t-2 ">
            <div
              onClick={() => console.log(DayCourses)}
              className={`border-t-2 row-span-7 text-center  ${paddingClass}  text-xl font-bold p-2 gap-1 bg-[#723333] text-white border-x-2`}
            >
              {item.day}
            </div>

            {DayCourses.map((course, idx) => {
              const colSpan = course.End - course.Start;
              return <DayCourse key={idx} Span={colSpan} course={course} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableData;
