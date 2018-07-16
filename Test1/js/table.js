class Table{

    constructor (options){
        this.el = options.el;
        this.numberCol = options.numberCol;
        this.strLength = options.strLength;
    }

    addRow(){
        let row = document.createElement("tr");
        for(let i=0; i < this.numberCol; i++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(this._getStrRand(this.strLength));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        this.el.appendChild(row);
    }

    dellRow(){
        let row = this.el.querySelectorAll("tr");
        this.el.removeChild(row[row.length-1]);
    }


    _getStrRand(strLength){
        let result = "";
        let words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        let wordMaxPositions = words.length - 1;
        for (let position = 0, i = 0; i < strLength; i++){
            position = Math.round(Math.random() * wordMaxPositions);
            result += words.substring(position, position + 1);
        }
        return result;
    }

}