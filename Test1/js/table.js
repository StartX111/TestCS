class Table{

    constructor (options){
        this.el = options.el;
        this.numberCow = options.numberCow;
        this.strLength = options.strLength;
    }

    addRow(){
        var row = document.createElement("tr");
        for(var i=0; i < this.numberCow; i++){
            var cell = document.createElement("td");
            var cellText = document.createTextNode(this._getStrRand(this.strLength))
            cell.appendChild(cellText);
            row.appendChild(cell)
        }
        this.el.appendChild(row);
    }

    dellRow(){
        var row = this.el.querySelectorAll("tr");
        this.el.removeChild(row[row.length-1]);
    }


    _getStrRand(strLength){
        var result = "";
        var words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        var wordMaxPositions = words.length - 1;
        for (var position = 0, i = 0; i < strLength; i++){
            position = Math.round(Math.random() * wordMaxPositions);
            result += words.substring(position, position + 1);
        }
        return result;
    }

}