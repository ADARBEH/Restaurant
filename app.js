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

const form = document.getElementById("formID");

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    let FoodNameel = event.target.FoodName.value;
    let Typesoffood = event.target.Typesoffood.value;
    let Pricel = event.target.Pric.value;
    var foodid = Math.floor(1000 + Math.random() * 9000);

    const newfood = new Food(foodid, FoodNameel, Typesoffood, Pricel);
   
    console.log(newfood);
    newfood.print();
};

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


for(let i = 0; i < food_info.length; i++){
    food_info[i].print();
}








