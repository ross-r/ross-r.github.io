<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      filter: [],
      searchText: ""
    }
  },

  async setup() {
    // Persistent data that we don't touch.
    const data = await queryContent( 'blog' ).find();
    const tags = new Set( data.map( e => e.tags ).flat() );

    // Volatile data that we update.
    const content = ref( data );

    return {
      data,
      content,
      tags
    }
  },

  methods: {
    createURI( post ) {
      // Parse the path and extract the file name from it.
      //      /[folder]/[filename]
      // And then encode it as URI object.

      // ['/', '[folder]', '[filename]']
      const filename = post._path.toString().split( '/' )[ 2 ];
      return encodeURI( `/blog/${ filename }` );
    },

    // Called whenever search text is updated.
    updateSearch() {
      if ( this.searchText.length === 0 ) {
        this.content = this.data;
        this.updateFilter();
        return;
      }

      this.content = this.data.filter( e => e.title.toLowerCase().includes( this.searchText.toLowerCase() ) );
      this.updateFilter();
    },

    // Called when the search input field keyup event.
    search( self ) {
      this.searchText = self.target.value;
      this.updateSearch();
    },

    // Called whenever a tag is added or removed as a filter.
    updateFilter() {
      if( this.filter.length === 0 ) {
        return;
      }

      this.content = this.content.filter( post => this.filter.every( e => post.tags.includes( e ) ) );
    },

    addFilter( tag ) {
      if ( this.filter.includes( tag ) ) {
        return;
      }

      this.filter.push( tag );
      
      this.updateSearch();
    },

    isActiveFilterTag( tag ) {
      return this.filter.includes( tag );
    },

    removeFilter( tag ) {
      const index = this.filter.indexOf( tag );
      if ( index === -1 ) {
        return;
      }

      this.filter.splice( index, 1 );

      this.updateSearch();
    }
  }
}
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <div class="text-sm breadcrumbs mb-4">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </div>

      <div class="flex flex-col md:flex-row mb-4 min-w-full join">
        <input type="text" placeholder="Search posts..." class="input input-bordered flex-grow mb-1 md:mb-0 md:join-item placeholder-gray-400 placeholder-opacity-80"
          @keyup="(event) => search(event)" />

        <div class="dropdown md:dropdown-end self-end min-w-full md:min-w-0">
          <div tabindex="0" role="button" class=" text-base select select-bordered flex-grow min-w-full md:min-w-0 md:join-item">
            <!-- Pseudo place holder, not very ideal.. -->
            <span class="self-center truncate text-gray-400 text-opacity-80" v-if="filter.length === 0">Select Tags...</span>
            <span class="self-center truncate" v-if="filter.length > 0">{{ filter.join(', ') }}</span>
          </div>

          <ul tabindex="0" class="dropdown-content z-[1] menu min-w-full md:min-w-0 p-2 shadow bg-base-100 rounded-box w-52">
            <!-- <div v-if="filter.length">
              <li>
                <a class="flex flex-row justify-center">
                  <span class="flex-grow" @click="filter = []">Clear Filter</span>
                </a>
              </li>
              <div class="divider my-0"></div>
            </div> -->

            <li class="" v-for="tag in tags">
              <a class="flex flex-row" v-on:click.stop.prevent="addFilter(tag)">
                <span class="flex-grow">{{ tag }}</span>
                <div class="ms-1 bg-base-200 hover:bg-base-300 rounded-full p-1 h-6 w-6 self-center"
                  v-if="isActiveFilterTag(tag)" v-on:click.stop.prevent="removeFilter(tag)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-row gap-4 flex-wrap justify-center">
        <div class="card flex-grow w-96 bg-neutral text-neutral-content" v-for="entry in content">
          <div class="card-body">
            <a :href="createURI( entry )" class="card-title text-2xl capitalize">{{ entry.title }}</a>

            <div class="flex flex-row gap-2 flex-wrap">
              <div class="badge py-3" v-for="tag in entry.tags">
                {{ tag }}
              </div>
            </div>

            <p class="m-2">{{ entry.description }}</p>

            <div class="card-actions justify-end">
              <a class="btn hover:btn-primary" :href="createURI(entry)">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>