function showClock1() {     //現在時刻の取得　-> 表示
    var nowTime = new Date();
    var nowYear = nowTime.getFullYear();
    var nowMonth = nowTime.getMonth()+1;
    var nowDate = nowTime.getDate();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "現在時刻：" + nowYear + "年" + nowMonth + "月" + nowDate + "日　" +  nowHour + "時" + nowMin + "分" + nowSec + "秒";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval(`showClock1()`,1000);   //1秒ごとに特定の関数を実行する関数
function set2fig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function showClock2() {     //描画の更新
    var nowTime = new Date();
    var nowYear = set2fig( nowYear.getFullYear() );
    var nowMonth = set2fig( nowMonth.getMonth()+1 );
    var nowDate = set2fig( nowDate.getDate() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowHour = set2fig( nowTime.getHours() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var msg = "現在時刻：" + nowYear + "年" + nowMonth + "月" + nowDate + "月" + nowHour + "時" + nowMin+ "分" + nowSec + "秒";
    document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()',1000);
