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

    // array FOOTER
    footerArray: [
      // prima colonna
      {
        title: "About",
        links: [
          {
            text: "The Company",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Institutional",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Social & Events",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Innovation",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Environment",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Technology",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
        ],
      },

      // seconda colonna
      {
        title: "Services",
        links: [
          {
            text: "The Company",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Institutional",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Social & Events",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Innovation",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Environment",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Technology",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
        ],
      },

      // terza colonna
      {
        title: "Support",
        links: [
          {
            text: "The Company",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Institutional",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Social & Events",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Innovation",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Environment",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Technology",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
        ],
      },
    ],
  },
  methods: {

  },
});
