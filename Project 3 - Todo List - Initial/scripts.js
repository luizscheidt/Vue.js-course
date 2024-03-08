const toDoList = {
  data() {
    return {
      toDos: [],
      newToDo: { done: false },
    };
  },
  methods: {
    addToDo: function () {
      if (this.newToDo.text) {
        this.toDos.push(this.newToDo);
        this.newToDo = {
          done: false,
        };
      } else {
        alert("The new to do cannot be empry");
      }
    },
  },
};

Vue.createApp(toDoList).mount("#app");
