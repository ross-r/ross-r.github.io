<template>
  <div class="bg-base-200">
    <NavBar />

    <main class="select-none scroll-smooth leading-normal tracking-normal min-h-screen mx-4 md:pt-8 md:mx-auto md:px-0 md:w-3/4 2xl:w-3/4">      
      <slot name="main"></slot>
    </main>

    <Footer />
  </div>

</template>