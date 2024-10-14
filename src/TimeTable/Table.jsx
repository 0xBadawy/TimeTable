import React, { useState, useEffect } from "react";
import { useFirebase } from "../Firebase/useFirebase";
import TableData from "./TableData";
import Level from "../Dashboard/Level";

const defaultDay = [
  { day: "السبت", dayen: "saturday", course: [] },
  { day: "الأحد", dayen: "sunday", course: [] },
  { day: "الاثنين", dayen: "monday", course: [] },
  { day: "الثلاثاء", dayen: "tuesday", course: [] },
  { day: "الأربعاء", dayen: "wednesday", course: [] },
  { day: "الخميس", dayen: "thursday", course: [] },
];

const Table = () => {
  const [LevelData, setLevelData] = useState([]);
  const [Day, setDay] = useState(defaultDay);
  const { items, LoadData } = useFirebase();

  const updateLevelData = (newData) => {
    setLevelData(newData);
  };

  const handelLoad = () => {
    setDay(defaultDay);
    LoadData(LevelData.level, LevelData.department);
  };

  useEffect(() => {
    if (LevelData.level && LevelData.department) {
      LoadData(LevelData.level, LevelData.department);
    }
  }, [LevelData]);

  useEffect(() => {
    if (items.length > 0) {
      LoadToTimeTable();
    }
  }, [items]);

  const LoadToTimeTable = () => {
    setDay((prevDays) => {
      const updatedDays = prevDays.map((day) => ({
        ...day,
        course: [],
      }));

      items.forEach((item) => {
        const dayIndex = updatedDays.findIndex((d) => d.day === item.day);
        if (dayIndex !== -1) {
          const itemCourse = {
            Name: item.subject,
            Group: item.group,
            Type: item.type,
            Doctor: item.doctor,
            Hole: item.hall,
            Start: parseInt(item.start),
            End: parseInt(item.end),
          };
          updatedDays[dayIndex] = {
            ...updatedDays[dayIndex],
            course: [...updatedDays[dayIndex].course, itemCourse],
          };
        }
      });
      return updatedDays;
    });
  };

  return (
    <div
      className="p-8 min-w-[1000px] items-center text-center "
      style={{ direction: "rtl" }}
    >
      <Level updateLevel={updateLevelData} />
      <TableData Day={Day} />
    </div>
  );
};

export default Table;
