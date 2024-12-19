function sortByRating(shops) {
  // Start coding here
  return shops.sort((a, b) => b.rating - a.rating);
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
      ans: จำชื่อไม่ได้ครับ  จำได้ตอนนั้นที่ให้โจทย์หาค่าเรียงลำดับครับโดยใช้ sort 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
      ans: sort เป็นการเรียงลำดับ
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
      ans: O(1) = จำนวนรอบการทำงานจะคงที่ ไม่เปลี่ยนแปลงไปกับขนาดข้อมูล Input
           O(n)  จำนวนรอบการทำงานจะเพิ่มขึ้นเป็นสัดส่วนโดยตรงตามขนาดข้อมูล Input


*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
