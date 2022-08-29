let sony = new Tivi();

let remotesony = new Remote(1);


sony.turnOnOff();
remotesony.changeChannel(sony,7);
remotesony.changeVollume(sony,2);
remotesony.turnOftv(sony);