let output = document.querySelector("#output");
let orders = [];
let names = [
  "clairmont",
  "belladonna",
  "urban",
  "orthello",
  "seba",
  "southern crest",
  "plesta",
  "aramis"
];
function Base(name, dimYX, thickness) {
  this.name = name;
  this.dimYX = dimYX;
  this.thickness = thickness;
  this.getName = function() {
    return this.name;
  };
}
function Order(date, number, items, cnt) {
  this.date = date;
  this.number = number;
  this.items = items; // array
  this.steps = cnt; 
}
function Orders() {
  this.orders = [];
  this.listAll = function() { 
    let out = "";
    out += "<table><tr><th>ORDERS</th></tr>";
    for(let ord of this.orders) {
      out += "<tr><th>"+ord.number+" " + ord.date.getDate()+ "-" + ord.date.getMonth() + "</th>";
      for(let item of ord.items) {
        out += "<td>" +item.getName();
        out += " " +item.dimYX[0] + "x" + item.dimYX[1] + "</td>";        
      }
      out += "<td class='done'><a href='#'>DONE "+ ord.steps +"</a></td>";
      out += "</tr>";
    }    
    out += "</table>";
    return out;
  }
}
function rndBaseName() {
  let el = Math.floor(Math.random() * names.length);
  return names[el];
} 
function rndDims() {
  let yx = [];
  yx[0] = Math.floor(Math.random() * 1000);
  yx[1] = Math.floor(Math.random() * 1000);
  return yx;
}
function rndOrd() {
  let rndOrder = 0;
  return 40000 - (rndOrder = Math.floor(Math.random() * 30000));
}
function rndThick() {
  let rndThickness = 0;
  return (rndThickness = Math.floor(Math.random() * 70));
}
let theOrders = new Orders();
function FakeOrders(num, orders) {
  for (let k = 0; k < num; k++) {
    let tempBases = [];
    let numOfBases = Math.floor(Math.random() * 7) + 1; // how many bases per order?
    let theOrder = new Order();
    for (let foo = 0; foo < numOfBases; foo++) {
      let theBase = new Base(rndBaseName(), rndDims(), rndThick());
      tempBases.push(theBase);
    };
    let date = new Date();
    // let theOrder = new Order(date, rndOrd(), tempBases);
    
    orders.orders.push(new Order(date, rndOrd(), tempBases, tempBases.length));
    console.log("num of tempBases " + tempBases.length);
    tempBases = [];
  };
};
FakeOrders(10, theOrders);
output.innerHTML = theOrders.listAll();
console.log(theOrders);