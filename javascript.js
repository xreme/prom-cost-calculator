
document.getElementById("TicketCost").focus();

function total(){


var n1=parseFloat(document.getElementById("TicketCost").value);
var n2=parseFloat(document.getElementById("ClothingCost").value);
var n3=parseFloat(document.getElementById("ShoeCost").value);
var n4=parseFloat(document.getElementById("HairCost").value);
var n5=parseFloat(document.getElementById("FlowerCost").value);
var n6=parseFloat(document.getElementById("TransportationCost").value);
var n7=parseFloat(document.getElementById("PartyCost").value);

var ans= n1+n2+n3+n4+n5+n6+n7;

document.getElementById("answer").innerHTML="$"+ans;}



function lol(){
document.getElementById("answer").innerHTML="$--";
document.getElementById('TicketCost').value = "";
document.getElementById('ClothingCost').value = "";
document.getElementById('HairCost').value = "";
document.getElementById('FlowerCost').value = "";
document.getElementById('TransportationCost').value = "";
document.getElementById('PartyCost').value = "";
document.getElementById('ShoeCost').value = "";
document.getElementById("TicketCost").focus();}
