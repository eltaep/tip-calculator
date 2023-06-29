let input1=document.querySelector('#i1')
let input2=document.querySelector('#i2')
let select =document.querySelector('select')
let calk=document.querySelector('.calk')
let result=document.querySelector('.result')
let co=0;

let click=document.querySelector('.cl')
click.onclick=()=>{
    select.style.color='red';
    
}
calk.onclick=()=>{
    if(input1.value>0&&input2.value>0&&select.value!='no'){
      let as=(eval((input1.value*(select.value/100))/input2.value))
      result.innerHTML=as.toFixed(2)
       result.innerHTML+=' Dollar';
       input1.value=''
       input2.value=''
select.options[0].selected=true        
            result.classList.add('acc')
            co=1;
            setTimeout(()=>{
                if(co==1){
                    result.classList.remove('acc')
                }
                co=0;

            },1000)


    }
    
    
}
