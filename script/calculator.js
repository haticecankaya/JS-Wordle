var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var multipliedby=document.getElementById("multipliedby");
var divide =document.getElementById("divide");
var between=document.getElementById("between");
var evenodd=document.getElementById("evenodd");
var nrandom =document.getElementById("nrandom");
var changecolor =document.getElementById("changecolor");
var result=0;
var stresult ="";

plus.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	result=Number(numberone)+Number(numbertwo);
	document.getElementById("calculator-result").innerHTML=result;
	document.getElementById("calculator-label").innerHTML="Sonuc";
}

minus.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	result=Number(numberone)-Number(numbertwo);
	document.getElementById("calculator-result").innerHTML=result;
	document.getElementById("calculator-label").innerHTML="Sonuc";
}

multipliedby.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	result=Number(numberone)*Number(numbertwo);
	document.getElementById("calculator-result").innerHTML=result;
	document.getElementById("calculator-label").innerHTML="Sonuc";
}

divide.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	result=Number(numberone)/Number(numbertwo);
	document.getElementById("calculator-result").innerHTML=result;
	document.getElementById("calculator-label").innerHTML="Sonuc";
}

evenodd.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;	
	stresult ="";
	document.getElementById("calculator-label").innerHTML="";
	if(Number(numberone)%2==0){
		stresult=stresult+"Sayı 1 çift sayı.<br/>"
	}else{
		stresult=stresult+"Sayı 1 tek sayı.<br/>"
		}
	if(Number(numbertwo)%2==0){
		stresult=stresult+"Sayı 2 çift sayı."
	}else{
		stresult=stresult+"Sayı 2 tek sayı."
		}	
	
	document.getElementById("calculator-result").innerHTML=stresult;
}

between.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	stresult ="";
	if(Number(numberone)>Number(numbertwo)){
		var k= Number(numbertwo);
		numbertwo=Number(numberone);
		numberone=k;
		
	}
	if(Number(numbertwo)==Number(numberone)){
		document.getElementById("calculator-label").innerHTML="";
		document.getElementById("calculator-result").innerHTML="Sayılar eşit.Arada kalan sayı yok.";
		
	}else if(Number(numbertwo)-Number(numberone)==1){
		document.getElementById("calculator-label").innerHTML="";
		document.getElementById("calculator-result").innerHTML="Sayılar ardışık.Arada kalan sayı yok.";
	}else{
	for(i=Number(numberone)+1;i<Number(numbertwo);i++){
		stresult = stresult+i+"-";
	 }
	
	stresult=stresult.slice(0, -1);
	document.getElementById("calculator-result").innerHTML=stresult;
	document.getElementById("calculator-label").innerHTML="İki Sayı Arasında Kalan Sayılar";
	}
}



nrandom.onclick=function(){
	var numberone=document.getElementById("one").value;
	var numbertwo=document.getElementById("two").value;
	if(Number(numberone)>Number(numbertwo)){
		var k= Number(numbertwo);
		numbertwo=Number(numberone);
		numberone=k;
		
	}
	if(Number(numbertwo)==Number(numberone)){
		document.getElementById("calculator-label").innerHTML="";
		document.getElementById("calculator-result").innerHTML="Sayılar eşit.Arada kalan sayı yok.Bu yüzden random sayı üretilmedi.";
		
	}else if(Number(numbertwo)-Number(numberone)==1){
		document.getElementById("calculator-label").innerHTML="";
		document.getElementById("calculator-result").innerHTML="Sayılar ardışık.Arada kalan sayı yok.Bu yüzden random sayı üretilmedi.";
	}else{
	
	numberone=Number(numberone)+1;
	result= Math.floor(Math.random() * (numbertwo - numberone))+numberone;
	document.getElementById("calculator-result").innerHTML=result;
	document.getElementById("calculator-label").innerHTML="İki Sayı Arasında Kalan Bir Random Sayı";
	}
}


changecolor.onclick=function(){
	var buttons= document.getElementsByClassName('btn-success');     
	var buttonss=[];
	var buttonsi=[];
	for(i=0;i<buttons.length;i++){
		buttonss.push(buttons[i]);
	}
	buttons=document.getElementsByClassName('btn-info'); 
	for(i=0;i<buttons.length;i++){
		buttonsi.push(buttons[i]);
	}
	
	for(i=0;i<buttonss.length;i++){
		buttonss[i].classList.remove('btn-success');
		buttonss[i].classList.add('btn-info');
	}
	
	for(i=0;i<buttonsi.length;i++){
		buttonsi[i].classList.remove('btn-info');
		buttonsi[i].classList.add('btn-success');
	}
	

	
}