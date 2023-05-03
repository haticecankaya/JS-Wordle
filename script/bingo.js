var newgame=document.getElementById("newgame");
var newnumber=document.getElementById("newnumber");
var numbers=[];
var onenumbers=[];
var twonumbers=[];
var counterone=0;
var countertwo=0;
var checknumbers=[];
newgame.onclick=function(){
	numbers=[];
	onenumbers=[];
	twonumbers=[];
	document.getElementById("result").innerHTML="";
	counterone=0;
	countertwo=0;
	checknumbers=[];
	document.getElementById("onepuan").innerHTML="Oyuncu 1'in "+counterone+" tane sayısı çıktı.";
	document.getElementById("twopuan").innerHTML="Oyuncu 2'in "+countertwo+" tane sayısı çıktı.";
	var k;
	while(numbers.length<16){
		k=Math.floor(Math.random() * (20 - 1 + 1)) + 1;
		if(numbers.indexOf(k)==-1){
			numbers.push(k);
		}
	}
	console.log(numbers);
	for(i=0;i<numbers.length;i++){
		if(i%2==0){
			onenumbers.push(numbers[i]);
		}else{
			twonumbers.push(numbers[i]);
		}
	}
	
	console.log(onenumbers);
	console.log(twonumbers);
	
	for(i=0;i<onenumbers.length;i++){
  switch (i) {
  case 0:
    document.getElementById("one0").innerHTML=onenumbers[i];
	document.getElementById("two0").innerHTML=twonumbers[i];
    break;
  case 1:
    document.getElementById("one1").innerHTML=onenumbers[i];
	document.getElementById("two1").innerHTML=twonumbers[i];
    break;
  case 2:
     document.getElementById("one2").innerHTML=onenumbers[i];
	 document.getElementById("two2").innerHTML=twonumbers[i];
    break;
  case 3:
    document.getElementById("one3").innerHTML=onenumbers[i];
	document.getElementById("two3").innerHTML=twonumbers[i];
    break;
  case 4:
   document.getElementById("one4").innerHTML=onenumbers[i];
   document.getElementById("two4").innerHTML=twonumbers[i];
    break;
  case 5:
    document.getElementById("one5").innerHTML=onenumbers[i];
	document.getElementById("two5").innerHTML=twonumbers[i];
    break;
  case 6:
    document.getElementById("one6").innerHTML=onenumbers[i];
	document.getElementById("two6").innerHTML=twonumbers[i];
    break;
  case 7:
    document.getElementById("one7").innerHTML=onenumbers[i];
	document.getElementById("two7").innerHTML=twonumbers[i];
    break;
}
	}
	
}

counterone=0;
countertwo=0;
checknumbers=[];
var y;
newnumber.onclick=function(){
	
	if(counterone>=8){
		document.getElementById("result").innerHTML="Oyuncu 1 oyunu kazandı";
	}else if(countertwo>=8){
		document.getElementById("result").innerHTML="Oyuncu 2 oyunu kazandı";
	}else{
		while(true){
		y=Math.floor(Math.random() * (20 - 1 + 1)) + 1;
		if(checknumbers.indexOf(y)==-1){
			checknumbers.push(y);
			if(onenumbers.indexOf(y)!=-1){
				counterone=counterone+1;
				document.getElementById("result").innerHTML="Sayı:"+y+" Oyuncu1'in sayısı";
				document.getElementById("onepuan").innerHTML="Oyuncu 1'in "+counterone+" tane sayısı çıktı.";
			}else if(twonumbers.indexOf(y)!=-1){
				countertwo=countertwo+1;
				document.getElementById("result").innerHTML="Sayı:"+y+" Oyuncu2'in sayısı";
				document.getElementById("twopuan").innerHTML="Oyuncu 2'in "+countertwo+" tane sayısı çıktı.";
			}else{
				document.getElementById("result").innerHTML="Sayı:"+y+" İki oyuncunun da sayısı değil.";
			}
			break;
		}
	}}
	
}