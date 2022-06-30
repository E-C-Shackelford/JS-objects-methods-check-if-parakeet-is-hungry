// use methods to feed Poppy when she’s hungry

const bird = {
  name: "Poppy",
  type: "Budgie",
  hungerScale: 5, // scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  },
};

bird.eat = function () {
  if (this.hungerScale === 0) {
    console.log(`${this.name} is full and can’t eat more.`);
  } else {
    this.hungerScale -= 1; // subtracting 1 will decrease the value every time the method runs until the value is 0, meaning Poppy doesn’t want more food
    console.log("Nom nom nom nom nom");
  }
};
