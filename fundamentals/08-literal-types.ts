const title = "Hello";
const lessonsCount = 10;

//Si la variable només pot tenir uns valors en concret. 
let pageSize: 10 | 15 | 20 = 10;
pageSize = 20;
let courseStatus: "draft" | "published" | "archived" = "draft";
courseStatus = "archived";
//Si poses un valor diferent et marca error. 