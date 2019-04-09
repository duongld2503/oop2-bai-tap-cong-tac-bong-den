function SwitchButton(status) {
    this.status = status;
    let dem = 0;

    this.setStatus = function(status){
        this.status = status
    }
    this.getStatus = function(){
        return this.status;
    }

    this.switch = function(idS) {
        if(dem == 0){
            document.getElementById(idS).innerHTML = "on";
            this.status = true;
            dem++;
        }else if (dem == 1){
            document.getElementById(idS).innerHTML = "off";
            this.status = false;
            dem--;
        }
        el.turn(this.status);
    }
}


function ElectricLamp(status) {
    this.status = status
    this.setStatus = function(status){
        this.status = status
    }
    this.getStatus = function(){
        return this.status;
    }

    this.turn = function (up) {
        if (up){
            alert("light up")
        }else alert("light off")
    }

}

let sw = new SwitchButton(false);
let el = new ElectricLamp(false);
// console.log(sw.getStatus())