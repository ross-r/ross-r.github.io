<script setup>
  import { Icon } from '@iconify/vue'

  import { onMounted } from 'vue';
  
  import dayjs from 'dayjs'
  import utc from 'dayjs-plugin-utc'
  import timezone from 'dayjs-timezone-iana-plugin'

  const updateTime = () => {
    document.getElementById( 'time' ).innerHTML = dayjs().tz( "Australia/Melbourne" ).format( "hh:mm A" )
  }

  onMounted( () => {
    dayjs.extend( utc )
    dayjs.extend( timezone )

    updateTime()
    setInterval( updateTime, 60000 ) // update every minute
  } )
</script>

<template>
  <Hero />
  
  <section class="container w-full min-w-full ">
    <ul class="">
      <li class="pb-1">
        Country: Australia
      </li>
      <li class="pb-1">
        State: Victoria
      </li>
      <li class="pb-1">
        Time: <span id="time"></span>
      </li>
      <li class="pb-1">
        Time Zone: Australia/Melbourne
      </li>
      <div class="list-disc">
        Contact:
        <li class="list-disc mx-2 flex gap-1 items-center">
          <Icon icon="mdi:email" width="24" height="24" />
          <a href="mailto:ross@heyimross.com" class="link">ross@heyimross.com</a>
        </li>
        <li class="list-disc mx-2 flex gap-1 items-center">
          <Icon icon="mdi:linkedin" width="24" height="24" />
          <a href="https://www.linkedin.com/in/ross-rhodes-93a036202/" target="_blank" class="link">LinkedIn</a>
        </li>
        <li class="list-disc mx-2 flex gap-1 items-center">
          <Icon icon="mdi:github" width="24" height="24" />
          <a href="https://github.com/ross-r" target="_blank" class="link">Github</a>
        </li>
      </div>
    </ul>

    <br /><br />
    If you've attempted to contact me by email and have not heard from me in 7 days, please contact me on LinkedIn.
  </section>
</template>