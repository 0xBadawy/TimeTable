import { useEffect, useState } from "react";
import Level from "./Level";
import SetDays from "./SetDays";
import { useFirebase } from "../Firebase/useFirebase";
import DataGrid from "./DataGrid";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const { items, addItem, LoadData } = useFirebase();
  const [LevelData, setLevelData] = useState([]);
  const [DayData, setDayData] = useState([]);

  const updateLevelData = (newData) => {
    setLevelData(newData);
  };
  const updateDaysData = (newData) => {
    setDayData(newData);
  };

  useEffect(() => {
    if (LevelData.level && LevelData.department) {
      handelLoad();
    }
  }, [LevelData]);

  const handelSave = () => {
    for (const key in DayData) {
      if (DayData[key] === "" || DayData[key] === 0) {
        toast.error("قم بملئ جميع الحقول");
        return;
      }
    }
    addItem(DayData, LevelData);
    toast.success("تم الحفظ بنجاح");
    handelLoad();
  };

  const handelLoad = () => {
    LoadData(LevelData.level, LevelData.department);
    console.log(items);
  };

  return (
    <div>
      <Level updateLevel={updateLevelData} />
      <SetDays updateDays={updateDaysData} />

      <div className="grid grid-cols-2 w-[500px] mx-auto mt-10">
        <button
          onClick={handelSave}
          className="bg-blue-600 col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out"
        >
          حفظ
        </button>
      </div>
      {/* <div className="grid grid-cols-2 w-[500px] mx-auto mt-10">
        <button
          onClick={handelLoad}
          className="bg-blue-600 col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out"
        >
          Load Data
        </button>
      </div> */}

      {/* DataGrid can be displayed to show the updated items */}
      <DataGrid AllData={items} ParantData={LevelData} />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Dashboard;
