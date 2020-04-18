module.exports = function parseStringAsArray(arrayAsString){
  return arrayAsString.split(',').map(tech => tech.trim()) 
  //Erro Split não pode ter espaços porque ele não separa as strings
}