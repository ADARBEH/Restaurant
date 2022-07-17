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
   
    savedata();
};



function savedata (){
    let string_data = JSON.stringify(food_info);
    localStorage.setItem("food_info",string_data)
}
function getdata (){
    let retriveddata =  localStorage.getItem("food_info");
      let arr_data = JSON.parse(retriveddata);
  
      for(let i = 0; i < arr_data.length; i++){
          new Food(arr_data[i].food_id, arr_data[i].food_name, arr_data[i].type, arr_data[i].pric);
      }
  
      
    }
  getdata();
     


