import React, { useState } from "react";
import { useFirebase } from "../Firebase/useFirebase";
import TableData from "./TableData";
import Level from "../Dashboard/Level";

const Table = () => {
  const [LevelData, setLevelData] = useState([]);
  const TimeTableData = [];

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
          Name: "رياضيات 22",
          Group: "أ",
          Type: "lect ure",
          Doctor: "د. سميث",
          Hole: "قاعة 101",
          Start: 7,
          End: 9,
        },
        {
          Name: "رياضيات 22",
          Group: "أ",
          Type: "lect ure",
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
          Name: "إحصاء 201",
          Group: "ج",
          Type: "lecture",
          Doctor: "د. محمد",
          Hole: "قاعة 204",
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

  const { items, addItem, LoadData } = useFirebase();

  const updateLevelData = (newData) => {
    setLevelData(newData);
  };
  const handelLoad = () => {
    console.log(LevelData);
    LoadData(LevelData.level, LevelData.department);
    // console.log(items);
    LoadToTimeTabel();
  };

  const LoadToTimeTabel = () => {
    items.map((item) => {
      console.log(item);
      const dayIndex = Day.findIndex((day) => day.day === item.day);
      const courseIndex = Day[dayIndex].course.findIndex(
        (c) => c.Name === item.Name
      );
      if (courseIndex === -1) {
        Day[dayIndex].course.push({
          Name: item.Name,
          Group: item.Group,
          Type: item.Type,
          Doctor: item.Doctor,
          Hole: item.Hole,
          Start: item.Start,
          End: item.End,
        });
      }

      console.log(Day);
      
    });
    console.log("LoadToTimeTabel");
    console.log(items);
  };

  return (
    <div className="p-8 min-w-[1000px]" style={{ direction: "rtl" }}>
      <Level updateLevel={updateLevelData} />
      <button
        onClick={handelLoad}
        className="bg-blue-600 col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out"
      >
        حفظ
      </button>

      <TableData Day={Day} />
    </div>
  );
};

export default Table;

//  const dayIndex = Day.findIndex((day) => day.day === course.day);
//  const courseIndex = Day[dayIndex].course.findIndex(
//    (c) => c.Name === course.Name
//  );
//  if (courseIndex === -1) {
//    Day[dayIndex].course.push({
//      Name: course.Name,
//      Group: course.Group,
//      Type: course.Type,
//      Doctor: course.Doctor,
//      Hole: course.Hole,
//      Start: course.Start,
//      End: course.End,
//    });
//  }
