/* A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant le port PORT et la remise REM, sachant que :

le port est gratuit si le prix des produits TOT est supérieur à 500 €. Dans le cas contraire, le port est de 2% de TOT
la valeur minimale du port à payer est de 6 €
la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
Testez tous les cas possibles afin de vous assurez que votre script fonctionne. */



var valid = document.getElementById("exo1");
valid.addEventListener("click",exo1);
function exo1(){
     pu = parseInt(prompt("Saisir le prix"));    // déclaration de variables
     QTECOM = parseInt(prompt("Saisir la quantité")) ;
     PAP = pu*QTECOM ;
     PORT = 0;
     REM = 0;
     TOT = 0 ;


    if(PAP>500){    // si le prix a payée est supérieur a 500 alors 0 frais de port
       PORT = 0;
    }else if(PAP<300){ // sinon si le prix est inférieur a 300 alors 6euros de frais de port
       PORT = 6;
    }else if(PAP>300 && PAP<500){ // 300 > prix < 500 alors 0.02*prix
       PORT = 0.02*PAP;
    } 
    if(PAP >= 100 && PAP <=200){ // prix>=100 et prix <=200 alors la remise est de 5%, j'attribue la valeur du calcul de la remise a ma variable TOT 
       REM = 5;
       TOT = 0.95
    }else{
       REM = 10;
       TOT = 0.90; 
    }
    if(TOT*PAP<500){ // si le total fois le prix est infèrieur a 500 alors le port redeviens a 2% et non gratuit donc on re applique 2% au prix pour le port
        PORT = 0.02*PAP
    }
    TOT = PAP*TOT+PORT; // suite logique pour avoir le resultat prix fois la remise(ici TOT(l28)) + port
    alert("Le prix est : "+PAP+" €"+"\n Vous avez une remise de : "+REM+" %"+"\n Vous avez un port de :"+PORT+" \n Vous devez payée : "+TOT);    
}
var valid = document.getElementById("exo2"); // j'appel mon boutton html dans le js
valid.addEventListener("click",exo2); // j'attribue se boutton a ma function 'exo2'
function exo2(){
   var nb =Number(prompt("saisir un entier")); //saisie d'un entier
   var s = 0;
   for ( i=0; i<nb; i++ ){  //si le nombre est infèrieur à i on fait s + i(représente les nombres inférieurs a celui taper), on utilise une incrémentation pour cela
      s += i;
      alert("Somme : "+s);    // affiche le résultats 
   }
}
var valid = document.getElementById("exo3");
valid.addEventListener("click",exo3);
function exo3(){
 var tab = new Array();
 let i = 0;
 do{
     nb = parseInt(prompt("Saisissez des nombres")); // saise de plusieurs nombres
     tab.push(nb); // push rajoute une nouvelle valeurs dans la case de ton tableau
     i++;   // incrémentation
     console.log(tab); // affiche dans la console tab
 }while(nb !=0); // on stop la saisie avec 0
 tab.pop(); // / ne pas prendre en compte le 0
 var max = tab.reduce(function exo3(a,b) { 
    return Math.max(a, b); //prend la valeurs max saisie
  });

  var min = tab.reduce(function exo3(a,b) { 
  return Math.min(a, b); // prend la valeur min saisie
});
  alert("Le max est :"+max+"\nLe mini est : "+min); // affiche le résultat
}
var valid = document.getElementById("exo4"); // exo qui consiste à trouver le nombre de jeune moyen et vieux saisie par l'utilisateur saisie se stop a 100 en prenant en compte 100
valid.addEventListener("click",exo4);
function exo4(){
    var j = 0; // 3 compteurs
    var v = 0;
    var m =0;
    do{ // boucle pour répéter le nombre d'âge qu'on veut saisir 
        a = parseInt(prompt("Saissiez des âges"));
        if(a < 20){ // âges infèrieur a 20
            j++; // compteurs, utilisation d'une incrémentation pour trouver le nombre de jeunes infèrieur a 20ans
        }else if(a >= 20 && a <= 40){
            m++; // compteurs, utilisation d'une incrémentation pour trouver le nombre de moyens entre 20 et 40ans compris
        }else if(a > 40){
            v++; // compteurs, utilisation d'une incrémentation pour trouver le nombre de vieux supérieur a 40ans
        }
    }while(a!=100) // arrêt de la saisie a 100 avec 100 pris en compte
    alert("Nombre de jeune : "+j+"\n Nombre de moyens : "+m+"\n Nombre de vieux : "+v);
}
var valid = document.getElementById("exo5");
valid.addEventListener("click",exo5);
function exo5(){
    var N =parseInt(prompt("donner un chiffre")); // saisie d'un chiffre
    var r = 0;  

    for(i =0; i<=10; i++){ // le nombre saisie va être multiplier de 0 jusqu'a 10

    r = i*N;             

    alert(i+"x"+N+"="+r);
    }
}
var valid = document.getElementById("exo6");
valid.addEventListener("click",exo6);
function exo6(){
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; // création d'un tab
    var p = prompt("Saisir un prénom (oubliez pas de mettre la Majuscule")); // saisie d'un nom 
    console.log(tab);
    var i = tab.indexOf(p); // vérification du nom dans le tableau
    if(i == -1){
        console.log(" Vous n'avez pas saisie un bon prénom a retirer"); // message d'erreurs
    }else{
        tab.splice((i),1); // supprime le nom
        tab.push(" "); // le remplace par un espace entre ""
    }
    
    console.log(tab);//affiche le résultat dans la console
}
