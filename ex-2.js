function findBookIndex(books, searchBook) {
  // Start coding here
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchBook) {
      return 2;
    }
  }
  return -1;
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
      ans:  Binary Search   แต่เนื่องจากจำวิธีเขียนไม่ได้จึงใช้ Linear Search แทน
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
      ans: เนื่องจากข้อมูลการเรียงลำดับไว้แล้ว
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
      ans: O(1) = จำนวนรอบการทำงานจะคงที่ ไม่เปลี่ยนแปลงไปกับขนาดข้อมูล Input
            O(n) = จำนวนรอบการทำงานจะเพิ่มขึ้นเป็นสัดส่วนโดยตรงตามขนาดข้อมูล Input
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
