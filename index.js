

function main1(){
      let input= document.getElementById(`input`).value;
      let s1= '';
            for (let index = 1; index <= input; index++) {
      let row = '';

            for(let index1 =1; index1 <=input; index1++) {
             row += ` * `   
            }               
            s1 += row+ "<br>" 
            }
            document.getElementById(`s1`).innerHTML=s1;
}

function main2(){
      let input2= document.getElementById(`input2`).value;
      let s1= '';
            for (let index3 = 1; index3 <= input2; index3++) {
      let row2 = '';
            for(let index4 =1; index4 <=index3; index4++) {
      row2 += ` * `   
            }               
      s1 += row2+ "<br>" 
            }
            document.getElementById(`s1`).innerHTML=s1;
}
function main3() {
      let input3= document.getElementById(`input3`).value;
      let s1= '';
            for (let index5 = 1; index5 <= input3; index5++) {
      let row3= ' ';
            for (let index6 = 1; index6 <= input3-index5; index6++) {
      row3 += ` * `
            }
      s1 += row3+ "<br>"
            }
      document.getElementById(`s1`).innerHTML=s1;
}