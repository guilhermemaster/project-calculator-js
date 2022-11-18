function cleanInput(){
    document.querySelector("#valuePrime").value = '';
    document.querySelector("#valueSecond").value = '';   
    document.querySelector('#valueResult').value = '';
}

function capValuesSum()
{    
    let valuePrime = document.querySelector("#valuePrime").value;
    let valueSecond = document.querySelector("#valueSecond").value;

    if (valuePrime == '' || valueSecond == ''){
        alert("Não deixe os campos vazios!!!");
    } else {
        document.querySelector('#valueResult').value = parseFloat(valuePrime) + parseFloat(valueSecond);
    }       
}

function capValuesDecrease()
{    
    let valuePrime = document.querySelector("#valuePrime").value;
    let valueSecond = document.querySelector("#valueSecond").value;
   
    if (valuePrime == '' || valueSecond == ''){
        alert("Não deixe os campos vazios!!!");
    } else {
        document.querySelector('#valueResult').value = parseFloat(valuePrime) - parseFloat(valueSecond);
    }
}

function capValuesMultiply()
{    
    let valuePrime = document.querySelector("#valuePrime").value;
    let valueSecond = document.querySelector("#valueSecond").value;
   
    if (valuePrime == '' || valueSecond == ''){
        alert("Não deixe os campos vazios!!!");
    } else {
        document.querySelector('#valueResult').value = parseFloat(valuePrime) * parseFloat(valueSecond);
    }
}

function capValuesShare()
{    
    let valuePrime = document.querySelector("#valuePrime").value;
    let valueSecond = document.querySelector("#valueSecond").value;

    if (valueSecond > 0){
        if (valuePrime == '' || valueSecond == ''){
            alert("Não deixe os campos vazios!!!");
        } else {
            document.querySelector('#valueResult').value = parseFloat(valuePrime) / parseFloat(valueSecond);
        }
    } else {        
        document.querySelector('#valueResult').value = 'ERRO';
    }  
    
}