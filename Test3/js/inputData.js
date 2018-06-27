class InputData{

    constructor(options){
        this.el = options.el;

        this.output = this.el.querySelector('[data-component="ouputDataNewFormat"]');
        this.inputComponent = this.el.querySelector('[data-component="inputStr"]');



        this.inputComponent.addEventListener('textInput',this.runEvent.bind(this));
    }

    runEvent(){

        var res = this.output.querySelector('text');
        if (this.inputComponent.value.length === 16 ){
            var dateOrTime = this.inputComponent.value.split(' ');
            var dateOrYear = dateOrTime[0].split('.');
            var hourOrMinutes = dateOrTime[1].split(':');

            this.nowDate = new Date(+dateOrYear[2], dateOrYear[0]-1, +dateOrYear[1], +hourOrMinutes[0], +hourOrMinutes[1]);
            var dayWeek = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            var result = "";
            var minutes;
            if (this.nowDate.getMinutes() < 10){
                minutes = '0' + this.nowDate.getMinutes();
            } else {
                minutes = this.nowDate.getMinutes();
            }
            result += this.nowDate.getHours() + '-' + minutes + ' ' + this.nowDate.getDate() + ' ' +
                dayWeek[this.nowDate.getMonth()] + ' ' + this.nowDate.getFullYear();

            var text = document.createTextNode(result);
            this.output.appendChild(text);
        } else {
            this.output.innerHTML = "";
        }

    }

}