function SC(x){return'<script src="'+x+'.js"></scr'+"ipt>";}
function SCMIRA(x){return "PAYLOADS/"+x+".js";}
function PAYLOAD(x){return "PAYLOADS/"+x+".js";}
function removeScript(){let head=document.getElementsByTagName("head")[0],scripts=head.getElementsByTagName("script");
for (let i=scripts.length;i > 0;i--){head.removeChild(scripts[i - 1]);}} 
function addDays(days){let result=new Date();result.setDate(result.getDate()+days);return result;}
function createCookie(name,value){let expire=addDays(30);document.cookie=name+"="+value+";expires="+expire.toUTCString();}
function modifyCookie(name,value){let expire=addDays(30);document.cookie=name+"="+value+";expires="+expire.toUTCString();}
function getCookie(name){let dc=document.cookie;let prefix=name+"=";let begin=dc.indexOf(";"+prefix);if (begin == -1){begin=dc.indexOf(prefix);
    if (begin != 0) 
    return null;}
    else return readCookie(name);}function readCookie(ex){const cookieValue=document.cookie .split(";") .find((row) => row.startsWith(ex)) .split("=")[1];
    return cookieValue;}function finished(){
        switch (readCookie("exploit")){
            case "trainer": removeScript();
            break;
            case "henSP3Cex": removeScript();
            break;
            case "henSP4Cdex82": removeScript();
            break;
            case "henSP5Cdex82": removeScript();           
            break;
            case "hen213C": removeScript();
            break;
            case "mirausb": removeScript();
            break;
            case "cache": removeScript();
            break;
            case "cachebackup": removeScript();
            break;
            case "cacherestore": removeScript();
            break;
            case "dumper": removeScript();
            break;
            case "dumper2": removeScript();
            break;
            case "ftp": removeScript();
            break;
            case "fakeusb": removeScript();
            break;
            case "fancontrolusb": removeScript();
            break;
            case "app2usb": removeScript();
            break;
            case "enabler": removeScript();
            break;
            case "desabler": removeScript();
            break;
            case "browser": removeScript();
            break;
            case "ps4debug": removeScript();
            break;
            case "reactPSPLUS": removeScript();
            break;
            case "rifs": removeScript();
            break;
            case "WebRTE": removeScript();
            break;
            case "linux": removeScript();
            break;
            case "linux2": removeScript();
            break;
            case "GTAMenu127ar": removeScript();
            break;
            case "GTAMenu132ar": removeScript();
            break;
            case "GTALamance132": removeScript();
            break;
            case "BeefQueefMod": removeScript();    
            break;
            case "DumperG": removeScript();
            break;
            case "DumperU": removeScript();
            break;
            case "DumperM": removeScript();
            break;
            case "FS_Dumper": removeScript();
            break;
            case "Enable_VR": removeScript();
            break;
            case "kernelClock": removeScript();
            break;
            case "history": removeScript();
            break;
            case "dumperKernel": removeScript();
            break;}}
function loadPayload(payload){getCookie("exploit") === null ? createCookie("exploit",payload):modifyCookie("exploit",payload);setTimeout(function (){let tab=[payload,"jsloader"];
for (let i=0;i < tab.length;i++){let element=document.createElement("script");
if (i == 0) element.src=PAYLOAD(tab[i]);
else element.src=SCMIRA(tab[i]);document.getElementsByTagName("head")[0].appendChild(element);}},1500);}
function loadMira(payload){getCookie("exploit") === null ? createCookie("exploit",payload):modifyCookie("exploit",payload);setTimeout(function (){let tab=[payload,"fancontrolusb"];
for (let i=0;i < tab.length;i++){let element=document.createElement("script");
if (i == 0) element.src=PAYLOAD(tab[i]);
else element.src=SCMIRA(tab[i]);document.getElementsByTagName("head")[0].appendChild(element);}},1500);}