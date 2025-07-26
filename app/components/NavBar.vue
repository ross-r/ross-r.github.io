<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Resume',
    to: '/resume'
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
  {
    label: '',
    icon: 'mdi:github',
    to: 'https://github.com/ross-r',
    target: '_blank'
  }
])
</script>

<template>
  <section class="print-hidden sticky top-0 z-50">
    <header class="flex min-w-full max-w-full items-center justify-between p-4 backdrop-blur border-b border-default">
      <NuxtLink to="/" class="flex items-center gap-4">
        <UAvatar src="/images/logo.jpg" alt="Ross" />
      </NuxtLink>

      <div class="flex place-self-end">
        <UNavigationMenu :items="items" class="w-full justify-center hidden md:flex" />
        
        <UDropdownMenu class="md:hidden" :items="items">
          <UButton icon="i-lucide-menu" color="neutral" variant="ghost" />
        </UDropdownMenu>
      </div>
    </header>

  </section>
</template>