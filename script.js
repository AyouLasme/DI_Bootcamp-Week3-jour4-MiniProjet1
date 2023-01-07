// selection de la div qui porte la classe ligneCouleur
let ligneCouleur = document.querySelector(" .ligneCouleur");

// selection de la div qui contient les couleurs et le bouton
let divCouleur = document.querySelector(".divCouleur");

// creation des div couleurs
const tableau =['red','orangered','orange','yellow','yellowgreen','#732e38','green','#eb3b5a','cyan','#ff793f','dodgerblue','blue','#c75000','indigo','#800000','#003300','#4d0000','#6F1E51','#ffc048','#2c2c54','black'];
for (const couleur of tableau) {
    let div = document.createElement("div");
    div.classList.add("ligne1");
    ligneCouleur.appendChild(div);
    div.style.backgroundColor = couleur;
    div.style.border = "2px"
    div.style.margin = "5px";
}

// creation des grilles de la div de grille
let DivGrid = document.querySelector(".DivGrid");
for (let i = 0; i < 1619; i++) {
     const square = document.createElement("div");
     square.classList.add("square");
     DivGrid.appendChild(square);
}

// declavaration des variables color et mousedown 
let color = null;
let mousedown = false;

// Sélection des éléments du DOM
let body = document.getElementsByTagName("body")[0];
let blocksDeCouleur = document.querySelectorAll(".divCouleur > *");
let blocksDeRemplissage = document.querySelectorAll(".DivGrid > *");
let clear_btn = document.getElementsByTagName("button")[0];

// Ajout d'un écouteur d'évènement sur le bouton "clear" pour effacer les blocs de couleur lorsque l'utilisateur clique dessus
clear_btn.addEventListener("click", function(){
    for (let blockDeRemplissage of blocksDeRemplissage){
        blockDeRemplissage.style.backgroundColor = "white";
    }
});

// Ajout d'un écouteur d'évènement sur le corps du document pour mettre à jour la variable mousedown lorsque l'utilisateur appuie sur le bouton de la souris
body.addEventListener("mousedown", function(){
    mousedown = true;
})

// Ajout d'un écouteur d'évènement sur le corps du document pour mettre à jour la variable mousedown lorsque l'utilisateur relâche le bouton de la souris
body.addEventListener("mouseup", function(){
    mousedown = false;
})

// Boucle sur les blocs de couleur et ajout d'un écouteur d'évènement pour mettre à jour la variable color lorsque l'utilisateur clique sur un bloc de couleur
for (let blockDeCouleur of blocksDeCouleur){
    blockDeCouleur.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

// Boucle sur les blocs de remplissage et ajout d'écouteurs d'évènement pour remplir les blocs de couleur lorsque l'utilisateur clique ou glisse la souris sur eux
for (let blockDeRemplissage of blocksDeRemplissage){
    blockDeRemplissage.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color; 
        
        console.log(color)
    });
    blockDeRemplissage.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}



















