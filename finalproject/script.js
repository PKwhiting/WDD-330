class Vehicle{
    constructor(year, make, model, vin, price, miles, description){
        this.year = year;
        this.make = make;
        this.model = model;
        this.vin = vin;
        this.price = price;
        this.miles = miles;
        this.description = description;
    }
}
class User{
  constructor(firstName,lastName,zipCode,emailAddress,phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.zipCode = zipCode;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
  }
}
let vehicles = [];
function renderVehicle(item) {
    return(
        `   <div id="${item.vin}" class="Vehicle">  
              <button id="viewListings" onclick="viewListing('${item.vin}')" >
              <h4>YEAR: ${item.year}</h4>
              <h4>MAKE: ${item.make}</h4>
              <h4>MODEL: ${item.model}</h4>
              <h4>VIN: ${item.vin}</h4>
              <h4>PRICE: ${item.price}</h4>
              <h4>DESCRIPTION: ${item.description}</h4>
              <button id="soldButton" onclick="vehicleSold('${item.vin}')">Sold</button>
              </button>
        </div>
        `
    );
}
function registerVis(showhide){
  if(showhide == "expand"){
    document.getElementById('register').style.visibility="visible";
  } 
  else if(showhide == "collapse"){
    document.getElementById('register').style.visibility="hidden"; 
  }
}


function register(showhide){
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let zipCode = document.getElementById("zipCode").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let newUser = new User(fName,lName,zipCode,emailAddress,phoneNumber);
  if(showhide == "expand"){
    document.getElementById('register').style.visibility="visible";
  } 
  else if(showhide == "collapse"){
    document.getElementById('register').style.visibility="hidden"; 
  }
  alert("Registration Complete: Login Successful");
}
function login(showhide){
  if(showhide == "expand"){
      document.getElementById('login').style.visibility="visible";
  }else if(showhide == "collapse"){
      document.getElementById('login').style.visibility="hidden"; 
      alert("Login Successful");
  }

}

function addCars(){
    let thisprice = document.getElementById("price").value;
    let thisyear = document.getElementById("year").value;
    let thismake = document.getElementById("make").value;
    let thismodel = document.getElementById("model").value;
    let thismiles = document.getElementById("miles").value;
    let thisvin = document.getElementById("vin").value;
    let thisdescription = document.getElementById("description").value;

    if (thisprice != "" && thisyear != "" && thismake != "" && thismodel != "" && thismiles != ""){
        runAddition();
    }
    else {
        alert("Please Fill in All the Fields Correctly");
    }

    function runAddition(){
      let newCar = new Vehicle(thisyear,thismake,thismodel,thisvin,thisprice,thismiles,thisdescription);
      vehicles.push(newCar);
      let vehicleText = renderVehicle(newCar);
      let wrapper = document.createElement('div');
      wrapper.innerHTML = vehicleText
      document.getElementById("carsList").append(wrapper);
      document.getElementById("vin").value = "";
      document.getElementById("year").value = "";
      document.getElementById("make").value = "";
      document.getElementById("model").value = "";
      document.getElementById("miles").value = "";
      document.getElementById("price").value = "";
      document.getElementById("description").value = "";
  }
}


function vehicleSold(vin){
  document.getElementById(vin).parentNode.remove();
  var element = document.getElementById(vin);

    if(typeof(element) != 'undefined' && element != null){
      document.getElementById(vin).parentNode.remove();
    } else{
        console.log('Element does not exist!');
    }
  return false;
}

function viewListing(vin){
  console.log(vin);
  for (let i = 0; i < vehicles.length; i++){
    if (vehicles[i].vin = vin)
      var thisCar = vehicles[i];
      console.log("working");
      let parent = document.getElementById("listingForm").parentElement;
      document.getElementById("listingForm").style.display = 'none';
      let wrapper = document.createElement('div');
      wrapper.setAttribute('class','form');
      let carInfo = renderVehicle(thisCar);
      wrapper.innerHTML = carInfo;
      parent.append(wrapper);

  }
}



document.getElementById("submit_btn").onclick = function () {
  var vin;

  vin = document.getElementById("vin").value;
    
  if (vin.length === 17) {
    console.log("test");
    getNHTSADataByVIN(vin);
  }
};
function getNHTSADataByVIN (param_vin) {
  $.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/",
    type: "POST",
    data: { format: "json", data: param_vin },
    dataType: "json",
    success: function(result)
    {
      console.log(result);
      displayNHTSAResults(result);
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status);
        console.log(thrownError);
    }
  });
}


function displayNHTSAResults (param_data) {
  var output_text = [];
  var full_output = "";
  for (var i = 0; i < param_data.Results.length; i++) {
    var result = param_data.Results[i];

    for (var item in result) {
      if (item == "Make"){
        document.getElementById("make").value = result[item];
      }
      if (item == "Model"){
        document.getElementById("model").value = result[item];
      }
      if (item == "ModelYear"){
        document.getElementById("year").value = result[item];
      }
      if (result.hasOwnProperty(item) && result[item] !== "") {
        output_text.push(result[item] + "\n");
        full_output += item + ": " + result[item] + "\n";
      }
    }
  }

}


  