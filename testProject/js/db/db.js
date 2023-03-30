 //Инициализация бд
 let db;
 init();
 async function init(){
     db=await idb.openDb('moneyCounterDb',1,db=>{
         db.createObjectStore('costs',{keyPath: 'id'});
         db.createObjectStore('incomes',{keyPath: 'id'});
     });  
     viewIncomes();
     viewCosts(); 
     viewResult(); 
     createChart();
     createChartAll();
 };

  //Удаление затраты          
async function removeCost(id){
    let tr=db.transaction('costs','readwrite');
    let costsStore=tr.objectStore('costs');            
    await costsStore.delete(+id);
    viewCosts();
}

//Удаление дохода
async function removeIncome(id){
    let tr=db.transaction('incomes','readwrite');
    let costsStore=tr.objectStore('incomes');            
    await costsStore.delete(+id);
    viewIncomes();
}

//Получение затрат
async function getCosts(id){
    let tr=db.transaction('costs');
    let costsStore=tr.objectStore('costs');
    if(id){
        let cost=costsStore.get(+id);
        return cost;
    }
    costs=await costsStore.getAll();
    return costs;
};

//Получение доходов
async function getIncomes(id){
    let tr=db.transaction('incomes');
    let incomesStore=tr.objectStore('incomes');
    if(id){
        let income=incomesStore.get(+id);
        return income;
    }
    let incomes=incomesStore.getAll();
    return incomes;
}

//Добавление расхода
async function addCost(obj){
    let tx=db.transaction('costs','readwrite');
    let request =await tx.objectStore('costs').add(obj);
    request.onerror=function(event){
        if(event.error.name=='ConstraintError'){
            //Позже допишу
        }
    }
};

//Изменение расхода
async function redCost(obj){
    let tx=db.transaction('costs','readwrite');
    await tx.objectStore('costs').put(obj);
};

//Изменение дохода
async function redIncome(obj){
    let tx=db.transaction('incomes','readwrite');
    await tx.objectStore('incomes').put(obj);  
}

//Добавление дохода
async function addIncome(obj){
    let tx=db.transaction('incomes','readwrite');
    let request=await tx.objectStore('incomes').add(obj);
    request.onerror=function(event){
        if(event.error.name=='ConstraintError'){
            //Позже допишу
        }
    }
}

//Объекты

//Расход
function createCost(store,category,items,date){
    let fullPrice;
    if(items.length>1){
        fullPrice=summPriceItems(items);
    }
    else{
        fullPrice=items[0].price;
    }
    return {
        id:getRandomId(),
        store:store,
        category:category,
        items:items,
        fullprice:fullPrice,
        date:new Date(date).getTime(),
    }
}

//Доход
function createIncome(name,amount,date){
    return {
        id:getRandomId(),
        name:name,
        amount:amount,
        date:new Date(date).getTime(),
    }
}






