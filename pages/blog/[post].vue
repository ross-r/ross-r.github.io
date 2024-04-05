<script setup>
import { useRoute } from 'vue-router';

// TODO: Add error handling and probably implement useAsyncFetch.
const route = useRoute();
const post = decodeURI( route.params.post );
const data = await queryContent( `/blog/${ post }` ).findOne()
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <div class="text-sm breadcrumbs mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div class="flex flex-col min-w-full mb-4">
        <h1 class="text-3xl font-semibold capitalize">{{data.title}}</h1>
        <div>{{data.date}}</div>
      </div>

      <ContentRenderer class="min-w-full prose prose-invert select-text text-base-content" :value="data" />
    </template>
  </BaseLayout>
</template>