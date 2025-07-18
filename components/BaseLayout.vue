<template>
  <div class="bg-base-200">

    <NavBar />

    
    <main class="select-none scroll-smooth leading-normal tracking-normal min-h-screen mx-4 md:pt-8 md:mx-auto md:px-0 md:w-3/4">

      <section class="container" id="hero">
        <div class="p-0 mb-4 bg-base-200">
          <div class="w-full tracking-wider">
            <div class="max-w-full min-w-full">
              <h1 class="text-4xl font-normal dark:text-white">👋 Hey, I'm Ross.</h1>
              <p class="mx-4 py-6 mb-0 pb-4">I'm a developer who enjoys building efficient systems and understanding how things work at a fundamental level.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>


      <slot name="main"></slot>

    </main>

    <Footer />
  </div>

</template>