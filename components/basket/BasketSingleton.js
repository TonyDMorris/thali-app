var BasketSingleton = (function() {
  var state;

  function createState() {
    return [];
  }

  return {
    getState: function() {
      if (!state) {
        state = createState();
      }
      return state;
    },
    setState: function(item) {
      if (!state) {
        state = createState();
      }
      state = [...state, item];
      return state;
    },
  };
})();

export default BasketSingleton;
