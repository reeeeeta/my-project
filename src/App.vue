<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template> -->

<template>
  <el-button @click="handleShow(1)">Learn</el-button>
  <el-button @click="handleShow(2)">TodoList</el-button>
  <el-button @click="handleShow(3)">Form</el-button>
  <el-button @click="handleShow(4)">Form2</el-button>
  <div v-if="showComponent == 1" class="container">
    <HelloWorld />
  </div>
  <div v-else-if="showComponent == 2" class="container">
    <HelloWorld2 />
  </div>
  <div v-else-if="showComponent == 3" class="container">
    <HelloWorld3 />
  </div>
  <div v-else>
    <HelloWorld4 />
  </div>

  <!-- <router-link to="/">Home</router-link>
  <router-link to="/1a2b">1a2b</router-link>
  <router-link to="/todoList">todoList</router-link>
  <router-view /> -->
</template>

<script>
import HelloWorld from "./components/LearnProject.vue";
import HelloWorld2 from "./components/Todo_2.vue";
import HelloWorld3 from "./components/FormTest.vue";
import HelloWorld4 from "./components/FormTest_v2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2,
    HelloWorld3,
    HelloWorld4,
  },
  data() {
    return {
      showComponent: 1,
    };
  },
  methods: {
    handleShow(val) {
      if (val == 1) {
        this.showComponent = 1;
      }
      if (val == 2) {
        this.showComponent = 2;
      }
      if (val == 3) {
        this.showComponent = 3;
      }
      if (val == 4) {
        this.showComponent = 4;
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  border: none;
  color: darkgrey;
  margin: 0 3px;
}
button:hover {
  color: black;
}
</style>
