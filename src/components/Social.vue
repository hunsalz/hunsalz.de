<template>
  <aside class="flex space-x-4 justify-center items-center mx-auto my-4 w-screen bg-white">
    <a
      href="https://github.com/hunsalz"
      class="p-2"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <GithubIcon class="icon-lg" />
    </a>
    <a
      href="https://www.linkedin.com/in/markus-hunsalz"
      class="p-2"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <LinkedinIcon class="icon-lg" />
    </a>
  </aside>
</template>

<script>
import GithubIcon from "vue-material-design-icons/Github"
import LinkedinIcon from "vue-material-design-icons/Linkedin"

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
  },
}
</script>
