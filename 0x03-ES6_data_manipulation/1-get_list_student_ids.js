/**
 *a function that returns an empty list if the
 * arrgument is not an array
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
