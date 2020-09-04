function init(){
	var num=document.getElementById("num");
	num.value=0;
	num.disabled="disabled";
	// var n1=document.getElementById("n1");
	// n1.onclick=function(){
	// 	alert("123");
	// }
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for(var i=0;i<oButton.length;i++){
		oButton[i].onclick=function(){
			if(isNumber(this.value)){
				//num.value=(num.value+this.value)*1;
				if(isNull(num.value)){
					num.value=this.value;
				}else{
					num.value=num.value+this.value;
				}
			}else{
				//alert("fei");
				var btn_num=this.value;
				
				switch(btn_num){
					case "+":
						btn_num1=Number(num.value);
						num.value=0;
						fh="+";
					    break;
					case "-":
						btn_num1=Number(num.value);
						num.value=0;
						fh="-";
					    break;
					case "*":
						btn_num1=Number(num.value);
						num.value=0;
						fh="*";
					    break;
					case "/":
						btn_num1=Number(num.value);
						num.value=0;
						fh="/";
					    break;
					case ".":
						num.value=dec_number(num.value);
					    break;
					case "←":
						num.value=back(num.value);
					    break;
					case "c":
						num.value="0";
					    break;
					case "+/-":
						num.value=sign(num.value);
					    break;
					case "=":
					    switch(fh){
					    	case "+":
					    	  num.value=btn_num1+Number(num.value);
					          //console.log(btn_num1);
					          break;
					        case "-":
					    	   num.value=btn_num1-Number(num.value);
					          //console.log(btn_num1);
					           break;
					        case "*":
					    	   num.value=btn_num1*Number(num.value);
					          //console.log(btn_num1);
					           break;
					        case "/":
					           if(Number(num.value)==0){
					           	    alert("除数不能是0");
					             	num.value=0;
					           }else{
					           	  num.value=btn_num1/Number(num.value);
					           }
					    	   
					          //console.log(btn_num1);
					           break;
					    }
					    break;
				}
			}
		}
	}
}
/*正负号*/
function sign(n){
   n=Number(n)*-1;
   return n;
}
/*退位键*/
function back(n){
   n=n.substr(0,n.length-1);
   if(isNull(n)){
   	  n="0";
   }
   return n;
}
/*小数点*/
function dec_number(n){
   if(n.indexOf(".")==-1){
      n=n+".";
   }
   return n;
}
/*验证文本框是否为空或者0*/
function isNull(n){
   if(n=="0" || n.length==0){
       return true;
   }else{
   	   return false;
   }
}

function isNumber(n){
  return  !isNaN(n);
}
// isNaN：不能转换为数字：true，可以转换成数字是false