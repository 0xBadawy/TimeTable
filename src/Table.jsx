import React from "react";

const Table = () => {
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

  const Day = [
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

      {/* Days and Courses */}
      {Day.map((item, i) => (
        <div key={i} className="grid grid-cols-10  min-h-24 border-t-2">
          {/* Day Name */}
          {/* {console.log(rowSpanClac(item))} */}
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

          {/* Grid with empty cells and course spans */}
          {item.course.map((course, idx) => {
            const colSpan = course.End - course.Start; // Calculate span based on start and end

            return (
              <div
                key={idx}
                className={`py-3 text-center border-[1px] rounded-sm bg-[#fcabab] col-span-${colSpan}`}
                style={{
                  gridColumnStart: course.Start + 1, // Shift by 1 to account for day column
                  gridColumnEnd: `span ${colSpan}`,
                }}
              >
                <div className="font-bold">{course.Name}</div>
                <div>
                  {"مجموعة :" + course.Group} {" - "} {course.Doctor}{" "}
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

export default Table;
