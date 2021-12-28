function mathNumber(value) {
    const solution = document.getElementById('math-solution');
    const numberInput = document.getElementById('math-display');
    if(solution.innerText != ''){
        solution.innerText = '';
        numberInput.innerText = '';
    }
    const newNumber = numberInput.innerText + value;
    numberInput.innerText = newNumber;
    new Audio('keyboardPress.mp3').play();
}

function deleteLast(){
    const numberInput = document.getElementById('math-display');
    const newNumber = numberInput.innerText.slice(0, -1);
    numberInput.innerText = newNumber;
    new Audio('keyboardPress.mp3').play();
}

function mathEquation(equation){
    const numberInput = document.getElementById('math-display').innerText;
    const lastChar = numberInput.charAt(numberInput.length - 1);
    let removeLast = numberInput;
    if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/'){
        removeLast = numberInput.slice(0, -1)
    }

    const newNumber = removeLast + equation;
    document.getElementById('math-display').innerText = newNumber;

    if(lastChar == ''){
        document.getElementById('math-display').innerText = '';
    }
    new Audio('keyboardPress.mp3').play();
}

function mathEqual(id){
    const totalNumberInput = document.getElementById('math-display').innerText;
    let totalNumber;
    if(id == 'equal'){
        totalNumber = eval(totalNumberInput);
    }
    if(id == 'sqrt'){
        totalNumber = Math.sqrt(totalNumberInput);
        document.getElementById('math-display').innerText = '√' + totalNumberInput;
    }
    const totalNumberString = totalNumber + '';
    let [x, y] = totalNumberString.split('.');
    if(y == undefined){
        document.getElementById('math-solution').innerText = x ;
    }
    if(y != undefined){
        y = y.slice(0, 2);
        document.getElementById('math-solution').innerText = x + '.' + y;
    }
    new Audio('notification.mp3').play();
}

