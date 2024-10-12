import React, { useState } from "react";
import Level from "./Level";
import SetDays from "./SetDays";

const Dashboard = () => {
  const [LevelData, setLevelData] = useState([]);
  const [DayData, setDayData] = useState([]);

  const updateLevelData = (newData) => {
    setLevelData(newData);
  };
  const updateDaysData = (newData) => {
    setDayData(newData);
  };

  const handelSave = () => {
    for (const key in DayData) {
      if (DayData[key] === "" || DayData[key] === 0) {
        alert("Please fill all fields");
        return;
      }
    }
    console.log(LevelData);
    console.log(DayData);
  };
  return (
    <div>
      <Level updateLevel={updateLevelData} />
      <SetDays updateDays={updateDaysData} />

      <div className="grid grid-cols-2 w-[500px] mx-auto mt-10">
        <button
          onClick={handelSave}
          className="bg-blue-600 col-span-2   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out"
        >
          حفظ
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
