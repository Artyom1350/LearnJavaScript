//График
let chart;
async function createChart() {
    let costs=await getCosts();
    costs.sort((a,b)=>(a.date-b.date));
    let data=new Map();
    for(let i=0;i<costs.length;i++){
        date=new Date(costs[i].date);
        date=getWeekDay(date);
        if(costs[i].date>Date.now()-604800000){
            if(data.has(date)){
                data.set(date,+data.get(date) + +costs[i].fullprice); 
            }
            else{
                data.set(date,costs[i].fullprice);
            }
        }
    }
    if(chart){
        chart.destroy();
    }
    var ctx = document.getElementById('chart');
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from(data.keys()),
        datasets: [{
          data: Array.from(data.values()),
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
}

//График всех доходов и расходов
async function createChartAll(){
    let incomes=await getIncomes();
    let costs=await getCosts();
    let incomeSumm=0;
    let costsSumm=0;
    for(let i=0;i<incomes.length;i++){
        incomeSumm+=+incomes[i].amount;
    }
    for(let i=0;i<costs.length;i++){
        for(let j=0;j<costs[i].items.length;j++){
            costsSumm+=+costs[i].items[j].price;
        }
    }
    let pMas=chartAll.getElementsByTagName('p');
    pMas[0].innerHTML=`Доходы (${incomeSumm})`;
    pMas[1].innerHTML=`Расходы (${costsSumm})`;
    let green=chartAll.children[0].children[0].children[1];
    let red=chartAll.children[0].children[1].children[1];
    function sliceHeight(){
        if(parseFloat(red.style.height)>600){
            red.style.height=(parseFloat(red.style.height)/2)+'px';
            green.style.height=(parseFloat(green.style.height)/2)+'px';
            sliceHeight();
        }
        return;
    }
    let ratio=incomeSumm/costsSumm;
    ratio=costsSumm/incomeSumm;
    red.style.height=(400*ratio).toFixed()+"px";
    sliceHeight();
}

