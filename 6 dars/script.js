const myArray = ["element1", "element2", "element3", "element4"];
console.log("Array uzunligi:", myArray.length);
alert("Array uzunligi: " + myArray.length);
const userResponse = confirm("Arraydan bitta elementni o'chirishni xohlaysizmi?");
if (userResponse) {
  myArray.pop();
  console.log("Element o'chirildi. Yangi array:", myArray);
} else {
  console.log("Array o'zgarmadi:", myArray);
}