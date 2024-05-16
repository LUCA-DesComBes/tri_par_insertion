// Je declare ma variable T qui represente mon tableau d'origine
let T = [7, 15, 1, 6, 9, 4, 23, 19]
// Je boucle tous mon tableau puis je declare une variable temporaire appeler R qui contient la longueur du tableau
// Et enfin je declare une variable j qui contient la longueur de mon tableau moins 1
  for(let i = 1; i < T.length; i++){
    let R = T[i]
    let j = i - 1;
    // Je boucle QUE si j est > ou = à 0 et que T[longueur du tableau - 1] > à ma variable temporaire
    // ce qui déplace les éléments du tableau vers la droite jusqu'à ce que la position correcte pour insérer la valeur temporaire soit trouvée
    // Si sa rentre dedans alors je fais T[longueur du tableau + 1](ce qui vaut a réinitialiser la valeur du tableau d'origine)
    // et je dis que cela est = T[longueur du tableau] et je fais l'inverse de i++ mais avec j donc j--
    while (j >= 0 && T[j] > R){
      T[j + 1] = T[j];
      j--
    }
    // Une fois sortie de ma boucle while, je dis que T[longueur du tableau + 1] est = a ma variable temporaire
    T[j + 1] = R
  }
  // Puis je log ma variable T
  console.log(T)
