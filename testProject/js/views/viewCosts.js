//Вывод расходов в таблицу
async function viewCosts(){
    createChart();
    createChartAll();
    let tbody=costsTable.children[1];
    let costs=await getCosts();
    costs=costs.sort((a,b)=>(b.date-a.date));
    viewResult();
    tbody.innerHTML='';
    let summ=0;
    if(costs.length){
        for(let i=0;i<costs.length;i++){
            summ+=+costs[i].fullprice;
            //Создание tr и td
            let tr=document.createElement('tr');
            let tdStore=document.createElement('td');
            let tdCategory=document.createElement('td');
            let tdTovars=document.createElement('td');
            let tdPrice=document.createElement('td');
            let tdDate=document.createElement('td');
            let redactBtnTd=document.createElement('td');
            let delBtnTd=document.createElement('td');
            //кнопки для td
            //кнопка редактирования
            let redactBtn=document.createElement('button');
            redactBtn.value=costs[i].id;
            redactBtn.className="btn btn-primary";
            redactBtn.textContent="Редактировать";
            redactBtn.setAttribute('data-bs-target',"#addNewCostModal");
            redactBtn.setAttribute('data-bs-toggle',"modal");
            redactBtn.onclick=function(){
                viewRedactCost(this.value);
            };
            redactBtnTd.append(redactBtn);
            //кнопка удаления
            let delBtn=document.createElement('button');
            delBtn.value=costs[i].id;
            delBtn.className="btn btn-danger";
            delBtn.textContent="Удалить";
            delBtn.onclick=function(){
                if(confirm('Точно хотите удалить?')){
                    removeCost(this.value);
                }
            };
            delBtnTd.append(delBtn);
            //стандартные данные
            tdStore.innerHTML=costs[i].store;
            tdCategory.innerHTML=costs[i].category;    
            let date=convertDate(new Date(costs[i].date));
            tdDate.innerHTML=date;
            //перебор товаров в покупке
            let items='';
            for(let j=0;j<costs[i].items.length;j++){
                items+=costs[i].items[j].name+": "+costs[i].items[j].amount+", ";
            }
            items=items.slice(0,items.length-2);
            tdTovars.innerHTML=items;
            tdPrice.innerHTML=costs[i].fullprice+' Рлк.';
            //занесение в tr
            tr.append(tdStore);
            tr.append(tdCategory);
            tr.append(tdTovars);
            tr.append(tdPrice);
            tr.append(tdDate);
            tr.append(redactBtnTd);
            tr.append(delBtnTd);
            //занесение в таблицу
            tbody.append(tr);
        }
        let summTr=document.createElement('tr');
        summTr.innerHTML=`<tr><td><b>Итого</b></td><td></td><td></td><td> ${summ} Рлк. </td><td></td><td></td><td></td></tr>`
        tbody.append(summTr);
    }
    else{
        tbody.innerHTML='Записей еще нет!'
    }
}

//Показ редактируемого расхода
async function viewRedactCost(id){
    clearModalCosts();
    addBtnModalCost.innerHTML='Изменить';
    addBtnModalCost.value=id;
    addBtnModalCost.onclick=function(){
        redactCost(this.value);
    }
    addNewCostModal.getElementsByTagName('h5')[0].innerHTML="Изменение расхода";
    let obj=await getCosts(id);
    dateCost.value=convertDate(new Date(obj.date));
    store.value=obj.store;
    category.value=obj.category;
    let tbody=tableCostItem.children[1];
    tbody.innerHTML='';
    for(let i=0;i<obj.items.length;i++){
        let tr=document.createElement('tr');
        tr.innerHTML=`<td><input type='text' class='form-control' name='tovarName' data-validate='tovarName' value='${obj.items[i].name}'></td><td><input type='text' class='form-control' data-validate='tovarCount' name='tovarCount' value='${obj.items[i].amount}'></td><td><input type='text' class='form-control' data-validate='tovarPrice' name='tovarPrice' value='${obj.items[i].price}'></td><td><button class='btn btn-danger' onclick='removeStroke(event)'>Удалить</button></td>`
        tbody.append(tr);
    }
}
