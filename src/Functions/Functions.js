export const SortTableArray = (Courses) => {
  const NewArray = [];
  while (Courses.length > 0) {
    for (let i = 1; i < 9; i++) {
      for (let x = 0; x < Courses.length; x++) {
        if (Courses[x].Start === i) {
          NewArray.push(Courses[x]);
          i = Courses[x].End - 1;
          Courses.splice(x, 1);
        }
      }
    }
  }

  return NewArray;
};

const rowSpanClac = (item) => {
  const arr = Array(10).fill(0);
  let maxSpan = 0;
  item.course.forEach((course) => {
    for (let i = course.Start; i < course.End; i++) {
      arr[i] += 1;
    }
  });
  arr.forEach((count) => {
    maxSpan = Math.max(maxSpan, count);
  });

  return maxSpan;
};

const getPaddingClass = (rowSpan) => {
  switch (rowSpan) {
    case 3:
      return "pt-24";
    case 2:
      return "pt-16";
    case 1:
      return "pt-6";
    case 0:
      return "pt-4";
    default:
      return "pt-32";
  }
};

export const getPaddingClassAll = (item) => {
  const rowSpan = rowSpanClac(item);
  return getPaddingClass(rowSpan);
};
