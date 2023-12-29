const Navbar = {
  data() {
    return {
      show: false,
    };
  },
  methods : {
    open(){
        this.show = true;
    },
    close(){
        this.show = false;
    }
  },
  template: `
    <div class="navbar">
    <div>
      <i class="fa-regular fs1 fa-circle-user text-green"></i>
    </div>
    <button class="btn3" @click='open'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </button>
    <div class="for-list">
      <ul class="list-group" :class="{'left1' : show === true}">
        <li><span class="text-green mr-10">01.</span>About</li>
        <li><span class="text-green mr-10">02.</span>Experience</li>
        <li><span class="text-green mr-10">03.</span>Work</li>
        <li><span class="text-green mr-10">04.</span>Contact</li>
        <button class="btn2" @click='close'>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </ul>
      <button class="btn">Resume</button>
    </div>
  </div>
    `,
};

export default Navbar;
