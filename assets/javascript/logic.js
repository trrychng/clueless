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




$("#adduser").on("click", function() { //add user to entry
  
  let newuser="";
  newuser = $("#adduserdata").val()
  
  userHtml='<div class="row"><div class="col-lg-6">'+newuser+'</div><div class="col-lg-6"><div class="input-group"></span><span class="input-group-addon">$</span><input id="'+newuser+'" type="text" class="form-control halps1" aria-label="Text input with checkbox" value=32 ></div></div></div>'
  
	console.log("add user "+newuser)
 

	$("#users").append(userHtml)
	
});




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
  let a=data.length-1
  calculation(a);
  
});


// function addEntry(events, cost) {
//   data.push({
//     entry: entry,
//     people: people,
    

//     });
// }






function calculation(a){
	
  var total=0;
  var guests = [];
  console.log(data[a].entry.guest[0].amount)
  var guest;
  let x=0;
  var event;
  var entry;
  var caldata =[];
  
  for(i=0; i < data[a].entry.guest.length; i++ ){ //grabs the sum of entry [0]
  
  x = parseInt(data[a].entry.guest[i].amount);
  guest =data[a].entry.guest[i].name; //grab user name
  event = data[a].event        // event name
  entry = data[a].entry.location; //location of entry
  console.log(guest + " has contributed $" +x+ " to event: " +event+ " at location " + entry +"."  )  //logging

 
  caldata.push({
        name: guest ,
        amount: x
      });
  
 

  total += x; 
  }
  
  

  
  var share = total/data[a].entry.guest.length; // divide total by number of guest to get equal share.
  console.log("share amount is "+share)
	$("#allocation").empty()
  $("#allocation").append("<p>For Location: "+entry+" The split even amount is $" +share+ "</p"); //html append to div for split even amount
  console.log(caldata[1].amount);
  
  
  
  
  



console.log(caldata);

distribution(caldata, share);

}





function distribution (caldata, share){
  
for(var i=0; i < caldata.length; i++ ){
  iuser = caldata[i].name;
  iamount = caldata[i].amount;
  console.log(iamount)
  
  if(iamount < share){
 
    
    for(var x=0; x < caldata.length; x++){
      xuser = caldata[x].name;
      xamount = caldata[x].amount;
    
      
    if(share < xamount && iamount !== share){
       let give=0

       give=share-iamount
       console.log(give)
		
		if(give > xamount-share ){ //checks if give is will cause the x-user to be over otherwise get min.
		give=xamount-share
		}
		        
		console.log(JSON.stringify(caldata)); //logging before allocation
		caldata[i].amount=iamount+give //adjust the value given.
        caldata[x].amount=xamount-give //adjust max value
		
        iamount = caldata[i].amount //updates value in object in iuser
        xamount = caldata[x].amount //updates value in object in xuser

        console.log(xamount+" "+iamount); //logging after allocation
        console.log(iuser+ " gives " +give+ " to "+xuser);
		
		$("#allocation").append("<p>"+iuser+ " gives $" +give+ " to "+xuser+" making "+iuser+" at $"+iamount+" and "+xuser+" at "+xamount+"</p"); //html append to div allocation for which steps to take.

		console.log(JSON.stringify(caldata));
		
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
    

