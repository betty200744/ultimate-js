// type checker只检查label是否是一个object, 且有一个labelName且类型是string
function printLabel(label) {
    console.log(label.labelName);
}
function printLabelInterface(label) {
    console.log(label.labelName);
}
var myObj = { labelName: "betty", labelTag: "tag" };
printLabel(myObj);
printLabel(myObj);
