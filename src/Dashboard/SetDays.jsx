import React, { useEffect, useState } from "react";

const SetDays = ({ updateDays }) => {
  const [data, setData] = useState({
    day: "",
    type: "",
    group: "",
    subject: "",
    doctor: "",
    hall: "",
    start: 0,
    end: 0,
  });

  const [AllData, setAllData] = useState([]);

  const updateLevelData = (newData) => {
    updateDays(newData);
    console.log(newData);
  };

  useEffect(() => {
    updateLevelData(data);
  }, [data]);

  const daysOptions = [
    { name: "السبت", value: "saturday" },
    { name: "الأحد", value: "sunday" },
    { name: "الاثنين", value: "monday" },
    { name: "الثلاثاء", value: "tuesday" },
    { name: "الأربعاء", value: "wednesday" },
    { name: "الخميس", value: "thursday" },
  ];

  const typeOptions = [
    { name: "محاضرة", value: "lecture" },
    { name: "سكشن", value: "section" },
  ];

  const hallOptions = [
    { name: "قاعة 1", value: "hall1" },
    { name: "قاعة 2", value: "hall2" },
    { name: "قاعة 3", value: "hall3" },
    { name: "قاعة 4", value: "hall4" },
    { name: "مدرج أ.د/حمدي حسين", value: "hall5" },
    { name: "معمل 1A", value: "Lab1A" },
    { name: "معمل 1B", value: "Lab1B" },
    { name: "معمل 2", value: "Lab2" },
    { name: "معمل الشبكات", value: "Lab3" },
    { name: "معمل الذكاء الاصطناعي", value: "LabAI" },
  ];

  const handelSave = () => {
    for (const key in data) {
      if (data[key] === "" || data[key] === 0) {
        alert("Please fill all fields");
        return;
      }
    }
    setAllData([...AllData, data]);
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 w-[900px] mx-auto mt-10">
        <h2 className="text-xl font-semibold text-center mb-6">إعداد الأيام</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Day Selection */}
          <select
            onChange={(e) => setData({ ...data, day: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected disabled>
              اختر اليوم
            </option>
            {daysOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Type Selection */}
          <select
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected disabled>
              اختر النوع
            </option>
            {typeOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Group Input */}
          <input
            type="text"
            placeholder="المجموعة"
            onChange={(e) => setData({ ...data, group: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />

          {/* Subject Input */}
          <input
            type="text"
            placeholder="المادة"
            onChange={(e) => setData({ ...data, subject: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />

          {/* Doctor Input */}
          <input
            type="text"
            placeholder="الدكتور"
            onChange={(e) => setData({ ...data, doctor: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />

          {/* Hall Selection */}
          <select
            onChange={(e) => setData({ ...data, hall: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected disabled>
              اختر القاعة / المعمل
            </option>
            {hallOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Doctor Input */}
          <input
            type="text"
            placeholder="من الساعة"
            onChange={(e) => setData({ ...data, start: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />
          <input
            type="text"
            placeholder="الى الساعة"
            onChange={(e) => setData({ ...data, end: e.target.value })}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />

          {/* Save Button */}
          <div className="col-span-2">
            <button
              onClick={handelSave}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mx-32 mt-9">
        {AllData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-300 flex justify-between"
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
    </div>
  );
};

export default SetDays;
