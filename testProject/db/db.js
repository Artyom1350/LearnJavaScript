

let DB;

init();

async function init(){
    DB=await idb.openDb('moneyCounter',1,db=>{
        db.createObjectStore('costs',{keyPath: 'date'});
        db.createObjectStore('incomes',{keyPath: 'date'});
    });
}

async function addCost(){
    let input=DB.transaction('costs','readwrite');

    input.objectStore('costs').add(createCost('Магазин1','Еда',[{name:'item1',price:10},{name:'item2',price:10},{name:'item3',price:10}]));
    input.objectStore('costs').add(createCost('Магазин2','Еда',[{name:'item1',price:10},{name:'item2',price:10},{name:'item3',price:10}]));
    input.objectStore('costs').add(createCost('Магазин3','Еда',[{name:'item1',price:10},{name:'item2',price:10},{name:'item3',price:10}]));

}











//Макеты объектов

function createCost(store,category,items){
    return {
        store:store,
        category:category,
        items:items,
        fullprice:items.reduce((a,b)=>(a.price+b.price)),
        date:Date.now(),
    }
}

function createIncome(name,amount){
    return {
        name:name,
        amount:amount,
        date:Date.now(),
    }
}


/*let cost={
    store, //магазин 
    category, //категория товара(еда, вещи и т.д.)
    items:[
        {name,
        price}
    ],
    fullprice:()=>((this.items.price)),
    date:Date.now()
};

let income={
    name,

}
*/

