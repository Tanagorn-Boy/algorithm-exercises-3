function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
      ans: Linear Search
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
      ans: เนื่องจากข้อมูลไม่ได้มีการเรียงลำดับจึงใช้ Linear Search
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร     **** ข้อนี้จำไม่ได้ครับต้องเปิดดูใน Learning platform ครับ ****
      ans: O(1) = จำนวนรอบการทำงานจะคงที่ ไม่เปลี่ยนแปลงไปกับขนาดข้อมูล Input
          O(n) = จำนวนรอบการทำงานจะเพิ่มขึ้นเป็นสัดส่วนโดยตรงตามขนาดข้อมูล Input
       
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
