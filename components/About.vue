<template>
  <section class="container w-full min-w-full" id="about">
    <div class="flex flex-col md:flex-row pb-8 tracking-wider">
      <div class="w-full text-left">
        <p class="pt-0">
          My primary focus is software development, with strong proficiency in C/C++ (C++11/14/17), C#, Java, x86_64 Assembly, PowerShell, and Python.
          I also have experience with collaboration tools and platforms including Atlassian, GitHub, service desk systems, and working within SLA frameworks.

          <br /><br />

          I approach problem-solving with a practical mindset, aiming to simplify processes and deliver clean, effective solutions.
          I value clarity, precision, and performance in the tools I build.

          <br /><br />

          In addition to my development background, I have professional experience as a Service Desk Analyst, supporting clients across a range of sectors including state and federal government, defence, and critical infrastructure.
          This work has involved secure environments and sensitive systems, requiring a strong focus on compliance, risk mitigation, and data protection.

          <br /><br />

          My technical scope includes Microsoft 365, CRM platforms, Windows Server administration, and user and identity management via Active Directory and Entra ID.
          I've contributed to compliance uplift projects, supported cyber security initiatives, and managed collaborative platforms such as SharePoint and Teams in high-trust environments.

          <br /><br />

          I contribute actively to my team, assist my team lead where possible, and work with a customer-focused mindset.
          My approach aligns with ITIL standards and agile delivery practices, and I place a strong emphasis on improving customer experience through thoughtful technical support and continuous improvement.

          <br /><br />

          Whether building software or supporting infrastructure, I take pride in delivering reliable, meaningful results, especially in environments where security, performance, and trust are critical.

          <br /> <br />

          E: <a href="mailto:ross@heyimross.com" class="link">ross@heyimross.com</a>
        </p>
        <p class="pt-4">

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