let people = [
  {
    first_name: "ram",
    last_name: "mohan",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "ranchi", state: "jharkhand" }
  },
  {
    first_name: "rsit",
    last_name: "singh",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "patna", state: "bihar" }
  },
  {
    first_name: "aman",
    last_name: "kumar",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "balia", state: "up" }
  },
  {
    first_name: "bharat",
    last_name: "gowda",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "xyz", state: "hbcjh" }
  },
  {
    first_name: "amit",
    last_name: "kumar",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "belgam", state: "karnatka" }
  },
  {
    first_name: "sneha",
    last_name: "dhanawat",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "cikmanglore", state: "karnatka" }
  },

  {
    first_name: "sneha",
    last_name: "singh",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "cikmanglore", state: "karnatka" }
  },
  {
    first_name: "hari",
    last_name: "mohan",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "manglore", state: "karnatka" }
  },
  {
    first_name: "hari",
    last_name: "ram",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "mysore", state: "karnatka" }
  },
  {
    first_name: "geet",
    last_name: "kumari",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "tumkur", state: "karnatka" }
  },
  {
    first_name: "nikita",
    last_name: "aggarwal",
    age: "56",
    email: "rammohan@gmail.com",
    address: { city: "banglore", state: "karnatka" }
  }
];
function count() {
  for (i = 0, len = people.length; i < len; i++)
    console.log(
      people[i].first_name +
        people[i].last_name +
        " " +
        "lives in" +
        " " +
        people[i].address.city +
        " " +
        people[i].address.state
    );
}
let d = count();
console.log(d);
