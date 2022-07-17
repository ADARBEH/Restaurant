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


Food.prototype.print = function () {
    const tab = document.createElement("div");
    
    tab.innerHTML = `
       
        <div class="info">
        <table>
           
        <table>
        <tr>
        <th>Food ID</th>
        <th>Food Name</th>
        <th>Food Type</th>
        <th>Food Price </th>
        </tr>
         <tr>
         <td>${this.food_id}</td>
         <td>${this.food_name}</td>
         <td>${this.type}</td>
         <td>${this.pric}</td>
        </tr>
        </table>
           
           
        </div>
    `;

    
    elm.appendChild(tab); 
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
 if (q== true){localStorage.clear()}

};
   

