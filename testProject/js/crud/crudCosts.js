//Добавление новой затраты
async function addNewCost(){
    if(!validateCostModal()) return;
    let items=tableCostItem.children[1].children;
    let tovars=[];
    for(let i=0;i<items.length;i++){
        tovars.push({name: items[i].getElementsByTagName('input')[0].value, 
            amount: items[i].getElementsByTagName('input')[1].value,
            price: items[i].getElementsByTagName('input')[2].value
        })
    }
    let cost=createCost(store.value,category.value,tovars,dateCost.value);
    await addCost(cost);
    closeCost.click();
    clearModalCosts();
    viewCosts();
}

//Редактирование расхода
async function redactCost(id){
    let cost=await getCosts(id);
    if(!validateCostModal()) return;
    cost.store=store.value;
    cost.category=category.value;
    cost.date=new Date(dateCost.value);
    let items=tableCostItem.children[1].children;
    let tovars=[];
    for(let i=0;i<items.length;i++){
        tovars.push({name: items[i].getElementsByTagName('input')[0].value, 
            amount: items[i].getElementsByTagName('input')[1].value,
            price: items[i].getElementsByTagName('input')[2].value
        })
    }
    if(items.length>1){
        cost.fullprice=summPriceItems(tovars);
    }
    else{
        cost.fullprice=tovars[0].price;
    }
    cost.items=tovars;
    redCost(cost);
    closeCost.click();
    clearModalCosts();
    viewCosts();
}
function summPriceItems(items){
    let summ=0;
    for(let i=0;i<items.length;i++){
        summ+=+items[i].price;
    }
    return summ;
}
