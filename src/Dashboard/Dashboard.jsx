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
    setLevelData(newData);
  };

  return (
    <div>
      <Level updateLevel={updateLevelData} />
      <SetDays updateDays={updateDaysData} />
    </div>
  );
};

export default Dashboard;
