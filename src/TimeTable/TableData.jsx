import React from "react";

const TableData = ({ Day }) => {
  const Daya = [
    {
      day: "السبت",
      course: [
        {
          Name: "كيمياء 101",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. أحمد",
          Hole: "قاعة 202",
          Start: 2,
          End: 4,
        },
        {
          Name: "كيمياء 101",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. أحمد",
          Hole: "قاعة 202",
          Start: 2,
          End: 4,
        },

        {
          Name: "كيمياء 101",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. أحمد",
          Hole: "قاعة 202",
          Start: 2,
          End: 4,
        },

        {
          Name: "رياضيات 22",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. سميث",
          Hole: "قاعة 101",
          Start: 7,
          End: 9,
        },
      ],
    },
    {
      day: "الأحد",
      course: [
        {
          Name: "فيزياء 102",
          Group: "أ",
          Type: "معمل",
          Doctor: "د. علي",
          Hole: "معمل 1",
          Start: 1,
          End: 3,
        },
        {
          Name: "برمجة 101",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. خالد",
          Hole: "قاعة 102",
          Start: 4,
          End: 6,
        },
      ],
    },
    {
      day: "الاثنين",
      course: [
        {
          Name: "رياضيات 101",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. ألين",
          Hole: "قاعة 102",
          Start: 1,
          End: 3,
        },
        {
          Name: "إحصاء 201",
          Group: "ج",
          Type: "lecture",
          Doctor: "د. محمد",
          Hole: "قاعة 204",
          Start: 4,
          End: 6,
        },
        {
          Name: "إحصاء 201",
          Group: "ج",
          Type: "lecture",
          Doctor: "د. محمد",
          Hole: "قاعة 204",
          Start: 4,
          End: 6,
        },
        {
          Name: "إحصاء 201",
          Group: "ج",
          Type: "lecture",
          Doctor: "د. محمد",
          Hole: "قاعة 204",
          Start: 4,
          End: 6,
        },
      ],
    },
    {
      day: "الثلاثاء",
      course: [
        {
          Name: "علوم الحاسوب",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. ليلى",
          Hole: "قاعة 105",
          Start: 2,
          End: 4,
        },
        {
          Name: "كيمياء 102",
          Group: "ب",
          Type: "معمل",
          Doctor: "د. مروان",
          Hole: "معمل 2",
          Start: 5,
          End: 7,
        },
        {
          Name: "علوم الحاسوب",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. ليلى",
          Hole: "قاعة 105",
          Start: 2,
          End: 4,
        },
        {
          Name: "علوم الحاسوب",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. ليلى",
          Hole: "قاعة 105",
          Start: 2,
          End: 4,
        },
        {
          Name: "علوم الحاسوب",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. ليلى",
          Hole: "قاعة 105",
          Start: 2,
          End: 4,
        },
      ],
    },
    {
      day: "الأربعاء",
      course: [
        {
          Name: "فيزياء 103",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. سامي",
          Hole: "قاعة 106",
          Start: 1,
          End: 3,
        },
        {
          Name: "فيزياء 103",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. سامي",
          Hole: "قاعة 106",
          Start: 1,
          End: 3,
        },
        {
          Name: "اللغة العربية",
          Group: "ج",
          Type: "lecture",
          Doctor: "د. ندى",
          Hole: "قاعة 107",
          Start: 4,
          End: 6,
        },
      ],
    },
    {
      day: "الخميس",
      course: [
        {
          Name: "رياضيات 103",
          Group: "أ",
          Type: "lecture",
          Doctor: "د. سميث",
          Hole: "قاعة 101",
          Start: 1,
          End: 3,
        },
        {
          Name: "إدارة الأعمال",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. ياسر",
          Hole: "قاعة 202",
          Start: 4,
          End: 6,
        },
        {
          Name: "إدارة الأعمال",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. ياسر",
          Hole: "قاعة 202",
          Start: 4,
          End: 6,
        },
        {
          Name: "إدارة الأعمال",
          Group: "ب",
          Type: "lecture",
          Doctor: "د. ياسر",
          Hole: "قاعة 202",
          Start: 4,
          End: 6,
        },
      ],
    },
  ];

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
  let NewArray = [];

  // Calculate the maximum row span based on course timings
  const rowSpanClac = (item) => {
    const arr = Array(10).fill(0);
    let maxSpan = 0;
    item.course.forEach((course) => {
      for (let i = course.Start; i < course.End; i++) {
        arr[i] += 1;
      }
    });
    arr.forEach((count) => {
      maxSpan = Math.max(maxSpan, count);
    });

    return maxSpan;
  };

  // Determine padding class based on row span
  const getPaddingClass = (rowSpan) => {
    switch (rowSpan) {
      case 3:
        return "pt-24";
      case 2:
        return "pt-16";
      case 1:
      case 0:
        return "pt-8";
      default:
        return "pt-32";
    }
  };

  // Get the background color for the course type
  const getCourseBackground = (type) => {
    return type !== "محاضرة" ? "bg-[#fcabab99]" : "bg-[#d06d6d]";
  };

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

      {/* Course Data for Each Day */}
      {Day.map((item, index) => {
        // Sort the courses by their Start time

        console.log(item.course);

        const sortedCourses = [...item.course].sort(
          (a, b) => a.Start - b.Start
        );

        {
          NewArray = [];
          while (sortedCourses.length > 0) {
            for (let i = 1; i < 9; i++) {
              for (let x = 0; x < sortedCourses.length; x++) {
                if (sortedCourses[x].Start === i) {
                  NewArray.push(sortedCourses[x]);
                  i = sortedCourses[x].End - 1;
                  sortedCourses.splice(x, 1);
                }
              }
            }
          }
        }

        const rowSpan = rowSpanClac(item);
        const paddingClass = getPaddingClass(rowSpan);

        return (
          <div key={index} className="grid grid-cols-10 border-t-2 ">
            {/* Day Label */}
            <div
              className={`border-t-2 row-span-7
                         text-center  ${paddingClass}  text-xl font-bold p-2 gap-1 bg-[#723333] text-white border-x-2`}
            >
              {item.day}
            </div>

            {NewArray.map((course, idx) => {
              const colSpan = course.End - course.Start;
              return (
                <div
                  key={idx}
                  className={`py-3 text-center border-[1px] rounded-sm hover:scale-105 transition-all duration-500 col-span-${colSpan} ${getCourseBackground(
                    course.Type
                  )}`}
                  style={{
                    gridColumnStart: course.Start + 1,
                    gridColumnEnd: `span ${colSpan}`,
                  }}
                >
                  <div className="font-bold">{course.Name}</div>
                  <div>
                    {`مجموعة ${course.Group} - ${course.Doctor} ${course.Hole}`}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableData;
