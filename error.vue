<script setup>
const error = useError();
const handleError = () => {
  clearError( {
    redirect: '/',
  } );
};
</script>

<template>
  <BaseLayout>
    <template v-slot:main>
      <h1 class="text-4xl font-normal dark:text-white">{{ error.statusCode }} - {{ error.statusMessage }}</h1>
      <button class="btn btn-outline mt-4" @click="handleError()">Take me home!</button>
    </template>
  </BaseLayout>
</template>