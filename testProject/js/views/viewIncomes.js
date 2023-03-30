//Вывод всех доходов
async function viewIncomes(){
    createChartAll();
    let tbody=incomeTable.children[1];
    let incomes=await getIncomes();
    incomes=incomes.sort((a,b)=>(b.date-a.date));
    viewResult();
    if(incomes.length){
        let summ=0;
        tbody.innerHTML='';
        for(let i=0;i<incomes.length;i++){
            summ+=incomes[i].amount;
            let tr=document.createElement('tr');
            let nameTd=document.createElement('td');
            let amountTd=document.createElement('td');
            let dateTd=document.createElement('td');
            let redactBtnTd=document.createElement('td');
            let delBtnTd=document.createElement('td');
            //кнопки для td
            //кнопка редактирования
            let redactBtn=document.createElement('button');
            redactBtn.value=incomes[i].id;
            redactBtn.className="btn btn-primary";
            redactBtn.textContent="Редактировать";
            redactBtn.setAttribute('data-bs-target',"#addNewIncomeModal");
            redactBtn.setAttribute('data-bs-toggle',"modal");
            redactBtn.onclick=function(){
                viewRedactIncome(this.value);
            };
            redactBtnTd.append(redactBtn);
            //кнопка удаления
            let delBtn=document.createElement('button');
            delBtn.value=incomes[i].id;
            delBtn.className="btn btn-danger";
            delBtn.textContent="Удалить";
            delBtn.onclick=function(){
                if(confirm('Точно хотите удалить?')){
                    removeIncome(this.value);
                }
            };
            delBtnTd.append(delBtn);
            nameTd.innerHTML=incomes[i].name;
            amountTd.innerHTML=incomes[i].amount+ ' Рлк.';
            let date=convertDate(new Date(incomes[i].date));
            dateTd.innerHTML=date;
            tr.append(nameTd);
            tr.append(amountTd);
            tr.append(dateTd);
            tr.append(redactBtnTd);
            tr.append(delBtnTd);
            tbody.append(tr);
        }
        let summTr=document.createElement('tr');
        summTr.innerHTML=`<tr><td><b>Итого</b></td><td>${summ} Рлк.</td><td></td><td></td><td></td></tr>`;
        tbody.append(summTr);
    }
    else{
        tbody.innerHTML="Доходов пока что нет"
    }
}

//Показ редактируемого дохода
async function viewRedactIncome(id){
    clearModalIncome();
    let income=await getIncomes(id);
    dateIncome.value=convertDate(new Date(income.date))
    nameIncome.value=income.name;
    countIncome.value=income.amount;
    addBtnModalIncome.innerHTML='Изменить';
    addBtnModalIncome.value=id;
    addBtnModalIncome.onclick=function(){
        redactIncome(this.value);
    }
    addNewIncomeModal.getElementsByTagName('h5')[0].innerHTML="Изменение дохода";
} 

