const THOSE_NUMBERS = ['2', '3', '4'];

export const parseList = (list) => list.map((item) => {
  const { title } = item.direction;
  const numberOfCourses = item.groups.reduce((prev, curr) => {
    /* eslint-disable no-param-reassign */
    prev += curr.items.length;
    return prev;
  }, 0);
  let numberOfCoursesFormatted = numberOfCourses.toString();
  const lastNumber = numberOfCoursesFormatted[numberOfCoursesFormatted.length - 1];
  if (
    THOSE_NUMBERS.includes(lastNumber)
    && !(numberOfCourses % 100 < 19 && numberOfCourses % 100 > 10)) {
    numberOfCoursesFormatted += ' курса';
  } else if (lastNumber === '1' && numberOfCourses % 100 !== 11) {
    numberOfCoursesFormatted += ' курс';
  } else {
    numberOfCoursesFormatted += ' курсов';
  }
  return { title, numberOfCourses: numberOfCoursesFormatted, id: item.direction.id };
});

export const createContainer = (props) => {
  const result = document.createElement(props.type);
  Object.keys(props).forEach((prop) => {
    if (prop !== 'children') result[prop] = props[prop];
    else props[prop].forEach((elem) => result.append(elem));
  });
  return result;
};

export const createDiv = (quantity) => {
  const result = [];
  // eslint-ignore no-plusplus
  for (let i = 0; i < quantity; i += 1) {
    result.push(document.createElement('div'));
  }
  return result;
};
