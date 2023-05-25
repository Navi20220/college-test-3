import _ from "lodash"
export default function solution(content) {
  // BEGIN 
    const aar = content.split('\n')
   
    const butka = aar.slice(2, aar.length)
    console.log(`всего растений: ${butka.length}`)


    const klumba = butka.map(rost => rost.split('|')[1].trim())
    const buton = klumba.map(rost => _.upperFirst(rost)).sort()
  
    console.log(`в алфавитном порядке: ${buton}`);

    let  opasnie = 0
    let  neopasnie = 0
    const klumba2 = butka.map(rost => rost.split('|')[5]).map(rost => rost.trim())
    const hip = klumba2.map(r => {
      if(r === 'Да'){
      return  opasnie += 1 
      }return neopasnie += 1
    })
    
 console.log(opasnie);
console.log(neopasnie);

const xcc = opasnie/butka.length *100
const ggg = neopasnie/butka.length *100

console.log(`${ggg}%`);
console.log(`${xcc}%`);

let map = butka.map(r => r.split('|').filter(r =>r)).map(rr => rr.map(rrr => rrr.trim()))



const kkk = map.filter(raw=>raw[1].split(',')[0] === 'Леса')
function lll(years){
  if(years.includes('-')){
    return((Number(years.split('-')[0]) + Number(years.split('-')[1].split(' ')[0]))/2)
  }return Number(years)
}
console.log(kkk);

 
// END
}