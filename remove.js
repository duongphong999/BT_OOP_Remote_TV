class Remote{
    id;
    constructor(id){
        this.id = id;
    }
    changeChannel(tv, newchannel){
        tv.setChannel(newchannel);
        
    }
    changeVollume(tv,newvollume){
        tv.setVollume(newvollume)
    }
    turnOftv(tv){
        tv.turnOnOff();
    }
}