function calculerMoyenne(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}
function estAdmis(moyenne) {
  return moyenne >= 10;
}
function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
  return prixHT * (1 + tauxTVA);
}
const convertirEnMinutes = (heures) => heures * 60;
console.log(calculerMoyenne(12, 14, 16)); 
console.log(calculerMoyenne(0, 0, 0));    
console.log(estAdmis(12));
console.log(estAdmis(10)); 
console.log(estAdmis(9)); 
console.log(calculerPrixTTC(100));      
console.log(calculerPrixTTC(100, 0.20)); 
console.log(calculerPrixTTC(0));         
console.log(convertirEnMinutes(2));   
console.log(convertirEnMinutes(0.5));
console.log(convertirEnMinutes(0));  