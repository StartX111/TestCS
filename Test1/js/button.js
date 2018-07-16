class Button{

    constructor(options){
        this.el = options.el;
        this.addBtnEl = this.el.querySelector('[data-component="addRowToTable"]');
        this.removBtnEl = this.el.querySelector('[data-component="removeLastRow"]');

        this.table = new Table({
            el: this.el.querySelector('[data-component="table"]'),
            numberCol: 3,
            strLength: 16
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