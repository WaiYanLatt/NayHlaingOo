import Navbar from "/assets/components/Navbar.js";
import Home from "/assets/components/Home.js";
import About from "/assets/components/About.js";

const { createApp } = Vue;
// Vue Instance
const app = createApp({
  components : {
    'navbar-component' : Navbar,
    'home-component' : Home,
    'about-component' : About,
  },
  data() {
    return {
      
    };
  },
});
app.mount("#app");