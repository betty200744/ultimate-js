// type checker只检查label是否是一个object, 且有一个labelName且类型是string
function printLabel(label: { labelName: string }) {
    console.log(label.labelName);
}
interface Labeler {
    labelName: string
}
function printLabelInterface(label: Labeler) {
    console.log(label.labelName)
}
let myObj = {labelName: "betty", labelTag: "tag"};
printLabel(myObj);
printLabel(myObj);

