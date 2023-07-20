// scope de fonction
var i = 62;
for(var i = 0 ; i < 10; i++){
    console.log(i); //affiche la boucle
}
console.log(i); //affiche 10

// scop de bloc
let j = 52;
for(let j = 0 ; j < 10; j++){
    console.log(j); //affiche la boucle
}
console.log(j); //affiche 52

//  maniere d'utiliser une fonction dans un objet.
const me = {
    name:"Jonh",
    presentFriend:function(friend){
        return "tu connais " + friend + " ?";
    }
}
console.log(me.presentFriend("kevin"));
// avec fonction flechée
const me2 = {
    name:"Jonh",
    presentFriend:friend => "tu connais " + friend + " ?" //lorsqu'il y a un seul argument pas besoin de mettre
    // les parentheses ni les accollades si on a qu'une seul action a realisée
}
console.log(me2.presentFriend("Ali"));

// parcontre si ya plusieurs arguments il faut mettre les parentheses
// et si ya plusieurs actions il faut mettre les accolades.

const me3 = {
    name:"Jonh",
    presentFriend:(friend1,friend2,friend3) => "tu connais " + friend1 + " , " + friend2 + " et " + friend3 + " ?" //lorsqu'il y a un seul argument pas besoin de mettre les parentheses ni les accollades
}
console.log(me3.presentFriend("Ali" , "sam" ,"bachir"));

const classicFunction = function(){
    console.log(this);
}

const classicFunctionBind = classicFunction.bind(this)

const arrowFunction = () => console.log(this);

const me4 = {
    name: "jonh",
    presentClassic : classicFunction,
    presentArrow : arrowFunction,
    presentClassicBind : classicFunctionBind
}
me4.presentClassic(); //le this va faire reference à l'objet car c'est l'objet qui a executée la fonction
me4.presentArrow();  //avec la fonction flechée le this fait reference a l'endroit ou il où il a été declarée cad la window .
                    // de meme que le bind
me4.presentClassicBind();

// parametre par defaut d'une fonction
function nomComplet(prenom , nom = "pitt"){
    console.log(prenom + " "+ nom);
}
// ici vu qu'on a pas saisi l'argument du parametre nom lorsqu'on appelle la fonction donc celui ci va prendre la valeur pitt qui est la valeur par defaut
nomComplet("jonh");

// parametre Rest 
// il permet de reunir des valeurs libres ou quelconques dans un tableau 
// exemple

function faisMoiLaSomme(...nombres){
    console.log(nombres);
    let somme = 0 ;
    for(let i = 0 ;i < nombres.length ; i++ ){ 
        somme += nombres[i];
    }
    return somme;
}
console.log(faisMoiLaSomme(23,34,67,12,3));

// operateur spread. 
//il permet de prendre les valeurs d'un tableau et de les transformer en des valeurs libres
// il eclate le tableau et on recupere uniquement ses valeurs tel quelles sont
const mesNombres = [1,5,97]
function somme (nombre1 , nombre2 , nombre3){
    return nombre1 + nombre2 + nombre3;
}
console.log(somme(...mesNombres));

const fruitsRouges = ["fraises","frambroises"];
const fruitsVerts = ["pommes" , "poires"]
const fruits = [...fruitsRouges,...fruitsVerts];
console.log(fruits); 