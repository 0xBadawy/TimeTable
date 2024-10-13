import React from "react";
import { useFirebase } from "../Firebase/useFirebase";
import toast, { Toaster } from "react-hot-toast";

const DataGrid = (props) => {
  const data = Array.isArray(props.AllData) ? props.AllData : [];

  const { deleteItemById } = useFirebase();

  // Sort the data by the day of the week
  const sortedData = data.sort((a, b) => {
    const daysOfWeek = [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    return daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day);
  });

  const handleDelete = (id) => {
    deleteItemById(id, props.ParantData);
    toast("تم الحذف", {
      icon: "🗑️",
    });
  };

  return (
    <div className="relative w-[70%] mx-auto text-center my-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              م
            </th>
            <th scope="col" className="px-6 py-3">
              نوع النشاط
            </th>
            <th scope="col" className="px-6 py-3">
              يوم
            </th>
            <th scope="col" className="px-6 py-3">
              الدكتور
            </th>
            <th scope="col" className="px-6 py-3">
              القاعة
            </th>
            <th scope="col" className="px-6 py-3">
              الوقت
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">حذف</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.type} {item.subject}
              </td>
              <td className="px-6 py-4">{item.day}</td>
              <td className="px-6 py-4">{item.doctor}</td>
              <td className="px-6 py-4">{item.hall}</td>
              <td className="px-6 py-4">
                {item.start} - {item.end}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default DataGrid;
