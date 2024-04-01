<template>
  <div class="bg-base-200">

    <NavBar />

    <main
      class="select-none scroll-smooth leading-normal tracking-normal min-h-screen pt-8 mx-auto px-8 w-fit md:px-0 md:w-3/4 2xl:w-2/4">

      <slot name="main"></slot>

    </main>

    <Footer />
  </div>

</template>