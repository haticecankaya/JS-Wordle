var wordpool=["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "SEHPA", "ROMAN","CEVİZ"];
var newgame=document.getElementById("newgame");
var word;
var counter=0;
var wincounter=0;


newgame.onclick=function(){
document.getElementById("winlose").innerHTML="";
wincounter=0;
var x = document.querySelector(".form-group");
x.style.display='block';
console.log(x);
var y=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
word=wordpool[y];
console.log(y);
console.log(word);
counter=0;
document.getElementById("guess").value="";
var successbuttons=document.getElementsByClassName("btn-success");
var csbuttons=[];
for(c=0;c<successbuttons.length;c++){
	csbuttons.push(successbuttons[c]);
}

for(c=0;c<csbuttons.length;c++){
	csbuttons[c].classList.remove('btn-success');
	csbuttons[c].classList.add('btn-secondary');
}
var warningbuttons=document.getElementsByClassName("btn-warning");
var cwbuttons=[];
for(c=0;c<warningbuttons.length;c++){
	cwbuttons.push(warningbuttons[c]);
}

for(c=0;c<cwbuttons.length;c++){
	cwbuttons[c].classList.remove('btn-warning');
	cwbuttons[c].classList.add('btn-secondary');
}

var wrongbuttons=document.getElementsByClassName("btn-danger");
var cwrbuttons=[];
for(c=0;c<wrongbuttons.length;c++){
	cwrbuttons.push(wrongbuttons[c]);
}

for(c=0;c<cwrbuttons.length;c++){
	cwrbuttons[c].classList.remove('btn-danger');
	cwrbuttons[c].classList.add('btn-secondary');
}

console.log(successbuttons);
console.log(csbuttons);
for(j=0;j<6;j++){
	switch(j) {
		case 0:	
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("one0").innerHTML="";
						break;
					case 1:
						document.getElementById("one1").innerHTML="";
						break;
					case 2:
						document.getElementById("one2").innerHTML="";
						break;
					case 3:
						document.getElementById("one3").innerHTML="";
						break;
					case 4:
						document.getElementById("one4").innerHTML="";
						break;
				}
			}
			break;
		case 1:
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("two0").innerHTML="";
						break;
					case 1:
						document.getElementById("two1").innerHTML="";
						break;
					case 2:
						document.getElementById("two2").innerHTML="";
						break;
					case 3:
						document.getElementById("two3").innerHTML="";
						break;
					case 4:
						document.getElementById("two4").innerHTML="";
						break;
				}
			}
			break;
		case 2:
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("three0").innerHTML="";
						break;
					case 1:
						document.getElementById("three1").innerHTML="";
						break;
					case 2:
						document.getElementById("three2").innerHTML="";
						break;
					case 3:
						document.getElementById("three3").innerHTML="";
						break;
					case 4:
						document.getElementById("three4").innerHTML="";
						break;
				}
			}
			break;
		case 3:
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("four0").innerHTML="";
						break;
					case 1:
						document.getElementById("four1").innerHTML="";
						break;
					case 2:
						document.getElementById("four2").innerHTML="";
						break;
					case 3:
						document.getElementById("four3").innerHTML="";
						break;
					case 4:
						document.getElementById("four4").innerHTML="";
						break;
				}
			}
			break;
		case 4:
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("five0").innerHTML="";
						break;
					case 1:
						document.getElementById("five1").innerHTML="";
						break;
					case 2:
						document.getElementById("five2").innerHTML="";
						break;
					case 3:
						document.getElementById("five3").innerHTML="";
						break;
					case 4:
						document.getElementById("five4").innerHTML=""
						break;
				}
			}
			break;
		case 5:
			for(i=0;i<5;i++){
				switch(i){
					case 0:
						document.getElementById("six0").innerHTML="";
						break;
					case 1:
						document.getElementById("six1").innerHTML="";
						break;
					case 2:
						document.getElementById("six2").innerHTML="";
						break;
					case 3:
						document.getElementById("six3").innerHTML="";
						break;
					case 4:
						document.getElementById("six4").innerHTML="";
						break;
				}
			}
			break;
		
		}
}
}

var check= document.getElementById("check");


check.onclick=function(){
	var guess=document.getElementById("guess").value;
	console.log(guess);
		switch(counter) {
		case 0:	
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("one0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("one0").classList.remove('btn-secondary');
							document.getElementById("one0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("one0").classList.remove('btn-secondary');
							document.getElementById("one0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
							
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 1:
						document.getElementById("one1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("one1").classList.remove('btn-secondary');
							document.getElementById("one1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("one1").classList.remove('btn-secondary');
							document.getElementById("one1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("one2").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("one2").classList.remove('btn-secondary');
							document.getElementById("one2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("one2").classList.remove('btn-secondary');
							document.getElementById("one2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("one3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("one3").classList.remove('btn-secondary');
							document.getElementById("one3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("one3").classList.remove('btn-secondary');
							document.getElementById("one3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("one4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("one4").classList.remove('btn-secondary');
							document.getElementById("one4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("one4").classList.remove('btn-secondary');
							document.getElementById("one4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
				wincounter=0;
			}
			break;
		case 1:
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("two0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("two0").classList.remove('btn-secondary');
							document.getElementById("two0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("two0").classList.remove('btn-secondary');
							document.getElementById("two0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
							
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						
						break;
					case 1:
						document.getElementById("two1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("two1").classList.remove('btn-secondary');
							document.getElementById("two1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("two1").classList.remove('btn-secondary');
							document.getElementById("two1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
							
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("two2").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("two2").classList.remove('btn-secondary');
							document.getElementById("two2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("two2").classList.remove('btn-secondary');
							document.getElementById("two2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("two3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("two3").classList.remove('btn-secondary');
							document.getElementById("two3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("two3").classList.remove('btn-secondary');
							document.getElementById("two3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("two4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("two4").classList.remove('btn-secondary');
							document.getElementById("two4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("two4").classList.remove('btn-secondary');
							document.getElementById("two4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
				console.log(wincounter);
				wincounter=0;
			}
			break;
		case 2:
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("three0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("three0").classList.remove('btn-secondary');
							document.getElementById("three0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("three0").classList.remove('btn-secondary');
							document.getElementById("three0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 1:
						document.getElementById("three1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("three1").classList.remove('btn-secondary');
							document.getElementById("three1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("three1").classList.remove('btn-secondary');
							document.getElementById("three1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("three2").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("three2").classList.remove('btn-secondary');
							document.getElementById("three2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("three2").classList.remove('btn-secondary');
							document.getElementById("three2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("three3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("three3").classList.remove('btn-secondary');
							document.getElementById("three3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("three3").classList.remove('btn-secondary');
							document.getElementById("three3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("three4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("three4").classList.remove('btn-secondary');
							document.getElementById("three4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("three4").classList.remove('btn-secondary');
							document.getElementById("three4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
				console.log(wincounter);
				wincounter=0;
			}
			break;
		case 3:
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("four0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("four0").classList.remove('btn-secondary');
							document.getElementById("four0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("four0").classList.remove('btn-secondary');
							document.getElementById("four0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 1:
						document.getElementById("four1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("four1").classList.remove('btn-secondary');
							document.getElementById("four1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("four1").classList.remove('btn-secondary');
							document.getElementById("four1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("four2").innerHTML=guess[i];
						if(word[i]==guess[i]){
						wincounter=wincounter+1;
							document.getElementById("four2").classList.remove('btn-secondary');
							document.getElementById("four2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("four2").classList.remove('btn-secondary');
							document.getElementById("four2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("four3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("four3").classList.remove('btn-secondary');
							document.getElementById("four3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("four3").classList.remove('btn-secondary');
							document.getElementById("four3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("four4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("four4").classList.remove('btn-secondary');
							document.getElementById("four4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("four4").classList.remove('btn-secondary');
							document.getElementById("four4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
			console.log(wincounter);
				wincounter=0;
			}
			break;
		case 4:
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("five0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("five0").classList.remove('btn-secondary');
							document.getElementById("five0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
							
						}else if(word.search(guess[i])>-1){
							document.getElementById("five0").classList.remove('btn-secondary');
							document.getElementById("five0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 1:
						document.getElementById("five1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("five1").classList.remove('btn-secondary');
							document.getElementById("five1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("five1").classList.remove('btn-secondary');
							document.getElementById("five1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("five2").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("five2").classList.remove('btn-secondary');
							document.getElementById("five2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("five2").classList.remove('btn-secondary');
							document.getElementById("five2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("five3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("five3").classList.remove('btn-secondary');
							document.getElementById("five3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("five3").classList.remove('btn-secondary');
							document.getElementById("five3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("five4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("five4").classList.remove('btn-secondary');
							document.getElementById("five4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("five4").classList.remove('btn-secondary');
							document.getElementById("five4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
			console.log(wincounter);
				wincounter=0;
			}
			break;
		case 5:
			for(i=0;i<guess.length;i++){
				switch(i){
					case 0:
						document.getElementById("six0").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("six0").classList.remove('btn-secondary');
							document.getElementById("six0").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("six0").classList.remove('btn-secondary');
							document.getElementById("six0").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 1:
						document.getElementById("six1").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("six1").classList.remove('btn-secondary');
							document.getElementById("six1").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("six1").classList.remove('btn-secondary');
							document.getElementById("six1").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 2:
						document.getElementById("six2").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("six2").classList.remove('btn-secondary');
							document.getElementById("six2").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("six2").classList.remove('btn-secondary');
							document.getElementById("six2").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 3:
						document.getElementById("six3").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("six3").classList.remove('btn-secondary');
							document.getElementById("six3").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("six3").classList.remove('btn-secondary');
							document.getElementById("six3").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
					case 4:
						document.getElementById("six4").innerHTML=guess[i];
						if(word[i]==guess[i]){
							wincounter=wincounter+1;
							document.getElementById("six4").classList.remove('btn-secondary');
							document.getElementById("six4").classList.add('btn-success');
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.remove('btn-warning');
							document.getElementById(guess[i]).classList.add('btn-success');
						}else if(word.search(guess[i])>-1){
							document.getElementById("six4").classList.remove('btn-secondary');
							document.getElementById("six4").classList.add('btn-warning');
							var letters=document.getElementsByClassName("btn-secondary");
							for(s=0;s<letters.length;s++){
								if(letters[s].id==guess[i]){
									letters[s].classList.add('btn-warning');
									letters[s].classList.remove('btn-secondary'); 
									}
							}
						}else{
							document.getElementById(guess[i]).classList.remove('btn-secondary');
							document.getElementById(guess[i]).classList.add('btn-danger');
						}
						break;
				}
			}
			if(wincounter==5){
				console.log("kazandın");
				document.getElementById("winlose").innerHTML="KAZANDIN.";
			}else{
			console.log(wincounter);
				wincounter=0;
			}
			break;
		
		}
	counter=counter+1;
	if(counter==6 && wincounter!=5){
		console.log("bitti");
		document.getElementById("winlose").innerHTML="KAYBETTİN";
	}
}
	
