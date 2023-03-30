//Валидация
function validate(elem){
    if(elem.dataset.validate=='string'){ 
        bool=true;
        for(let i=0;i<elem.value.split('').length;i++){
            if(isFinite(elem.value.split('')[i])){
                bool=false;
                break;
            }
        }
        if(elem.value.trim()=='') bool=false;
        if(bool){
            elem.className='form-control is-valid';
        } else elem.className='form-control is-invalid';
    }
    else if(elem.dataset.validate=='number'){
        bool=true;
        for(let i=0;i<elem.value.split('').length;i++){
            if(!isFinite(elem.value.split('')[i])){
                bool=false;
                break;
            }
        }
        if(elem.value.trim()=='') bool=false;
        if(bool){
            elem.className='form-control is-valid';
        } else elem.className='form-control is-invalid';
    }
    else if(elem.dataset.validate=='date'){
        if(elem.value=='' || elem.value==null || new Date(elem.value).getTime()>Date.now()){
            elem.className='form-control is-invalid';
            return false;
        }
        elem.className='form-control is-valid';
        return true;
    }
}

function validateCostModal(){
    let elements=bodyCostModal.querySelectorAll('[data-validate]');
    for(let i=0;i<elements.length;i++){
        validate(elements[i]);
    }
    elements=bodyCostModal.querySelectorAll('[data-validate]');
    bool=true;
    for(let i=0;i<elements.length;i++){
        if(elements[i].className.includes('is-invalid')){
            bool=false;
            break;
        }
    }       
    return bool;
}

function validateIncomeModal(){
    let elements=bodyIncomeModal.querySelectorAll('[data-validate]');
    for(let i=0;i<elements.length;i++){
        validate(elements[i]);
    }
    elements=bodyIncomeModal.querySelectorAll('[data-validate]');
    bool=true;
    for(let i=0;i<elements.length;i++){
        if(elements[i].className.includes('is-invalid')){
            bool=false;
            break;
        }
    }       
    return bool;
}

//валидация при вводе
document.addEventListener('keyup',function(event){
    if(event.target.dataset.validate!=undefined){
        validate(event.target);
    }
});

