var app = new Vue({
  el: "#root",
  data: {
    // array per header top
    contactInformations: [
      {
        icon: '<i class="fas fa-phone-alt"></i>',
        text: "+1 (305) 1234-5678",
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        icon: '<i class="fas fa-envelope"></i>',
        text: "hello@example.com",
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        icon: '<i class="fab fa-facebook-f"></i>',
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        icon: '<i class="fab fa-twitter"></i>',
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        icon: '<i class="fab fa-linkedin-in"></i>',
        link: "https://www.linkedin.com/in/giuseppe-d-agostino/",
      },
    ],
    // array per header bottom
    nav: [
      "home",
      "about",
      "services",
      "team",
      "blog",
      '<i class="far fa-user"></i>',
      '<button class="button_green">get in touch</button>'
    ],
  },
  methods: {

  },
});
