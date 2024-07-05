function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);


    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);



    const area = 0.5 * base * height;
    // console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    const widthFiled = document.getElementById('rectangle-width');
    const widthValueText = widthFiled.value;
    const width = parseFloat(widthValueText);
    // console.log(width)


    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

        if(isNaN(width) || isNaN(length) ){
            alert('is a string change the set number');
            return;
            // console.log('is a string')
        }

    const area = width * length;
    // console.log(area);

    const rectangleArea =document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}


// user reduce ---> 
function calculateParallelogram(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')

    if(isNaN(base) || isNaN(height) ){
        alert('is a string change the set number');
        return;
        // console.log('is a string')
    }

    const area = base * height;
    console.log(area)
    setElementInnerText('parallelogram-area',area)

    // add to calculation
    addToCalculationEntry('parallelogram', area)
}

function calculateEllips(){
    const major = getInputValue('ellips-major-radius');
    const minor = getInputValue('ellips-minor-radius');

    const area = 3.1416 * major * minor;
    setElementInnerText('ellips-area',area) ;
}






function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const input = parseFloat(inputValueText);
    // console.log(input);
    inputField.value = ''
    return input;
}

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}




// add to area calculation
function addToCalculationEntry(areaType , area){
    // console.log(areaType + ' ' + area);      
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.classList.add('pl-4')
    // p.innerHTML = areaType + ' ' +  area;
    p.innerHTML = `
        ${count+1} . ${areaType} ${area} cm<sup>2</sup>
        <btn class='btn btn-sm btn-success'>Convert</btn>
    `
    calculationEntry.appendChild(p);

}


