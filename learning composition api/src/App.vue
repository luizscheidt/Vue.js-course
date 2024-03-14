<script setup>

  import { ref, reactive } from "vue"
  import Progress from './components/Progress.vue'

  let count = ref(0);


  let courses = reactive([
    {
      name: "Web dev bootcamp",
      done: true
    },
    {
      name: "Vue JS 3 Completo com Composition API, Vuex & Vue Router",
      done: true
    },
    {
      name: "Git bootcamp",
      done: false
    },
  ])

  let newCourse = {done: false}


  function addNewCourse() {
    courses.push(newCourse);
    newCourse = {done: false};
  }

  //ref exige o uso do "value" após a variável
  function increment(){
    count.value++
  }

</script>

<template>
  <div>
    <p>My courses</p>
    <ul>
      <li v-for="course in courses" :key="course.name" >{{course.name}}</li>
    </ul>
  </div>

  <br>

  <div>
    <input v-model="newCourse.name" type="text">
    <button @click="addNewCourse">add course</button>
  </div>
  <Progress :courses="courses" />

</template>

<style scoped>

</style>
