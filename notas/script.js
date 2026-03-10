function calcularMedia(){

// Captura as notas digitadas e converte vírgula para ponto
const nota1=parseFloat(document.getElementById('nota1').value.replace(',','.'))||0
const nota2=parseFloat(document.getElementById('nota2').value.replace(',','.'))||0
const nota3=parseFloat(document.getElementById('nota3').value.replace(',','.'))||0

// Validação das notas
if(nota1<0||nota1>10||nota2<0||nota2>10||nota3<0||nota3>10){
alert('Insira notas entre 0 e 10')
return
}

// Cálculo da média ponderada
const media=((nota1*3)+(nota2*3)+(nota3*4))/10

// Mostra média formatada
document.getElementById('mediaFinal').textContent=media.toFixed(2).replace('.',',')

const status=document.getElementById('status')
const faltando=document.getElementById('faltando')

// Verifica aprovação
if(media>=6){

status.textContent='APROVADO'
status.className='status aprovado'
faltando.textContent='Você atingiu a média!'

}else{

status.textContent='REPROVADO'
status.className='status reprovado'

let falta=(6-media).toFixed(2).replace('.',',')
faltando.textContent='Faltaram '+falta+' pontos para aprovação'

}

document.getElementById('resultado').classList.add('show')

}

// Limpa todos os campos
function limparNotas(){

document.getElementById('nota1').value=''
document.getElementById('nota2').value=''
document.getElementById('nota3').value=''

document.getElementById('resultado').classList.remove('show')

}

// Alterna modo claro e escuro
function modoTema(){

document.body.classList.toggle('dark')

}

// Permite calcular pressionando Enter
document.querySelectorAll('input').forEach(input=>{
input.addEventListener('keypress',function(e){
if(e.key==='Enter'){
calcularMedia()
}
})
})