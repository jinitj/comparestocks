
function getdata(){
    market=document.getElementById('market').value
    stockname=document.getElementById('stockname1').value
    finalname=market+":"+stockname
    //temp2=temp2+":MARUTI"
    interval=document.getElementById('interval')
    if(interval==1){
    url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+finalname+"&apikey=YEJWV4TPFVYUPNX3&outputsize=full"}
    else{
        url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+finalname+"&interval=1min&apikey=YEJWV4TPFVYUPNX3"
    }
    sp=[]
    intrvl=[]
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
          //console.log(myJson)
    console.log(myJson['Meta Data']["2. Symbol"])
        
     //console.log(myJson['Time Series (1min)'])
     temp=myJson['Time Series (1min)']
     for (let country of Object.keys(temp)) {
        let capital = temp[country]['4. close'];
        
      
       let time=country.split(' ')[1].split(':')
       let hours=parseInt(time[0])+10
       let minutes=parseInt(time[1])+30
       if(minutes>59){
         hours=hours+1
         minutes=minutes-60
       }
       sp.push(capital)
       final=hours//+":"+minutes
       intrvl.push(final)
       //console.log(hours,":Hours",minutes,":minutes","price:",capital)
       
    }
    });
    }
    
    
    
    function makechart(){

     /* 
    let mychart=document.getElementById('mychart').getContext('2d')
    
    //console.log("started makechart")
    let masspopchart=new Chart(mychart,{
        
        type:'line',
        data:{
            labels:intrvl,//['open','close','high','low'],//intrvl,//['open','close','high','low'],
            
            datasets:[{
                label:'stocks',
                backgroundColor:'rgb(0,99,132)',
                borderColor:'rgb(0,99,132)',
                data:sp,//[10,20,30,40,50]//sp
                fill:false
            }],
            
        },
        options:{}
    })
    
    */


//mixed chart 

let mychart=document.getElementById('mychart').getContext('2d')
/*
let options = {
  scales: {
      yAxes: [{
          ticks: {
              max: 3000,
              min: 0,
              stepSize: 300
          }
      }]
  }
};


    let mixedChart = new Chart(mychart, {
    type: 'line',
    data: {
        datasets: [{
            label: 'line Dataset',
            data: sp
        }, {
            label: 'Line Dataset',
            data: sp2,
            fill:false,
            // Changes this dataset to become a line
            type: 'line'
        }],
        labels:intrvl2//[500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000,8500]
    },
    options: options
});
*/

let mymultiaxisChart = new Chart(mychart, {
  type: 'line',
  data: {
      datasets: [{
          data: sp,
          label: finalname,
          backgroundColor:'rgb(0,99,132)',
          borderColor:'rgb(0,99,132)',
          //data:sp,//[10,20,30,40,50]//sp
          fill:false,

          // This binds the dataset to the left y axis
          yAxisID: 'left-y-axis'
      }, {
          data: sp2,
          label: finalname2,
          backgroundColor:'rgb(255,160,0)',
          borderColor:'rgb(255,160,0)',
          //data:sp,//[10,20,30,40,50]//sp
          fill:false,

          // This binds the dataset to the right y axis
          yAxisID: 'right-y-axis'
      }],
      labels: intrvl2
  },
  options: {
      scales: {
          yAxes: [{
              id: 'left-y-axis',
              type: 'linear',
              position: 'left',
              ticks: {
                fontColor: 'rgb(0,99,132)', // this here
              },
          }, {
              id: 'right-y-axis',
              type: 'linear',
              position: 'right',
              ticks: {
                fontColor: 'rgb(255,160,0)', // this here
              },
          }]
      }
  }
});

    }
    
    
    
    
    
    function myFunction() {
        setTimeout(makechart, 6000);
      }
    
    


function getdata2(){
    market=document.getElementById('market').value
    stockname2=document.getElementById('stockname2').value
    finalname2=market+":"+stockname2
    //temp2=temp2+":MARUTI"
    interval=document.getElementById('interval')
    if(interval==1){
    url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+finalname2+"&apikey=YEJWV4TPFVYUPNX3&outputsize=full"}
    else{
        url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+finalname2+"&interval=1min&apikey=YEJWV4TPFVYUPNX3"
    }
    sp2=[]
    intrvl2=[]
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
          //console.log(myJson)
    console.log(myJson['Meta Data']["2. Symbol"])
        
     //console.log(myJson['Time Series (1min)'])
     temp=myJson['Time Series (1min)']
     for (let country of Object.keys(temp)) {
        let capital = temp[country]['4. close'];
        /*
        let time=country.split(' ')
        hours=parseInt(time[1].split(':')[0])+10
        let minutes=parseInt(time[1].split(':')[1])+10
        console.log("Hours:",hours)
        console.log(time[1],":", capital);
        */
      
       let time=country.split(' ')[1].split(':')
       let hours=parseInt(time[0])+10
       let minutes=parseInt(time[1])+30
       if(minutes>59){
         hours=hours+1
         minutes=minutes-60
       }
       sp2.push(capital)
       final2=hours//+":"+minutes
       intrvl2.push(final2)
       //console.log(hours,":Hours",minutes,":minutes","price:",capital)
       
    }
    });
    }



    function makechart2(){
        let mychart=document.getElementById('mychart2').getContext('2d')
        
        //console.log("started makechart")
        let masspopchart=new Chart(mychart,{
            
            type:'line',
            data:{
                labels:intrvl2,//['open','close','high','low'],//intrvl,//['open','close','high','low'],
                
                datasets:[{
                    label:'stocks',
                    backgroundColor:'rgb(0,99,132)',
                    borderColor:'rgb(0,99,132)',
                    data:sp2,//[10,20,30,40,50]//sp
                    fill:false
                }],
                
            },
            options:{}
        })
        
        //makechart()
        }


















    //getdata()
    //makechart()
    //myFunction()


function gettotaldata(){

    getdata();
    getdata2();
    myFunction();
}



    function myFunction2() {
        setTimeout(makechart2, 3000);
      }
    //getdata2()

    let draw_combined=document.getElementById('draw_combined')

    draw_combined.addEventListener('click',gettotaldata)
    //myFunction()
   // myFunction2()
