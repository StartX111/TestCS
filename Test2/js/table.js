class Table{

    constructor(options){
        this.tableNew = options.tableNew;
        this.textInput = options.textInput;
        this.arrayElement = [];
    }

    addRow(){
        if (this.textInput.value){
            let text = document.createTextNode(this.textInput.value);
            this.textInput.value = '';
            let check = document.createElement("input");
            check.type = "checkbox";
            this.arrayElement.push({
                textS: text,
                checkedS: check
            });
            this.renderTable();
        }
    }


    dellRow(){
        for(let i = 0 ; i < this.arrayElement.length; i++){
            if (this.arrayElement[i].checkedS.checked){
                this.arrayElement.splice(i, 1);
            }
        }
        this.renderTable();
    }


    renderTable(){
        let oldRow = this.tableNew.querySelectorAll("tr");
        for (let i = 0; i < oldRow.length; i++) {
            this.tableNew.removeChild(oldRow[i]);
        }

        for(let i = 0; i < this.arrayElement.length; i++){
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            cell.appendChild(this.arrayElement[i].textS);
            row.appendChild(cell);
            let cell1 = document.createElement("td");
            cell1.appendChild(this.arrayElement[i].checkedS);
            row.appendChild(cell1);
            this.tableNew.appendChild(row);
        }
    }

}