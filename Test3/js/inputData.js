class InputData{

    constructor(options){
        this.el = options.el;

        this.output = this.el.querySelector('[data-component="ouputDataNewFormat"]');
        this.inputComponent = this.el.querySelector('[data-component="inputStr"]');

        this.inputComponent.addEventListener('input',this.runEvent.bind(this));
    }

    runEvent(){
        if (this.inputComponent.value.length === 16 ){
            let dateOrTime = this.inputComponent.value.split(' ');
            let dateOrYear = dateOrTime[0].split('.');
            let hourOrMinutes = dateOrTime[1].split(':');

            this.nowDate = new Date(+dateOrYear[2], dateOrYear[0]-1, +dateOrYear[1], +hourOrMinutes[0], +hourOrMinutes[1]);
            let nameMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            let result = "";
            let minutes;
            if (this.nowDate.getMinutes() < 10){
                minutes = '0' + this.nowDate.getMinutes();
            } else {
                minutes = this.nowDate.getMinutes();
            }
            result += this.nowDate.getHours() + '-' + minutes + ' ' + this.nowDate.getDate() + ' ' +
                nameMonth[this.nowDate.getMonth()] + ' ' + this.nowDate.getFullYear();

            let text = document.createTextNode(result);
            this.output.appendChild(text);
        } else {
            this.output.innerHTML = "";
        }
    }

}