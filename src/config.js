const home = {
 title: "Home",
 backTo: "",
 buttons: [
  {
   title: "Take care of my body",
   linkTo: "/bodyMenu",
   size: "big"
  },
  {
   title: "Take care of my mind",
   linkTo: "/mindMenu",
   size: "big"
  },
  {
   title: "Have fun",
   linkTo: "/haveFunMenu",
   size: "big"
  },
 ]
}

const bodyMenu = {
 title: "Body Menu",
 backTo: "/",
 buttons: [
  {
   title: "Food intake tracker",
   linkTo: "/foodMenu",
   size: "big"
  },
  {
   title: "Water intake tracker",
   linkTo: "/waterMenu",
   size: "big"
  },
  {
   title: "Medicines tracker",
   linkTo: "/medicineMenu",
   size: "big"
  },
 ]
};

const mindMenu = {
 title: "Mind Menu",
 backTo: "/",
 buttons: [
  {
   title: "Start meditation",
   linkTo: "/meditationMenu",
   size: "big"
  },
  {
   title: "Start mind trainer",
   linkTo: "/mindTrainer",
   size: "big"
  },
 ]
};

const mindTrainer = {
 title: "Mind Trainer",
 backTo: "/mindMenu",
 buttons: [
  {
   title: "Play sudoku",
   linkTo: "/sudoku",
   size: "big"
  },
  {
   title: "Play with strategy",
   linkTo: "/navalBattle",
   size: "big"
  },
  {
   title: "Play with maths",
   linkTo: "/maths",
   size: "big"
  },
 ]
};

const medicineMenu = {
 title: "Medicine Menu",
 backTo: "/bodyMenu",
 buttons: [
  {
   title: "See my medicines",
   linkTo: "/seeMedicines",
   size: "big"
  },
  {
   title: "Add new medicine",
   linkTo: "/addMedicine",
   size: "big"
  },
 ]
}

const haveFunMenu = {
 title: "Medicine Menu",
 backTo: "/",
 buttons: [
  {
   title: "Show my score",
   linkTo: "/myScore",
   size: "big"
  },
  {
   title: "Show photo section",
   linkTo: "/photosHome",
   size: "big"
  },
  {
   title: "Show play section",
   linkTo: "/playMennu",
   size: "big"
  },
 ]
}

const photosHome = {
 title: "Mind Menu",
 backTo: "/",
 buttons: [
  {
   title: "Follow someone new",
   linkTo: "/photosFollow",
   size: "big"
  },
  {
   title: "Show photos from people i follow",
   linkTo: "/photosFeed",
   size: "big"
  },
 ]
};

export { home, bodyMenu, mindMenu, mindTrainer, medicineMenu, haveFunMenu, photosHome };

