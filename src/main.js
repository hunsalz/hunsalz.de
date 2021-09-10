// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import '@/assets/styles/app.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // Add meta data to global head
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  })
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Overpass:wght@100;300&display=swap",
  })
}
