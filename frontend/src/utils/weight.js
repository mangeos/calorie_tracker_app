const weightChanges = {
  getWeightChanges: (oldWeight = -1, newWeight = 1) => {
    if (oldWeight < 0) {
      return "0";
    } else {
      let num = newWeight - oldWeight;
      let done =
        num > 0 ? "+" + Number(num.toFixed(2)) : Number(num.toFixed(2));
      return done;
    }
    /* console.log(`OldWeight: ${oldWeight}, NewWeight: ${newWeight}`); */
  },
  getWeightLeftToGoal: () => {
    console.log("apa");
  },
};

export default weightChanges;
