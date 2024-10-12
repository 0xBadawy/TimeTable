import React from "react";

const DataGrid = (props) => {
  const data = Array.isArray(props.AllData) ? props.AllData : [];
//   console.log("data");
//   console.log(data[1]);
  return (
    <div>
      <div className="flex flex-col space-y-2 mx-32 mt-9">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md w-full rounded-lg p-4 border border-gray-300 flex justify-between"
          >
            <p className="text-gray-700">
              <span className="font-bold">المادة:</span> {item.subject}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">اليوم:</span> {item.day}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">النوع:</span> {item.type}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">المجموعة:</span> {item.group}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">الدكتور:</span> {item.doctor}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">القاعة:</span> {item.hall}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">الوقت </span> {item.start}
              <span className="font-bold">: </span> {item.end}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">delet</span>
            </p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default DataGrid;
