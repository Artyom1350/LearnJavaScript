//Добавление нового дохода
async function addNewIncome(){
    if(!validateIncomeModal()) return;
    let obj=createIncome(nameIncome.value, +countIncome.value,new Date(dateIncome.value));
    await addIncome(obj);
    closeIncomeModal.click();
    viewIncomes();
    clearModalIncome();
}
//Редактирование дохода
async function redactIncome(id){
    let income=await getIncomes(id);
    if(!validateIncomeModal()) return;
    income.name=nameIncome.value;
    income.amount=+countIncome.value;
    income.date=new Date(dateIncome.value);
    await redIncome(income);
    closeIncomeModal.click()
    clearModalIncome();
    viewIncomes();
}
