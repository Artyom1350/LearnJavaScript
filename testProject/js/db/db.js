//Инициализация бд
let db;
init();
async function init(){
    db=await idb.openDb('moneyCounterDb',1,db=>{
        db.createObjectStore('costs',{keyPath: 'id'});
        db.createObjectStore('incomes',{keyPath: 'id'});
    });    
};

//Получение затрат
export async function getCosts(){
    let tr=db.transaction('costs');
    let costsStore=tr.objectStore('costs');
    let costs=costsStore.getAll();
    return costs;
};

//Получение доходов
async function getIncomes(){
    let tr=db.transaction('incomes');
    let incomesStore=tr.objectStore('incomes');
    let incomes=incomesStore.getAll();
    return incomes;
}

//Добавление расхода
async function addCost(store,category,items){
    let tx=db.transaction('costs','readwrite');
    let request =await tx.objectStore('costs').add(createCost(store,category,items));
    request.onerror=function(event){
        if(event.error.name=='ConstraintError'){
            //Позже допишу
        }
    }
};

//Добавление дохода
async function addIncome(name,amount){
    let tx=db.transaction('incomes','readwrite');
    let request=await tx.objectStore('incomes').add(createIncome(name,amount));
    request.onerror=function(event){
        if(event.error.name=='ConstraintError'){
            //Позже допишу
        }
    }
}

//Рандомный id
function getRandomId(){
    return +(1+Math.random()*(1e6-1)).toFixed();
}
//Объекты для добавления

//Расход
function createCost(store,category,items){
    return {
        id:getRandomId(),
        store:store,
        category:category,
        items:items,
        fullprice:items.reduce((a,b)=>(a.price+b.price)),
        date:Date.now(),
    }
}
//Доход
function createIncome(name,amount){
    return {
        id:getRandomId(),
        name:name,
        amount:amount,
        date:Date.now(),
    }
}
