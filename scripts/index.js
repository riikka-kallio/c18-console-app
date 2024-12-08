import WorkoutApp from "/classes/workout-app.js";


// Running order
const myWorkoutsApp = new WorkoutApp({ owner: "Riikka" });
myWorkoutsApp.render();

// CREATE
const murphWorkoutId = myWorkoutsApp.createItem({
  title: "Murph",
  type: "For time",
  equipment: [
    "Weight vest",
    "Bodyweight",
  ],
  exercises: [
    " 1 mile run",
    "100 pull-ups",
    "200 push-ups",
    "300 squats",
    "1 mile run"
  ],
});

const jtWorkoutId = myWorkoutsApp.createItem({
  title: "JT",
  type: "21-15-9 reps for time of",
  equipment: [
    "Rings",
    "Bodyweight",
  ],
  exercises: [
    "Handstand push-ups",
    "Ring dips",
    "Push-ups",
  ],
});

const michaelWorkoutId = myWorkoutsApp.createItem({
  title: "Michael",
  type: "3 rounds for time of",
  equipment: [
    "Bodyweight",
  ],
  exercises: [
    "800 meter run",
    "50 back extensions",
    "50 sit-ups",
  ],
});

const danielWorkoutId = myWorkoutsApp.createItem({
  title: "Daniel",
  type: "For time",
  equipment: [
    "Barbell",
    "Pull-up bar",
  ],
  exercises: [
    "50 pull-ups",
    "400 meter run",
    "95-lb thrusters, 21 reps",
    "800 meter run",
    "95-lb thrusters, 21 reps",
    "400 meter run",
    "50 pull-ups",
  ],
});

const joshWorkoutId = myWorkoutsApp.createItem({
  title: "Josh",
  type: "For time",
  equipment: [
    "Barbell",
    "Pull-up bar",
  ],
  exercises: [
    "95-lb overhead squats, 21 reps",
    "42 pull-ups",
    "95-lb overhead squats, 15 reps",
    "30 pull-ups",
    "95-lb overhead squats, 9 reps",
    "18 pull-ups",
  ],
});

const jasonWorkoutId = myWorkoutsApp.createItem({
  title: "Jason",
  type: "For time",
  equipment: [
    "Bodyweight",
    "Pull-up bar",
  ],
  exercises: [
    "100 squats",
    "5 muscle-ups",
    "75 squats",
    "10 muscle-ups",
    "50 squats",
    "15 muscle-ups",
    "25 squats",
    "20 muscle-ups",
  ],
});

const badgerWorkoutId = myWorkoutsApp.createItem({
  title: "Badger",
  type: "3 rounds for time of",
  equipment: [
    "Barbell",
    "Pull-up bar",
  ],
  exercises: [
    "95-lb clean, 30 reps",
    "30 pull-ups",
    "800 meter run",
  ],
});

const joshieWorkoutId = myWorkoutsApp.createItem({
  title: "Joshie",
  type: "3 rounds for time of",
  equipment: [
    "Dumbbell",
    "Pull-up bar",
  ],
  exercises: [
    "40-lb db snatch, right arm, 21 reps",
    "21 pull-ups",
    "40-lb db snatch, left arm, 21 reps",
    "21 pull-ups",
  ],
});

const nateWorkoutId = myWorkoutsApp.createItem({
  title: "Nate",
  type: "Amrap 20 minutes",
  equipment: [
    "2-pood (70-lb) kettlebell",
    "Pull-up bar",
  ],
  exercises: [
    "2 muscle-ups",
    "4 handstand push-ups",
    "8 kb swings",
  ],
});

const randyWorkoutId = myWorkoutsApp.createItem({
  title: "Randy",
  type: "For time",
  equipment: [
    "75-lb barbell",

  ],
  exercises: [
    "75 power snatches",
  ],
});

const tommyvWorkoutId = myWorkoutsApp.createItem({
  title: "Tommyv",
  type: "For time",
  equipment: [
    "115-lb barbell",
    "Rope",
  ],
  exercises: [
    "21 thrusters",
    "15-ft rope climb, 12 ascents",
    "15 thrusters",
    "15-ft rope climb, 9 ascents",
    "9 thrusters",
    "15-ft rope climb, 6 ascents"
  ],
});

const griffWorkoutId = myWorkoutsApp.createItem({
  title: "Griff",
  type: "For time",
  equipment: [
    "Bodyweight",

  ],
  exercises: [
    "800 meter run",
    "400 meter run backwards",
    "800 meter run",
    "400 meter run backwards",
  ],
});

const ryanWorkoutId = myWorkoutsApp.createItem({
  title: "Ryan",
  type: "5 rounds for time of",
  equipment: [
    "Pull-up bar",
    "Bodyweight",
  ],
  exercises: [
    "7 muscle-ups",
    "21 burpees",
  ],
});

const erinWorkoutId = myWorkoutsApp.createItem({
  title: "Erin",
  type: "5 rounds for time of",
  equipment: [
    "40-lb dumbbell",
    "Pull-up bar"
  ],
  exercises: [
    "15 db split cleans",
    "21 pull-ups"
  ],
});

const joshuaWorkoutId = myWorkoutsApp.createItem({
  title: "Joshua",
  type: "5 rounds for time of",
  equipment: [
    "GHD machine",
    "Barbell"

  ],
  exercises: [
    "400 meter run",
    "30 GHD sit-ups",
    "250-lb deadlift, 15 reps",
  ],
});

const dtWorkoutId = myWorkoutsApp.createItem({
  title: "DT",
  type: "5 rounds for time of",
  equipment: [
    "155-lb barbell",

  ],
  exercises: [
    "12 deadlifts",
    "9 hang power cleans",
    "6 push jerks",
  ],
});

const dannyWorkoutId = myWorkoutsApp.createItem({
  title: "Danny",
  type: "Amrap 20 minutes",
  equipment: [
    "Box",
    "115-lb barbell",
    "Pull-up bar",
  ],
  exercises: [
    "24-inch box jumps, 30 reps",
    "Push press, 20 reps",
    "30 pull-ups",
  ],
});

const hansenWorkoutId = myWorkoutsApp.createItem({
  title: "Hansen",
  type: "5 rounds for time of",
  equipment: [
    "2-pood kettlebell (70-lb)",
    "GHD machine",

  ],
  exercises: [
    "30 kb swings",
    "30 burpees",
    "30 GHD sit-ups",
  ],
});

const tylerWorkoutId = myWorkoutsApp.createItem({
  title: "Tyler",
  type: "5 rounds for time of",
  equipment: [
    "Pull-up bar",
    "95-lb barbell",

  ],
  exercises: [
    "7 muscle-ups",
    "21 sumo deadlift high pulls"
  ],
});

const lumberjackWorkoutId = myWorkoutsApp.createItem({
  title: "Lumberjack 20",
  type: "For time",
  equipment: [
    "Barbell",
    "2-pood kettlebell (70-lb)",
    "Pull-up bar",
    "Box",
    "45-lb dumbbell",

  ],
  exercises: [
    "20 deadlifts, 275-lb",
    "400 meter run",
    "20 kb swings",
    "400 meter run",
    "20 overhead squats, 115-lb",
    "400 meter run",
    "20 burpees",
    "400 meter run",
    "20 chest-to-bar-pull-ups",
    "400 meter run",
    "24-inch box jumps, 20 reps",
    "400 meter run",
    "20 db squat cleans",
    "400 meter run",
  ],
});

const stephenWorkoutId = myWorkoutsApp.createItem({
  title: "Stephen",
  type: "30-25-20-15-10-5 rep round of",
  equipment: [
    "GHD machine",
    "95-lb barbell",
    "Pull-up bar",

  ],
  exercises: [
    "GHD situps",
    "Back extensions",
    "Knees-to-elbows",
    "Stiff-legged deadlifts",
  ],
});

const garrettWorkoutId = myWorkoutsApp.createItem({
  title: "Garrett",
  type: "3 rounds for time of",
  equipment: [
    "Rings",
    "Pull-up bar"

  ],
  exercises: [
    "75 squats",
    "25 ring handstand push-ups",
    "25 L pull-ups",
  ],
});

const warFrankWorkoutId = myWorkoutsApp.createItem({
  title: "War Frank",
  type: "3 rounds for time of",
  equipment: [
    "Pull-up bar",
    "GHD machine",

  ],
  exercises: [
    "25 muscle-ups",
    "100 squats",
    "35 GHD sit-ups",
  ],
});

const mcgheeWorkoutId = myWorkoutsApp.createItem({
  title: "McGhee",
  type: "Amrap 30 minutes",
  equipment: [
    "125-lb barbell",
    "Box",

  ],
  exercises: [
    "5 deadlifts",
    "13 push-ups",
    "24-inch box jumps, 9 reps",
  ],
});

const paulWorkoutId = myWorkoutsApp.createItem({
  title: "Paul",
  type: "5 rounds for time of",
  equipment: [
    "Skipping rope",
    "Pull-up bar",
    "185-lb barbell"

  ],
  exercises: [
    "50 double-unders",
    "35 knees-to-elbows",
    "20 yeards overhead walk",
  ],
});

const jerryWorkoutId = myWorkoutsApp.createItem({
  title: "Jerry",
  type: "For time",
  equipment: [
    "Rower",

  ],
  exercises: [
    "1 mile run",
    "2K row",
    "1 mile run",
  ],
});

const nuttsWorkoutId = myWorkoutsApp.createItem({
  title: "Nutts",
  type: "For time",
  equipment: [
    "250-lb barbell",
    "Box",
    "Pull-up bar",
    "Wallball 20-lb",
    "Skipping rope",
    "45-lb plate",

  ],
  exercises: [
    "10 handstand push-ups",
    "15 deadlifts",
    "30-inch box jumps, 25 reps",
    "50 pull-ups",
    "100 wallball shots. 10 foot target",
    "200 doubleunders",
    "400 meter run with plate",
  ],
});

const arnieWorkoutId = myWorkoutsApp.createItem({
  title: "Arnie",
  type: "For time",
  equipment: [
    "2-pood kettlebell (70-lb)",

  ],
  exercises: [
    "21 Turkish get-ups, right arm",
    "50 swings",
    "21 overhead squats, left arm",
    "50 swings",
    "21 overhead squats, right arm",
    "50 swings",
    "21 Turkish get-ups, left arm",
  ],
});

const sevenWorkoutId = myWorkoutsApp.createItem({
  title: "The Seven",
  type: "7 rounds for time of",
  equipment: [
    "Barbell",
    "Pull-up bar",
    "2-pood kettlebell (70-lb)",

  ],
  exercises: [
    "7 handstand push-ups",
    "135-lb thrusters, 7 reps",
    "7 knees-to-elbows",
    "245-lb deadlift, 7 reps",
    "7 burpees",
    "7 kb swings",
    "7 pull-ups",
  ],
});

const rjWorkoutId = myWorkoutsApp.createItem({
  title: "RJ",
  type: "5 rounds for time of",
  equipment: [
    "Rope",

  ],
  exercises: [
    "800 meter run",
    "15-ft rope climb, 5 ascents",
    "50 push-ups",
  ],
});

const luceWorkoutId = myWorkoutsApp.createItem({
  title: "Luce",
  type: "For time",
  equipment: [
    "20-lb weight vest",
    "Pull-up bar",
    "Bodyweight",

  ],
  exercises: [
    "1K run",
    "10 muscle-ups",
    "100 squats",
  ],
});

// READ
myWorkoutsApp.render();
console.log("jtWorkoutId", jtWorkoutId);


// DELETE
const removedWorkouts = myWorkoutsApp.removeItem(jtWorkoutId);
console.log("removedWorkouts", removedWorkouts);


// So we can search for it later
const updatedMurphWorkoutTitle = "Do murph again";


// UPDATE
const updated = myWorkoutsApp.updateItem(murphWorkoutId, {
  title: updatedMurphWorkoutTitle,
});
console.log("updated", updated)
myWorkoutsApp.render();

const lookedUpId = myWorkoutsApp.getByTitle(updatedMurphWorkoutTitle);

console.assert(lookedUpId._id === murphWorkoutId);

myWorkoutsApp.markAsDone(murphWorkoutId);
myWorkoutsApp.markAsDone(luceWorkoutId);
myWorkoutsApp.render();

// Check convenience methods work

console.log(myWorkoutsApp.getByTitle("The Seven"));
console.log(myWorkoutsApp.getByEquipment(['Bodyweight']));

myWorkoutsApp.markAsUndone(luceWorkoutId);
myWorkoutsApp.render();

myWorkoutsApp.showUndone();
myWorkoutsApp.render();

console.log(myWorkoutsApp.getRandom());

// Alias

const johnsonWorkoutId = myWorkoutsApp.createWorkout({
  title: "Johnson",
  type: "Amrap 20 minutes",
  equipment: [
    "Barbell",
    "Pull-up bar",
  ],
  exercises: [
    "245-lb deadlift, 9 reps",
    "8 muscle-ups",
    "155-lb squat clean, 9 reps",
  ],
});
console.log(johnsonWorkoutId);
myWorkoutsApp.render();


myWorkoutsApp.removeWorkout(johnsonWorkoutId);
myWorkoutsApp.render();