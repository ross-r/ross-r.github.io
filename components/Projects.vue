<script>

// TODO:
//    1. Allow projects to be filtered by tags.
//    2. Better card layout.

const projects = [
  // {
  //   title: "CS2 Friends Stat",
  //   description: "A tool that displays the amount of games played, wins, losses and win rate of your Steam friends.",
  //   tags: [
  //     "JavaScript"
  //   ],
  //   link: {
  //     href: "./project/cs2",
  //     label: "Open"
  //   }
  // },
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
];

export default {
  data() {
    return {
      projects: projects,
      filters: [],
      tags: new Set( projects.map( e => e.tags ).flat() )
    }
  },

  methods: {
    updateFilter() {
      this.projects = projects.filter( project => this.filters.every( e => project.tags.includes( e ) ) );
    },

    addFilter( tag ) {
      this.filters.push( tag );
      this.updateFilter();
    },

    clearFilter() {
      this.filters = [];
      this.updateFilter();
    },

    isActiveFilterTag( tag ) {
      return this.filters.includes( tag );
    },

    removeFilter( tag ) {
      const index = this.filters.indexOf( tag );
      if ( index === -1 ) {
        return;
      }

      this.filters.splice( index, 1 );
      this.updateFilter();
    }
  }
}
</script>

<template>
  <div class="flex flex-grow w-full flex-row gap-2 flex-wrap mb-4 bg-neutral p-4 rounded-lg justify-center">
    <div class="badge hover:badge-ghost py-4 cursor-pointer" v-for="tag in tags" v-on:click.self="addFilter(tag)">
      {{ tag }}

      <div class="ms-1 bg-base-200 hover:bg-base-300 rounded-full p-1" v-if="isActiveFilterTag(tag)"
        @click="removeFilter(tag)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
    </div>
  </div>

  <div class="flex flex-row gap-4 flex-wrap justify-center">
    <div class="card flex-grow w-96 bg-neutral text-neutral-content" v-for="project in projects">
      <div class="card-body">
        <h2 class="card-title">{{ project.title }}</h2>

        <div class="flex flex-row gap-2 flex-wrap">
          <div class="badge py-3" v-for="tag in project.tags">
            {{ tag }}
          </div>
        </div>

        <p class="m-2">{{ project.description }}</p>

        <div class="card-actions justify-end">
          <button class="btn hover:btn-primary">
            <a :href=project.link.href target="_blank">
              {{ project.link.label }}
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>