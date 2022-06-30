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
