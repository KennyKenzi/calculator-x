
//handle actions for the main buttons
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

    document.getElementById('smile').addEventListener ('click', smile);
    document.getElementById('clear').addEventListener ('click', init);
    document.getElementById('back').addEventListener ('click', pressBckButton );
    document.getElementById('equal').addEventListener ('click', equalsto);
    
    
};
numbHandlers();


//handle action for the extended button
function extentionHandlers(){
    document.getElementById('ext0').addEventListener ('click', function(){pressOperatorButton('sqrt')});
    document.getElementById('ext1').addEventListener ('click', function(){pressOperatorButton('onex')});
    document.getElementById('ext2').addEventListener ('click', function(){pressOperatorButton('xy')});
    document.getElementById('ext3').addEventListener ('click', function(){pressOperatorButton('x2')});

    document.getElementById('ext4').addEventListener ('click', function(){pressNumberButton('00')});
}




var operatorClicked = false
var operator = '';
var numb1 ;
var numb2 ;
var answer;
var number2Clicked = false;
var equalClicked = false;

function init(){
    document.querySelector('#display').value = 0
    operatorClicked = false;
    number2Clicked = false;
    equalClicked = false
    operator = '';
    numb1 = 0;
    numb2 = 0;
    answer = 0;
    console.log(operatorClicked, number2Clicked, equalClicked)
};
init();






function extendCalc(){

    document.querySelector('.form').style.width = '70%';
    document.querySelector('.form').style.transition = 'width 0.5s'
    allRows = document.querySelectorAll('.rowCalc');
    //console.log(allRows)
    allRows.forEach((el, i )=> {
        
        var newDiv = el.appendChild(document.createElement('td'));
        newDiv.className = 'buttoncontainer newbuttonContainer';
        newDiv.innerHTML= `<input class="btn newBtn nBt${+i}" id = "ext${+i}" type="button" /></input>`;
       // console.log(i)
        var test = 'x'+'y'.sup();

       switch (i){
            case 0:
                console.log()
              document.querySelector('.nBt'+i).value= "√";
               break;
            case 1:
                document.querySelector('.nBt'+i).value = '1/x';
                
                break;
            case 2:
                document.querySelector('.nBt'+i).value= 'x\u02b8';
                break;
            case 3:
                document.querySelector('.nBt'+i).value = "x\u00b2";
                break;
            case 4:
                document.querySelector('.nBt'+i).value = '00';
                break;
            default:
                newDiv.value = 'N/A';
       }
       
    });
    
    var btns= document.querySelectorAll('.newBtn')
    btns.forEach(btn => {
        btn.style.backgroundColor = '#5cb85c';
    });

    document.querySelector('#smile').value = ':(';
    extentionHandlers()
}



function returnCalc(){

    var newElement = document.querySelectorAll('.newbuttonContainer')
    newElement.forEach(el => {
        el.remove();
    });

    var btns= document.querySelectorAll('.btn')
    btns.forEach(btn => {
        btn.style.backgroundColor = 'rgb(223, 219, 219)';
    });
    document.querySelector('#smile').value = ':)';
    document.querySelector('.form').style.width = '50%'
}


function smile(){
    var emoji = document.querySelector('#smile').value;

    if (emoji === ':)'){ 
        //UI Change extending the calculator
        extendCalc();

    }else if (emoji === ':('){
        //return to original
        returnCalc()
    }
}


function pressNumberButton(btn){
    console.log(btn)
    var display = document.querySelector('#display');


            if(equalClicked){
                console.log('should reset')
                init()
                display.value = btn;

            }else if(operatorClicked) {
                display.value = btn;
                operatorClicked = false;
                number2Clicked = true   

            }else if (display.value === '0' ){
                display.value = btn;
                operatorClicked = false;
            }else{
                if (display.value.length < 10){
                    display.value += btn;
                }else {
                    display.value = display.value
                }
            }
            console.log(operatorClicked, number2Clicked, equalClicked)
            if(number2Clicked){
                numb2 = document.querySelector('#display').value
            } 
}



function pressOperatorButton(btn){
    
    if (number2Clicked){
        numb2 = document.querySelector('#display').value;
        operator = btn;
        operatorClicked = true;
        number2Clicked = false;
        equalClicked = false
        equalsto()
    } 
    else{
        numb1 = document.querySelector('#display').value;
        operator = btn;
        operatorClicked = true;
        equalClicked = false
    }

    if (btn==='onex'|| btn==='sqrt'|| btn==='x2'){
        numb1 = document.querySelector('#display').value;
        operator = btn;
        //init()
        operatorClicked = true;
        number2Clicked = false;
        equalsto()
        //equalClicked = false
    }
    console.log(operatorClicked, number2Clicked, equalClicked)
}

    
function pressBckButton(){
    var numb1 = document.querySelector('#display').value;
    numb1 = numb1.substring(0, numb1.length-1)
    display.value = numb1
    
}


function equalsto(){
    // var numb1 = numb1
    //console.log(operator)
        switch(operator) {

            case '+':
                answer = parseFloat(numb1) + parseFloat(numb2);
                break;
            case '-':
                answer = parseFloat(numb1) - parseFloat(numb2);
                break;
            case '/':
                answer = parseFloat(numb1) / parseFloat(numb2);
                break;
            case '*':
                answer = parseFloat(numb1) * parseFloat(numb2);
                break;
            case '%':
                answer = parseFloat(numb1) % parseFloat(numb2);
                break;
            case 'sqrt':
                answer = Math.sqrt(parseFloat(numb1));
                break;
            case 'onex':
                answer = 1/(parseFloat(numb1));
                break;
            case 'xy':
                answer = parseFloat(numb1)**parseFloat(numb2);
                break;
                case 'x2':
                answer = parseFloat(numb1)**2;
                break;
            default:
                alert("Input data");
                break;        
        }
        document.querySelector('#display').value = answer;
    
        console.log(operatorClicked, number2Clicked, equalClicked)

        

        if(operatorClicked){
            equalClicked = false
        }else {
            equalClicked = true
        }
    operatorClicked = false;
    number2Clicked = false;
    numb1 = answer;
    

    
 

}





