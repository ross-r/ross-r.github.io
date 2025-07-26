<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <section class="select-none scroll-smooth leading-normal tracking-normal">
    <div class="print-hidden">
      <footer class="flex min-w-full max-w-full items-center justify-between p-4 backdrop-blur border-t border-default">
        <aside class="grid-flow-col items-center">
          <p>Copyright © {{ currentYear }}</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <UButton icon="mdi:github" color="neutral" variant="link" to="https://github.com/ross-r" />
        </nav>
      </footer>
    </div>
  </section>
</template>