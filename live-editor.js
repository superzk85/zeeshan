function run(){
let htmlcode = document.querySelector(".editor .html-code").value;
let csscode  = "<style>"+document.querySelector(".editor .css-code").value+"</style>";
let jscode  = document.querySelector(".editor .js-code").value;

let output = document.querySelector(".editor #output");

output.contentDocument.Body.innerHTML = htmlCode+cssCode;
output.contentWindow.eval(jsCode);
}
output.querySelector(".editor .html-code").addEventListener("keyup",run);
output.querySelector(".editor .css-code").addEventListener("keyup",run);
output.querySelector(".editor .js-code").addEventListener("keyup",run);
