`use strict`;

const food_info = []; 
const elm = document.getElementById("formID");
function Food(food_id, food_name, type, pric ) {
    this.food_id = food_id;
    this.food_name = food_name;
    this.type = type;
    this.pric = pric;

    food_info.push(this);
}



let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Food Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Type of Food";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Price";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);

thead.appendChild(row_1);




Food.prototype.print = function () {
  // Creating and adding data to first row of the table
let row_inside = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML =  this.food_id;
let heading_2 = document.createElement('th');
heading_2.innerHTML = this.food_name;
let heading_3 = document.createElement('th');
heading_3.innerHTML = this.type;
let heading_4 = document.createElement('th');
heading_4.innerHTML = this.pric;

row_inside.appendChild(heading_1);
row_inside.appendChild(heading_2);
row_inside.appendChild(heading_3);
row_inside.appendChild(heading_4);
tbody.appendChild(row_inside);



};



function getdata (){
  let retriveddata =  localStorage.getItem("food_info");
    let arr_data = JSON.parse(retriveddata);

    for(let i = 0; i < arr_data.length; i++){
        new Food(arr_data[i].food_id, arr_data[i].food_name, arr_data[i].type, arr_data[i].pric);
    }

    
    for(let i = 0; i < food_info.length; i++){
    food_info[i].print();
    }
};
getdata();

let button = document.getElementById("btm");
button.addEventListener('click', handleclick);

function handleclick() {

 let q =  confirm("ARE YOU SURE TO DELETE TABLE ?");
 if (q== true){localStorage.clear()};
};

 const namee = [];
 const price = [];
 const typee = [];
 

 for(let i = 0; i < food_info.length; i++){
 namee.push(food_info[i].food_name);
 price.push(food_info[i].pric)
 typee.push(food_info[i].type)
 };


 let Types = ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];

 
const data = {
  labels: namee,
  datasets: [{
    label: 'chart Food & Price',
    data: price,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
  
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
 
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  const data1 = {
    labels: typee,
      datasets: [{
        label: 'chart Type',
        data: [1,3,4,5],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

  const config1 = {
    type: 'pie',
    data: data1,
  };
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );

  

 

 

  