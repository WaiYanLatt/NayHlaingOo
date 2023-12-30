import Navbar from "/assets/components/Navbar.js";
import Home from "/assets/components/Home.js";
import About from "/assets/components/About.js";
import Exp from "/assets/components/Exp.js";
import Work from "/assets/components/Work.js"
import Next from "/assets/components/Next.js"
import Footer from "/assets/components/Footer.js";

const { createApp } = Vue;
// Vue Instance
const app = createApp({
  components: {
    "navbar-component": Navbar,
    "home-component": Home,
    "about-component": About,
    "exp-component": Exp,
    "work-component" : Work,
    "next-component" : Next,
    "footer-component" : Footer,
  },
  data() {
    return {
      upShow : false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.upScroll);
  },
  destroyed() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener("scroll", this.upScroll);
  },
  methods: {
    upScroll() {
      if (window.scrollY > 1000) {
        this.upShow = true;
      }
      if (window.scrollY < 1000) {
        this.upShow = false;
      }
    },
  },
});
app.mount("#app");
