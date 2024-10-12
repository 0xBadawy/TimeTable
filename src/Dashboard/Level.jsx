import React, { useEffect, useState } from "react";

const Level = ({ updateLevel }) => {
  const [Data, setData] = useState({ level: "", department: "" });

  const updateLevelData = (newData) => {
    updateLevel(newData);
    console.log(newData);
  };

  useEffect(() => {
    updateLevelData(Data);
  }, [Data]);

  const [level, setLevel] = useState([
    {
      id: 1,
      name: "المستوى الاول",
      value: "level1",
      department: [{ id: 1, name: "عام", value: "general" }],
    },
    {
      id: 2,
      name: "المستوى الثاني",
      value: "level2",
      department: [{ id: 1, name: "عام", value: "general" }],
    },

    {
      id: 3,
      name: "المستوى الثالث",
      value: "level3",
      department: [
        { id: 1, name: "نظم المعلومات", value: "is" },
        { id: 2, name: "علوم الحاسب", value: "cs" },
        { id: 3, name: "تكنولوجيا المعلومات", value: "it" },
      ],
    },
    {
      id: 4,
      name: "المستوى الرابع",
      value: "level4",
      department: [
        { id: 1, name: "نظم المعلومات", value: "is" },
        { id: 2, name: "علوم الحاسب", value: "cs" },
        { id: 3, name: "تكنولوجيا المعلومات", value: "it" },
      ],
    },
  ]);

  return (
    <div>
      <div className="grid grid-cols-2 w-[500px] mx-auto mt-10">
        <select
          id="countries"
          onChange={(e) => {
            setData({ ...Data, level: e.target.value });
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52"
        >
          <option selected>المستوى الدراسي</option>
          {level.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <select
          id="countries"
          onChange={(e) => {
            setData({ ...Data, department: e.target.value });
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52"
        >
          <option value="">القسم</option>{" "}
          {level.map(
            (item) =>
              item.value === Data.level &&
              item.department.map((dep) => (
                <option key={dep.id} value={dep.value}>
                  {dep.name}
                </option>
              ))
          )}
        </select>
      </div>
    </div>
  );
};

export default Level;
