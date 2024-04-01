<template>
  <section class="container" id="about">
    <div class="flex flex-col md:flex-row pb-8">
      <div class="w-full text-left">
        <p class="pt-0">
          I am drawn to the technology industry due to a lifelong immersion
          in and fascination with technology. Since a young age, I have been
          surrounded by and engaged with technology, learning and
          leveraging it to develop software and small programs for various
          tasks. This cumulative experience has fueled my passion to
          contribute towards improving the lives of millions worldwide.
        </p>
        <p class="pt-4">
          Throughout my life, I have consistently identified as a developer.
          Simply put, it is my craft. I view each seemingly simple problem as
          an opportunity to create a solution, aiming to enhance efficiency
          and simplify tasks for the future. My approach to problem-solving
          involves a unique perspective and an unwavering commitment to
          finding effective solutions tailored to the given circumstances. This
          mindset has defined my career, making me adept at navigating
          challenges and delivering impactful results.
        </p>
      </div>

      <div class="w-full pt-8 md:pl-24 md:pt-0">
        <div>
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              C/C++ <span class="pl-1 text-xs">std 14, std 17, std 20</span>
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="90">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="95%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              Java <span class="pl-1 text-xs">JDK 8u25</span>
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="80">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="80%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              C# <span class="pl-1 text-xs">ver. 6.0</span>
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="65">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="65%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              x64_86 <span class="pl-1 text-xs lowercase">instruction set</span>
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="55">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="55%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              JavaScript
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="70">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="70%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              Python
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="40">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="40%"></div>
          </div>
        </div>
        <div class="pt-8">
          <div class="flex items-end justify-between">
            <h4 class="font-body font-semibold">
              PHP
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary"><span data-animate-counter-to="80">0</span>%</h3>
          </div>
          <div class="mt-2 h-3 w-full rounded-full bg-neutral-700">
            <div class="h-3 rounded-full bg-primary transition-width duration-1000 ease-in-out w-0"
              data-animate-width-to="80%"></div>
          </div>
        </div>
        <span class="text-sm italic float-right pt-2">* language proficiency</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const animateWidth = ( shouldStagger, timeout ) => {
  const elements = document.querySelectorAll( '[data-animate-width-to]' );
  for ( let i = 0; i < elements.length; ++i ) {
    let ele = elements[ i ];

    const timeoutInterval = shouldStagger ? ( timeout * i ) : timeout;

    setTimeout( () => {
      ele.style[ 'width' ] = ele.attributes[ 'data-animate-width-to' ].value;
    }, timeoutInterval );
  }
}

const animateCounters = ( shouldStagger, timeout, duration ) => {
  const elements = document.querySelectorAll( '[data-animate-counter-to]' );
  for ( let i = 0; i < elements.length; ++i ) {
    let ele = elements[ i ];

    const timeoutInterval = shouldStagger ? ( timeout * i ) : timeout;

    setTimeout( () => {
      const attribute = ele.attributes[ 'data-animate-counter-to' ];
      const target = parseInt( attribute.value );
      let current = parseInt( ele.textContent );

      const increment = ( target - current ) / duration;

      const handle = setInterval( () => {
        if ( current >= target ) {
          clearInterval( handle );
          return;
        }

        current += increment;
        current = Math.min( current, target );

        ele.textContent = Math.floor( current );
      }, 1 );
    }, timeoutInterval );
  }
};

onMounted( () => {
  animateWidth( true, 250 );
  animateCounters( true, 250, 50 );
} );
</script>