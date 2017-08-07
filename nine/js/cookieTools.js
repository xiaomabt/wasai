define([],function(){
	function addCookie(name,value,days,path){
	    var name = escape(name);  
	    var value = escape(value);  
	    var expires = new Date();  
	    expires.setTime(expires.getTime() + days * 3600000 * 24);  
	    path = path == "" ? "" : ";path=" + path;  
	    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();  
	    document.cookie = name + "=" + value + _expires + path;  
	} 
	
	function getCookieValue(name){  
	    var name = escape(name);  
	    var allcookies = document.cookie;         
	    name += "=";  
	    let pos = allcookies.indexOf(name);      
	    if (pos != -1){                                        
	        let start = pos + name.length;                 
	        let end = allcookies.indexOf(";",start);       
	        if (end == -1) end = allcookies.length;       
	        let value = allcookies.substring(start,end);  
	        return (value);                  
	    }else{  
	        return "";  
	    } 
	} 
	function removeCookie(key){
		saveCookie(key,"",-1);
	}
	return{
		addCookie:addCookie,
		getCookieValue:getCookieValue,
		removeCookie:removeCookie
	}
	});