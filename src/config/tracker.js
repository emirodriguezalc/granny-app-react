
let timeOfDay;
const hour = new Date().getHours();

if (hour < 12) {
  timeOfDay = "morning"
}
if (12 <= hour && hour < 14) {
  timeOfDay = "midday"
}
if (14 <= hour && hour < 18) {
  timeOfDay = "afternoon"
}
if (18 <= hour && hour < 24) {
  timeOfDay = "evening"
}

const medicineData = {
  viewName: "See medicines",
  title: `These are your ${timeOfDay} medicines`,
  backTo: "/medicineMenu"
};

const addMedicine = {
  viewName: "Add medicines",
  title: `Type on the field and submit`,
  backTo: "/medicineMenu"
};

const foodData = {
  viewName: "Food tracker",
  title: "",
  backTo: "/bodyMenu",
  list: [{
    text: "Breakfast",
    taken: false
  },
  {
    text: "Lunch",
    taken: false
  },
  {
    text: "Tea",
    taken: false
  },
  {
    text: "Dinner",
    taken: false
  }]
};

const waterData = {
  viewName: "Water tracker",
  title: "",
  backTo: "/bodyMenu",
  list: [{
    text: "Morning",
    taken: false
  },
  {
    text: "Midday",
    taken: false
  },
  {
    text: "Morning",
    taken: false
  },
  {
    text: "Morning",
    taken: false
  }
  ]
};

const food = {
  title: 'Food tracker',
  viewName: 'food-menu',
  list: [
    { name: 'breakfast', text: 'I had breakfast' },
    { name: 'lunch', text: 'I had lunch' },
    { name: 'tea', text: 'I had tea' },
    { name: 'dinner', text: 'I had dinner' },
  ],
};

const water = {
  title: 'Water tracker',
  viewName: 'water-menu',
  list: [
    { name: 'morning', text: 'Morning' },
    { name: 'midday', text: 'Midday' },
    { name: 'afternoon', text: 'afternoon' },
    { name: 'evening', text: 'Evening' },
  ],
};
// mock
const medicines = {
  title: 'Medicine tracker',
  viewName: 'see-medicines',
  list: [
    { name: 'ibux', text: 'ibux' },
    { name: 'profen', text: 'profen' },
  ],
};
export { food, water, medicines, medicineData, foodData, waterData, addMedicine  };
