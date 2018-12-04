function numbHandlers(){

    document.getElementById('one').addEventListener ('click', function(){ pressNumberButton(1)});
    document.getElementById('two').addEventListener ('click', function(){ pressNumberButton(2)});
    document.getElementById('three').addEventListener ('click', function(){ pressNumberButton(3)});
    document.getElementById('four').addEventListener ('click', function(){pressNumberButton(4)});
    document.getElementById('five').addEventListener ('click', function(){pressNumberButton(5)});
    document.getElementById('six').addEventListener ('click', function(){pressNumberButton(6)});
    document.getElementById('seven').addEventListener ('click', function(){pressNumberButton(7)});
    document.getElementById('eight').addEventListener ('click', function(){pressNumberButton(8)});
    document.getElementById('nine').addEventListener ('click', function(){pressNumberButton(9)});
    document.getElementById('zero').addEventListener ('click', function(){pressNumberButton(0)});
    document.getElementById('addition').addEventListener ('click', function(){pressOperatorButton('+')} );
    document.getElementById('minus').addEventListener ('click', function(){pressOperatorButton('-')} );
    document.getElementById('divide').addEventListener ('click', function(){pressOperatorButton('/')});
    document.getElementById('multiply').addEventListener ('click', function(){pressOperatorButton('*')});
    document.getElementById('decimal').addEventListener ('click', function(){pressNumberButton('.')});
    document.getElementById('modulus').addEventListener ('click', function(){pressOperatorButton('%')});
    document.getElementById('smile').addEventListener ('click', function(){ alert('No functiont yet, stop stressing me out!!')   });

    document.getElementById('clear').addEventListener ('click', init);
    document.getElementById('back').addEventListener ('click', pressBckButton );
    document.getElementById('equal').addEventListener ('click', equalsto)
   
};numbHandlers()





function init(){
    document.querySelector('#display').value = 0
    operatorClicked = false;
    something = false;
};
init();

var operatorClicked = false;
var operator = '';
var getnumb = 0;
var answer = 0;
var something;


function pressNumberButton(btn){
    var display = document.querySelector('#display');

    //if (display.value.length <=10){
        if(operatorClicked) {
            display.value = btn;
            operatorClicked = false;
            something = true        //so that when the operator is clicked again, it adds the solution
        } else if (display.value === '0'){
            display.value = btn;
            operatorClicked = false;
        }else{
            display.value += btn;
            
            }
        }//else{
           // alert('There is a limit dumbass')
       // }
   //}

function pressOperatorButton(btn){
    //get string in display
    if (something){
        equalsto()
        getnumb = document.querySelector('#display').value;
        operator = btn;
        operatorClicked = true;
        something = false;
    }else{
        getnumb = document.querySelector('#display').value;
        operator = btn;
        operatorClicked = true;
    }
}
    
function pressBckButton(){
    var getnumb = document.querySelector('#display').value;
    getnumb = getnumb.substring(0, getnumb.length-1)
    display.value = getnumb
}

function equalsto(){
    var numb2 = document.querySelector('#display').value
    console.log(numb2)

    switch(operator) {
        case '+':
            answer = parseFloat(getnumb) + parseFloat(numb2);
            break;
        case '-':
            answer = parseFloat(getnumb) - parseFloat(numb2);
            break;
        case '/':
            answer = parseFloat(getnumb) / parseFloat(numb2);
            break;
        case '*':
            answer = parseFloat(getnumb) * parseFloat(numb2);
            break;
        case '%':
            answer = parseFloat(getnumb) % parseFloat(numb2);
            break;
        default:
            alert("Fuck you granpa John!");
            break;        
    }
    document.querySelector('#display').value = answer;
    operatorClicked = true;
}



