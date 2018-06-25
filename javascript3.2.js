const OrderItem = [{food:"Burger",price:4.00},
                   {food:"Pasta" ,price:15.00},
                   {food:"Cake",price:5.00}];

let preparedFood = function (tableNumber,OrderItem,callback){
    console.log('preparing food for items -',OrderItem);
    callback(tableNumber,OrderItem);
}
  let serveFood= function (tablenumber,items){
      console.log('serving food for items -',items);
 }
preparedFood(5,OrderItem,serveFood);

        
    
