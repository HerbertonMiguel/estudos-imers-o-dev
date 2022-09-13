const nome = "Herberton Miguel";

const notaDoPrimeiroBimestre = 9.87098 ;
const notaDoSegundoBimestre = 7.657 ;
const notaDoTerceiroBimestre = 4.543 ;
const notaDoQuartoBimestre = 2.4539 ;

const notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

const notaFixada = notaFinal.toFixed(1)

console.log("bem vindo " + nome)
console.log(nome + " sua nota Final é " + notaFixada)