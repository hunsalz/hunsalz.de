<template>
  <div class="layout">
    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>