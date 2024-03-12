<template>

  <div class="bg-base-200">

    <NavBar />

    <main class="select-none scroll-smooth leading-normal tracking-normal min-h-screen pt-8 mx-auto px-8 w-fit md:px-0 md:w-3/4 2xl:w-2/4">

      <section class="container" id="hero">
        <div class="p-8 mb-4 bg-base-200">
          <div class="w-full">
            <div class="max-w-full min-w-full">
              <h1 class="text-4xl font-normal dark:text-white">Hey, I'm Ross.</h1>
              <p class="py-6 mb-0 pb-0">I'm a software developer from Perth, Australia.</p>
              <p class="mt-0 pt-0 pb-4">I'm a versatile developer who is compotent in many languages.</p>
              <a class="btn btn-primary" href="/projects">Projects</a>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <About />
    </main>

    <Footer />
  </div>
</template>