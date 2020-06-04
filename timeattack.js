var startTime = 0;
var firstTime = 0;
var random = 0;

function startattack(){//スタートボタンを押す
    firstTime = new Date().getTime();
    random = Math.floor( Math.random()*2+1); //整数乱数生成
    
setTimeout(timeattack,random*1000); //整数乱数秒後にスタート

function timeattack(){ //上記timeattack関数とは
    var elem1 = document.getElementById('startmessage');
    elem1.innerHTML = "START";　//スタート文字の表示
    startTime = new Date().getTime(); //startTimeを取る
    console.log(startTime); //logに残す
        }
}
function timestop(){
    
    var elem2 = document.getElementById('resultmessage');
    if (firstTime ==0){
    elem2.innerText = "先にすたーとボタンを押してください"
    }else if(startTime == 0){
    elem2.innerText = "焦りすぎだよ(笑)"
    }　else {
    console.log(startTime);
    let stopTime = new Date().getTime();
    console.log(stopTime);
    let resulttime= (stopTime-startTime)/1000;
    console.log(resulttime); 
    
    switch(true){
        case resulttime<0.1:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"人間の反射神経の限界は0.1秒と言われています。不正してなければ新人類ですね！";
        break;
        case 0.1<=resulttime&&resulttime<=0.11:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"すごいですね！常人離れの反射神経です！";
        break;
        case 0.11<resulttime&&resulttime<=0.2:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"良い反射神経ですね";
        break;
        case 0.2< resulttime&&resulttime<=0.6:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"まずまずの反射神経ですね";
        break;
        case 0.6< resulttime&&resulttime<=2.0:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"がんばりましょう";
        break;
        case 2.0<resulttime:
            elem2.innerHTML = "あなたの結果は" + resulttime +"秒でした。"+"真面目にやってくださいw";
        break;

    }

    
   } 
}


