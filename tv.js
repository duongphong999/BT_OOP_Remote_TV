class Tivi {
    constructor(){
        this.channel = 1;
        
        this.vollume = 20;
        this.status = false;

    }
    checkIsOn(){
        if(this.isOn){
            alert("tivi dang bat");

        }else{
            alert("tv dang tat");

        }

    }
    getChannel(){
        return this.channel;
    }
    getVollume(){
        return this.vollume;
    }
    turnOnOff(){
        if(this.status){
            this.status =false;
            alert("turn off TV");
        }else{
            this.status=true;
            alert("turn on TV");
        }
    }
    setVollume(number){
        if(this.status){
            number = Number(number);
            this.vollume +=number;
            alert("vollume:" +this.vollume);
        }else{
            alert("tv dang tat");

        }
       
    } setChannel(number){
            if(this.status){
                number = Number(number);
                this.channel = number;
                alert("tv chuyen kenh sang " +this.channel)
            }else{
                alert("tv dang tat");
            }

        }

}