/* ========================================================
 * Nom du fichier   : exo2.js
 * Auteur           : Léonard Croce
 * Date de création : 04 Octobre 2024
 * Description      : Programme qui modifie un objet étudiant
 * ========================================================
 */


// Créer l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modifier l'âge de l'étudiant
student.age = 21;

// Ajouter une nouvelle propriété grade avec la valeur "A"
student.grade = "A";

// Ajouter des éléments au tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Utiliser la méthode indexOf pour trouver l'index de "Physics"
let physicsIndex = student.courses.indexOf("Physics");

// Utiliser la méthode slice pour créer un nouveau tableau contenant les deux premiers éléments
let firstTwoCourses = student.courses.slice(0, 2);

// Afficher l'objet student complet avec les modifications
console.log("L'objet student modifié : ", student);

// Afficher l'index de "Physics"
console.log("L'index de 'Physics' est : ", physicsIndex);

// Afficher le nouveau tableau créé avec slice
console.log("Les deux premiers cours : ", firstTwoCourses);