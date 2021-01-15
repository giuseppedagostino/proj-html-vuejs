var app = new Vue({
  el: "#root",
  data: {
    // array per header top
    contactInformations: [
      {
        positionHeader: true,
        positionFooter: true,
        positionMain: true,
        icon: '<i class="fas fa-phone-alt"></i>',
        text: "+1 (305) 1234-5678",
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        positionHeader: true,
        positionFooter: true,
        positionMain: true,
        icon: '<i class="fas fa-envelope"></i>',
        text: "hello@example.com",
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        // questa informazione di contatto deve comparire solo nel footer
        positionHeader: false,
        positionFooter: true,
        positionMain: true,
        icon: '<i class="fas fa-map-marker"></i>',
        text: "Main Avenue, 987",
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        positionHeader: true,
        positionFooter: false,
        positionMain: false,
        social: '<i class="fab fa-facebook-f"></i>',
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        positionHeader: true,
        positionFooter: false,
        positionMain: false,
        social: '<i class="fab fa-twitter"></i>',
        link: "https://github.com/giuseppedagostino/proj-html-vuejs",
      },
      {
        positionHeader: true,
        positionFooter: false,
        positionMain: false,
        social: '<i class="fab fa-linkedin-in"></i>',
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
            text: "Audit & Assurance",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Financial Advisory",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Analytics M&A",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Middle Marketing",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Legal Consulting",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Regulatory Risk",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
        ],
      },

      // terza colonna
      {
        title: "Support",
        links: [
          {
            text: "Responsibility",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Terms of Use",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "About Cookies",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Privacy Policy",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Accessibility",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
          {
            text: "Information",
            link: "https://github.com/giuseppedagostino/proj-html-vuejs",
          },
        ],
      },
    ],
  },
  methods: {

  },
});
