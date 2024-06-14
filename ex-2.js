// //Exercise 2

// ให้นำคำตอบจากโจทย์ Exercise 1 มาเขียนใหม่ในรูปแบบ Else-If Statement และเพิ่มคำสั่งต่อไปนี้
// ถ้าสถานะของหลอดไฟ (lightBulbStatus) เป็น “Broken"ให้โปรแกรมหลอดไฟแสดงข้อความว่า 
// "Light bulb is Broken." ออกมาทางหน้าจอด้วย console.log()
// ให้ Reassign ตัว Value ของ lightBulbStatus เพื่อให้แสดงผลลัพธ์ทาง console.log() 
// ออกมาเป็น "Light bulb is Broken."
// กรณีที่ไม่เข้าเงื่อนไขใด ๆ เลยให้โปรแกรมหลอดไฟแสดงข้อความว่า 
// “Please choose the correct input (On/Off/Broken)” ออกมาทางหน้าจอด้วย console.log()

 let lightBulbStatus = "On";
 if (lightBulbStatus === "On"){
    console.log("Light bulb is On.");
} else if (lightBulbStatus === "Broken"){
    console.log("Light bulb is Broken.");
} else if (lightBulbStatus ==="Off"){
    console.log("Light bulb is Off.");
}else {console.log("Please choose the correct input (On/Off/Broken)");}

// Start coding here.
