class Button{

    constructor(options){
        this.el = options.el;
        this.addBtnEl = this.el.querySelector('[data-component="addRowToTable"]');
        this.removBtnEl = this.el.querySelector('[data-component="removeSelectRow"]');

        this.table = new Table({
            tableNew: this.el.querySelector('[data-component="table"]'),
            textInput: this.el.querySelector('[data-component="inputStr"]')
        });

        this.addBtnEl.addEventListener('click', this.createRow.bind(this));
        this.removBtnEl.addEventListener('click', this.deleteRow.bind(this));
    }

    createRow(){
        this.table.addRow();
    }


    deleteRow(){
        this.table.dellRow();
    }
}