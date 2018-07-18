class Table{

    constructor(options){
        this.elementTable = options.elementTable;
        this.textInput = options.textInput;
    }

    addRow(){
        if (this.textInput){
            let template = `
            <tr>
                <td>${this.textInput.value}</td>
                <td>
                    <input type="checkbox">
                </td>
            </tr>`;
            this.elementTable.innerHTML += template;
            this.textInput.value = '';
        }
    }


    dellRow(){
        let getElements = this.elementTable.querySelectorAll('[type="checkbox"]');
        for(let count = 0 ; count < getElements.length; count++){
            if (getElements[count].checked){
                getElements[count].parentNode.parentElement.remove();
            }
        }
    }



}