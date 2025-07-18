<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      AUTH_TOKEN: "eyAidHlwIjogIkpXVCIsICJhbGciOiAiRWREU0EiIH0.eyAiaXNzIjogInI6MTBCNF8yNTE3N0RCN182OTZEMSIsICJzdWIiOiAiNzY1NjExOTgxNDQ3MDk5OTgiLCAiYXVkIjogWyAid2ViOnN0b3JlIiBdLCAiZXhwIjogMTc0MDk4Njc3NywgIm5iZiI6IDE3MzIyNTkyMzYsICJpYXQiOiAxNzQwODk5MjM2LCAianRpIjogIjAwMTVfMjVFN0Y4MzlfQUZBQjUiLCAib2F0IjogMTcyNzAyNDY3MiwgInJ0X2V4cCI6IDE3NDQ5Mzg4OTAsICJwZXIiOiAwLCAiaXBfc3ViamVjdCI6ICIxNTkuMTk2LjIwMy4xMjgiLCAiaXBfY29uZmlybWVyIjogIjE1OS4xOTYuMjAzLjEyOCIgfQ.hFmKZHGPBJUvFMrlL0Urn7EhAAOFhNG21xM0LMHXkgCgI_Ocy1SI7AnOIPU-abeHKOQBGbhRZtjvQokZ1MlCBA",
      SteamID: "",
      Friends: [],
    }
  },

  async setup() {

  },

  methods: {
    async fetch_auth_token( self ) {
      const res = await $fetch( 'https://store.steampowered.com/pointssummary/ajaxgetasyncconfig', { method: 'GET' } )

    }
  }
}
</script>

<template>
  <BaseLayout>
    <template v-slot:main>

      <a class="btn hover:btn-primary" :href="fetch_auth_token()">
        Get Auth Token
      </a>

    </template>
  </BaseLayout>
</template>