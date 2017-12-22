var data = [];
var people = ["terry", "ed", "robert", "ryan"];
var testpush= [];
var terryAmount;
var edAmount;
var robertAmount;
var ryanAmount;
var entry;
var users=[];

// function renderButtons() {

//   $("#buttons-view").empty();

//   for (var i = 0; i < people.length; i++) {
//     var a = $("<button>");
//     a.addClass("animal btn btn-default");
//     a.attr("data-name", animals[i]);
//     a.text(animals[i]);
//     $("#buttons-view").append(a);

//   }
// }






$("#submit").on("click", function() { //adding new entries to event
    event.preventDefault();



      // terryAmount = $("#terry").val().trim();
      // edAmount = $("#ed").val().trim();
      // robAmount = $("#rob").val().trim();
      // ryanAmount = $("#ryan").val().trim();
      // entry = $("#entry").val().trim();
      // console.log(terryAmount+edAmount)
     
    

  var testpush= [];
    var data_val=$(".halps1")

    console.log($(".halps1"));

  
  entry = $("#entry").val().trim();
  
    for (var i=0 ; i<data_val.length; i++){

 

      var username = $(data_val[i]);
      console.log(username.attr("id"));
      console.log(username.val());


      testpush.push({
        name : username.attr("id"),
        amount : username.val().trim()

      });


    }

    console.log(testpush);
  
  entry = {
  location: entry,
  GAPI: "google API",
  YAPI: "Yelp API",
  guest: testpush
  }
  
    
  data.push({
    event: "EVENT1",
  entry: entry
    });
  
  console.log(data);
    //$(".form-control").val("");
  
  calculation();
  
});


// function addEntry(events, cost) {
//   data.push({
//     entry: entry,
//     people: people,
    

//     });
// }



function calculation(){

  var total=0;
  var guests = [];
  console.log(data[0].entry.guest[0].amount)
  var guest;
  let x=0;
  var event;
  var entry;
  var caldata =[];
  
  for(i=0; i < data[0].entry.guest.length; i++ ){ //grabs the sum of entry [0]
  
  x = parseInt(data[0].entry.guest[i].amount);
  guest =data[0].entry.guest[i].name; //grab user name
  event = data[0].event        // event name
  entry = data[0].entry.location; //location of entry
  console.log(guest + " has contributed $" +x+ " to event: " +event+ " at location " + entry +"."  )  //logging

 
  caldata.push({
        name: guest ,
        amount: x
      });
  
 

  total += x; 
  }
  
  

  
  var share = total/data[0].entry.guest.length; // divide total by number of guest to get equal share.
  console.log("share amount is "+share)
  console.log(caldata[1].amount);
  
  
  
  



console.log(caldata);

distribution(caldata, share);

}





function distribution (caldata, share){
  
for(var i=0; i < caldata.length; i++ ){
  iuser = caldata[i].name;
  iamount = parseInt(caldata[i].amount);
  console.log(iamount)
  
  if(iamount < share){
 
    
    for(var x=0; x < caldata.length; x++){
      xuser = caldata[x].name;
      xamount = parseInt(caldata[x].amount);
    
      
      if(share < xamount){
        let give=0

        give=share-iamount
        console.log(give)
       
        console.log(caldata);

        console.log(caldata[i].amount)

        caldata[i].amount=iamount+give //adjust the value given.

        console.log(caldata[i].amount)


        caldata[x].amount=xamount-give //adjust max value
        console.log(xamount+" "+iamount);
        iamount = parseInt(caldata[i].amount)
        xamount = parseInt(caldata[x].amount)

        console.log(xamount+" "+iamount);
        console.log(iuser+ " gives " +give+ " to "+xuser)
        }
      
      
      
      
    }
      
  }
    }
  
  
  }
  
  


    

  
    
 
  
  
  
  




function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
    


