import React from "react";
import { useFirebase } from "../Firebase/useFirebase";

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
  const rowSpanClac = (item) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let Max = 0;
    item.course.map((course) => {
      for (let i = course.Start; i < course.End; i++) arr[i] += 1;
    });
    for (let i = 0; i < 10; i++) Max = Math.max(Max, arr[i]);
    return Max;
  };

  return (
    <div className="p-8 min-w-[1000px]" style={{ direction: "rtl" }}>
      {/* Time Header */}
      <div className="grid grid-cols-10 ">
        {Head.map((item, i) => (
          <div
            key={i}
            className="text-center text-xl min-h-12 gap-1  p-2 font-bold bg-[#723333]  text-white border-x-2"
          >
            {item}
          </div>
        ))}
      </div>

      {Day.map((item, i) => (
        <div key={i} className="grid grid-cols-10     min-h-24 border-t-2">
          <div
            className={`border-t-2 row-span-${rowSpanClac(item) + 1}            
             text-center ${
               rowSpanClac(item) == 3
                 ? "pt-24"
                 : rowSpanClac(item) == 2
                 ? "pt-16"
                 : rowSpanClac(item) == 1
                 ? "pt-8"
                 : "pt-32"
             } 
             text-xl font-bold p-2 gap-1  bg-[#723333] text-white border-x-2`}
          >
            {item.day}
          </div>

          {item.course.map((course, idx) => {
            const colSpan = course.End - course.Start;
            return (
              <div
                key={idx}
                className={`py-3 text-center border-[1px] rounded-sm 
                    hover:scale-105 transition-all duration-500
                     bg-[#fcabab99] hover:bg-[#fcabab] col-span-${colSpan}
                        ${
                          course.Type == "lecture"
                            ? "bg-[#fcabab99]"
                            : "bg-[#7a84f999]"
                        }
                    `}
                style={{
                  gridColumnStart: course.Start + 1,
                  gridColumnEnd: `span ${colSpan}`,
                }}
              >
                <div className="font-bold">{course.Name}</div>
                <div>
                  {"مجموعة " + course.Group} {" - "} {course.Doctor}{" "}
                  {course.Hole}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TableData;
