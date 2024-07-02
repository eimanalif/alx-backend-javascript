import getListStudents from './0-get_list_students.js'

/**
 * a function that returns an array of objects
 * who are located in a specific city.
 */

export default function getStudentsByLocation(students, city) {
  return students.filter( students => students.location === city);
}
