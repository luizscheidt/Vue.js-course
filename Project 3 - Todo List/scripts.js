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
        localStorage.setItem("toDos", JSON.stringify(this.toDos));
      } else {
        alert("The new to do cannot be empry");
      }
    },
  },
  created() {
    this.toDos = localStorage.getItem("toDos")
      ? JSON.parse(localStorage.getItem("toDos"))
      : this.toDos;
  },
  updated() {
    localStorage.setItem("toDos", JSON.stringify(this.toDos));
  },
};

Vue.createApp(toDoList).mount("#app");
