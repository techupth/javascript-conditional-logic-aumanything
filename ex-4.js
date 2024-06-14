//Exercise 4
// Switch Statement
// ให้นำคำตอบจากโจทย์ Exercise 2 มาเขียนใหม่ในรูปแบบ Switch Statement
// let lightBulbStatus = "On";
// if (lightBulbStatus === "On"){
//    console.log("Light bulb is On.");
// } else if (lightBulbStatus === "Broken"){
//    console.log("Light bulb is Broken.");
// } else if (lightBulbStatus ==="Off"){
//    console.log("Light bulb is Off.");
// }else {console.log("Please choose the correct input (On/Off/Broken)");}

//Start coding here
let lightBulbStatus = "TT";
switch (lightBulbStatus){
    case "On":
        console.log("Light bulb is On.");
    break;
    case "Off":
        console.log("Light bulb is Off.");
    break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");    
}