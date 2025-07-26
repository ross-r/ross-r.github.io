<script setup lang="ts">
const tags = ref([
  'C++',
  'Java',
  'C#',
  'Python',
  'Simulation',
  'Game',
  'JavaScript',
  'TypeScript',
  'Electron',
  'Application',
  'Utility/Tool',
  'Mod',
  'SQF',
  'Library'
])
const filter = ref([])

const projects = ref([
  {
    title: "VS Project Renamer",
    description: "A simple tool to rename Visual Studio project files to a new name.",
    tags: [
      "C++",
      "Visual Studio"
    ],
    link: {
      href: "https://github.com/ross-r/vs_project_renamer",
      label: "View on Github"
    }
  },
  {
    title: "Game of Life",
    description: "Conway's Game of Life.",
    tags: [
      "C++",
      "Simulation",
      "Game"
    ],
    link: {
      href: "https://github.com/ross-r/game-of-life",
      label: "View on Github"
    }
  },
  {
    title: "Snake",
    description: "Snake, except it uses A* path finding and plays all by itself.",
    tags: [
      "C++",
      "Game"
    ],
    link: {
      href: "https://github.com/ross-r/snake",
      label: "View on Github"
    }
  },
  {
    title: "Tetris",
    description: "The classic Tetris game.",
    tags: [
      "C++",
      "Game"
    ],
    link: {
      href: "https://github.com/ross-r/tetris",
      label: "View on Github"
    }
  },
  {
    title: "CS Server Selector",
    description: "A server selector/blocker tool for the video game Counter-Strike 2. With this tool, you can block specific servers of your choice by adding it to your firewall.",
    tags: [
      "JavaScript",
      "TypeScript",
      "Electron",
      "Application",
      "Utility/Tool"
    ],
    link: {
      href: "https://github.com/ross-r/cs-server-selector",
      label: "View on Github"
    }
  },
  {
    title: "ArmA Pawnee PvP",
    description: "A mission file for the video game ArmA 3. You're spawned into a vehicle where the objective is to dog fight with other players in a multiplayer server.",
    tags: [
      "SQF",
      "Mod"
    ],
    link: {
      href: "https://github.com/ross-r/arma_pawnee_pvp",
      label: "View on Github"
    }
  },
  {
    title: "ArmA RCON",
    description: "An incomplete project. This was destined to be an implementation of the RCON protocol for the video game ArmA 3, which allows server owners to remotely administrate a server and execute commands.",
    tags: [
      "C++",
      "JavaScript",
      "Electron",
      "Library",
      "Utility/Tool"
    ],
    link: {
      href: "https://github.com/ross-r/arma_rcon",
      label: "View on Github"
    },
  }
])

const filteredProjects = computed(() => {
  if( filter.value.length === 0 ) {
    return projects.value
  }

  return projects.value.filter( project => filter.value.every( e => project.tags.includes( e ) ) )
})
</script>

<template>
  <seciton>
    <UCard>
      <USelectMenu v-model="filter" placeholder="Filter" multiple :items="tags" class="w-full overflow-ellipsis mb-4" />
      
      <div class="grid grid-rows-3 grid-cols-2 gap-4 w-full">
        <UCard v-for="project in filteredProjects"  :key="project" variant="subtle">
          <template #header>
            {{ project.title }}
          </template>

          <div class="w-full h-full">
            <p>{{ project.description }}</p>
          </div>

          <template #footer>
            <UButton color="primary" variant="subtle" :href="project.link.href" target="_blank">{{ project.link.label }}</UButton>
          </template>
        </UCard>
      </div>
    </UCard>
  </seciton>
</template>