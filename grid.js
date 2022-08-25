
let rows = 100;
let cols = 26;
let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i= 0; i < rows; i++){
    let addressCol = document.createElement("Div");
    addressCol.setAttribute("class" ,"address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

for (let i= 0; i < cols; i++){
    let addressRow = document.createElement("Div");
    addressRow.setAttribute("class" ,"address-row");
    addressRow.innerText = String.fromCharCode(65+i);        //to change number into character
    addressRowCont.appendChild(addressRow);
}
for (let i= 0; i<rows;i++){
    let rowCont = document.createElement("Div");
    rowCont.setAttribute("class" ,"row-cont")
    for(let j=0; j<cols; j++){
        let cell = document.createElement("Div");
        cell.setAttribute("class" ,"cell");
        cell.setAttribute("contenteditable" ,"true");
        cell.setAttribute("spellcheck" ,"false");
        //attribute for cell  & storege identification
        cell.setAttribute("rid" ,i);
        cell.setAttribute("cid" ,j);

        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell,i,j)

    }
    cellsCont.appendChild(rowCont);
}
function  addListenerForAddressBarDisplay(cell,i,j){
    cell.addEventListener("click" ,(e) =>{
        let rowID = i+1;
        let colID = String.fromCharCode(65 + j);
        addressBar.value = `${colID}${rowID}`

    })
}
//by default click on first cell via DOM
////let firstCell = document.querySelector(".cell");
//firstCell.click();