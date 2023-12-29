const About = {
  template: `
    <div class="about">
    <h1 class="about-font"><span class="A01">01.</span>About Me</h1>
    <div>
      <div class="about-flex">
        <div>
          <p class="font">
            Hello! My name is
            <span class="text-green">Nay Hlaing Oo </span>and I enjoy
            sharing knowledge and exploring the beauty of technology. My
            interest in programming started back in 2019 when I decided to
            try self taught myself HTML, CSS and JS and eventually explore
            into the world of
            <span class="text-green">Web Development</span>.
          </p>
          <p class="font">
            Fast-forward to today, and I’ve had the privilege of building
            several projects, including
            <span class="text-green"
              >E-commerce platform , a logistic company dashboard, a site
              generation tool </span
            >. My main focus these days is educate people about web
            development at <span class="text-green">The Perfect 404</span>.
          </p>
          <p class="font">Here are a few technologies I’ve been working with recently:</p>
           <div class="about-flex1">
            <ul class="skill-list">
                <li>JavaScript</li>
                <li>Figma</li>
                <li>CSS</li>
                <li>SASS</li>
             </ul>
             <ul class="skill-list ml-10">
               <li>Vue Js</li>
               <li>Tailwind CSS</li>
               <li>CSS</li>
               <li>SASS</li>
            </ul>
           </div>
        </div>
        <div>
          <img
            src="/assets/img/nay-hlaing-oo-1.jpg"
            alt=""
            class="about-img"
          />
        </div>
      </div>
    </div>
  </div>
    `,
};

export default About;
