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
export { food, water, medicines };
