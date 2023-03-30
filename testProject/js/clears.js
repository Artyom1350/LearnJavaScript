//Очистка инпутов при закрытии модального окна
function clearModalCosts(){
    console.log('modal clear!');
    store.value='';
    category.value='';
    dateCost.value='';
    dateCost.className='form-control';
    store.className='form-control';
    category.className='form-control';
    addBtnModalCost.innerHTML='Добавить';
    addBtnModalCost.onclick=function(){
        addNewCost();
    }
    addNewCostModal.getElementsByTagName('h5')[0].innerHTML="Добавление нового расхода";
    let tbody=tableCostItem.children[1];
    tbody.innerHTML="<td><input type='text' class='form-control' data-validate='string' name='tovarName'></td><td><input type='text' class='form-control' data-validate='number' name='tovarCount'></th><th><input type='text' class='form-control' data-validate='number' name='tovarPrice'></td><td><button class='btn btn-danger' onclick='removeStroke(event)'>Удалить</button></td>";
}
//Очистка модального окна доходов
function clearModalIncome(){
    nameIncome.value='';
    countIncome.value='';
    dateIncome.value='';
    nameIncome.className='form-control';
    countIncome.className='form-control';
    dateIncome.className='form-control';
    addBtnModalIncome.innerHTML='Добавить';
    addNewIncomeModal.getElementsByTagName('h5')[0].innerHTML="Добавление нового дохода";
    addBtnModalIncome.onclick=function(){
        addNewIncome();
    }
}
