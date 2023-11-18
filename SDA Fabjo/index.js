//document.write("Hello, hi, bye, bye yllo");
//console.log("Fabjo Pashollari");
//var nurmi = 20;
//console.log(numri);
//console.log(text);
function gjejvleren(){
    var a=20;
    var b=30;
    console.log(a+b);
}
gjejvleren();

function gjejmbetjen(a){
    console.log(a%2);
}
var x=5;
gjejmbetjen(x);

function mbetja(a,b){
    console.log(a%b)
}
var x=5
var y=7
mbetja(x,y)

var a="hello"
console.log(a.indexOf("e"));
console.log((a.length));
console.log(a.substring(1,3))
 
function netekosecift(nr){
if (a%2==1)
{
    alert("numri tek")
}
else{
    alert("numri cift")
}
}
netekosecift(2)

function gjejnr(z){
    if(z===10){
        console.log("Numri juaj i vendosur eshte 10")
    }
    else if(z>10){
        console.log("Numri eshte me i madh se 10")
    }
    else  {
        console.log("Numri eshte me i vogel se 10")
    }
    //if(z===10){
       // console.log("Numri juaj i vendosur eshte 10")
   // }
}
gjejnr(10)

var nr=3
nr%2===0? console.log(true) : console.log(false)

var nr = 8
nr>=10? console.log(true) : console.log(false)
var dita
switch  (dita) {
    case 1:
    console.log("Dita eshte e diele ")
    break;

    case 2:
    console.log("Dita eshte e hene ")
    break;

    case 3:
    console.log("Dita eshte e marte ")
    break;

    case 4:
    console.log("Dita eshte e merkure ")
    break;

    case 5:
    console.log("Dita eshte e enjte ")
    break;

    case 6:
    console.log("Dita eshte e premte ")
    break;

    case 7:
    console.log("Dita eshte e shume ")
    break;

    default:
        console.log("nuk egziston")
}

var a="test"
switch(a.length){
    case 1:
        console.log("gjatesia eshte 1")
        break
    case 2:
        console.log("gjatesia eshte 2")
        break
    case 3:
        console.log("gjatesia eshte 3")
        break
    case 4:
        console.log("gjatesia eshte 4")
        break
    default:
        console.log("gjatesia eshte me e madhe se 4")
}

var x=[1,23,45,67,890,23254,3465745,1562463575]
for(i=0; i<=7;i++){
    if(x[1]%2===0){
        console.log("Nurmi "+x[i]+" eshte cift ")
    }
        else{
            console.log("Numri "+x[i]+" eshte tek")
        }
}

var y=[2,3,4,5,6,7,8]
var sum=0
for(i=0;i<=7;i++){
    sum =sum+ y[i]
}
console.log(sum)
