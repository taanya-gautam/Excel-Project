
for (let i= 0;i <rows ;i++){
    for (let j= 0;j<cols ;j++){
        let cell =document.querySelector(`.cell[rid="${i}"][cid="${j}"]`);
        cell.addEventListener("blur" , (e)=> {
            let address = addressBar.value;
            let [activeCell ,cellProp] = getCellAndCellProp(address);
            let enteredData = activeCell.innerText;

            cellProp.value = enteredData;
        })
    }
}
let formulaBar = document.querySelector(".formula-bar");
formulaBar.addEventListener("keydown" ,(e)=> {
    let inputFormula = formulaBar.value;
    if (e.key === "Enter" && inputFormula){
        let evaluatedValue = evaluateFormula(inputFormula);
        // to update UI and cellprop in DB
        setCellUIAndCellProp(evaluatedValue , inputFormula);

    }
})
function evaluateFormula(formula){
    let encodedFormula = formula.split(" ");
    for (let i = 0; i<encodedFormula.length; i++){
        let asciiValue =encodedFormula[i].charCodeAt(0);
        if (asciiValue >=65 && asciiValue <=90){
            let [cell , cellProp] =  getCellAndCellProp(encodedFormula[i]);
            encodedFormula[i] = cellProp.value;

        }
    }
    let decodedFormula = encodedFormula.join(" ");
    return eval(decodedFormula);
}
function setCellUIAndCellProp(evaluatedValue , formula){
    let address = addressBar.value;
   let [cell , cellProp] = getCellAndCellProp(address);
   //UI update
   cell.innerText = evaluatedValue;
   //DB UPdate
   cellProp.value = evaluatedValue;
   cellProp.formula = formula;

}