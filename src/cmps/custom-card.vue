<template>
  <article class="custom-card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.custom-card {
  justify-content: space-between;
  background: white;
  padding: 2em;
  border: 1px solid black;
  border-radius: 5px;
}

</style>