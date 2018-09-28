
        function getAjax(url,obj,callback){
        	var xhr = new XMLHttpRequest();
        	xhr.open("POST",url,true);
        	// var address = '';
        	// for(var i in obj){
              
        	// }
            obj = JSON.stringify(obj);
            // obj.trim();
            var reg = /[\s]*/g;
            var reg2 = /\\n*/g;
            obj = obj.replace(reg, '');
            obj = obj.replace(reg2, '');
            // obj = obj.match(reg2);
            console.log(obj);
        	xhr.send(obj);
        	xhr.onreadystatechange = function () {
            

                if (this.readyState == 4 && this.status == 200) {


                     callback(xhr.responseText);



                }
        }
    }