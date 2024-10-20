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
    { name: "معمل الفيزياء", value: "Lab5" },
    { name: "معمل الأليكترونيات", value: "Lab6" },
    { name: "معمل الشبكات", value: "Lab3" },
    { name: "معمل الذكاء الاصطناعي", value: "LabAI" },
  ];
  const handelFromTime = (e) => {
    let start = parseInt(e.target.value, 10);
    if (start < 8) start += 12;
    setData({ ...data, start: start - 8 });
  };
  const handelToTime = (e) => {
    let end = parseInt(e.target.value, 10);
    if (end < 8) end += 12;
    setData({ ...data, end: end - 8 });
  };


  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 w-[1200px] mx-auto mt-10">
        <h2 className="text-xl font-semibold text-center mb-6">إعداد الأيام</h2>
        <div className="grid grid-cols-5 gap-4">
          {/* Subject Input */}
          <div className="col-span-2">
            <label className="block">
              المادة
              <input
                type="text"
                placeholder="المادة"
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                className="bg-gray-100 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </label>
          </div>
          {/* Group Input */}
          <div className="">
            <label className="block">
              المجموعة
              <input
                type="text"
                placeholder="المجموعة"
                onChange={(e) => setData({ ...data, group: e.target.value })}
                className="bg-gray-100 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </label>
          </div>

          {/* Doctor Input */}
          <div className="col-span-2">
            <label className="block">
              الدكتور
              <input
                type="text"
                placeholder="الدكتور"
                onChange={(e) => setData({ ...data, doctor: e.target.value })}
                className="bg-gray-100 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </label>
          </div>

          {/* Day Selection */}
          <label className="block">
            اختر اليوم
            <select
              onChange={(e) => setData({ ...data, day: e.target.value })}
              className="bg-gray-100 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected disabled>
                اختر اليوم
              </option>
              {daysOptions.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          {/* Type Selection */}
          <label className="block">
            اختر النوع
            <select
              onChange={(e) => setData({ ...data, type: e.target.value })}
              className="bg-gray-100 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected disabled>
                اختر النوع
              </option>
              {typeOptions.map((item) => (
                <option key={item.value} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          {/* Hall Selection */}
          <label className="block">
            اختر القاعة / المعمل
            <select
              onChange={(e) => setData({ ...data, hall: e.target.value })}
              className="bg-gray-100 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected disabled>
                اختر القاعة / المعمل
              </option>
              {hallOptions.map((item) => (
                <option key={item.value} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          {/* Start Input */}
          <label className="block">
            من الساعة
            <input
              type="text"
              placeholder="من الساعة"
              onChange={handelFromTime}
              className="bg-gray-100 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
          </label>

          {/* End Input */}
          <label className="block">
            الى الساعة
            <input
              type="text"
              placeholder="الى الساعة"
              onChange={handelToTime}
              className="bg-gray-100 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            />
          </label>

          {/* Save Button */}
        </div>
      </div>
    </div>
  );
};

export default SetDays;
