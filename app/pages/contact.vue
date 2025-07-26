<script setup>
  import { onMounted, ref } from 'vue';
  
  import dayjs from 'dayjs'
  import utc from 'dayjs-plugin-utc'
  import timezone from 'dayjs-timezone-iana-plugin'

  const tz = ref( "Australia/Melbourne" )
  const time = ref()

  const links = ref([
    {
      label: 'ross@heyimross.com',
      to: 'mailto:ross@heyimross.com',
      icon: 'mdi:email'
    },
    {
      label: 'LinkedIn',
      to: 'https://www.linkedin.com/in/ross-rhodes-93a036202/',
      icon: 'mdi:linkedin',
      target: '_blank'
    },
    {
      label: 'Github',
      to: 'https://github.com/ross-r',
      icon: 'mdi:github',
      target: '_blank'
    }
  ])

  const state = ref({
    subject: '',
    body: ''
  })

  const sendMail = () => {
    const subject = encodeURIComponent(state.value.subject)
    const body = encodeURIComponent(state.value.body)
    const mailtoLink = `mailto:ross@heyimross.com?subject=${subject}&body=${body}`
    navigateTo(mailtoLink, { external: true })
  }

  const updateTime = () => {
    time.value = dayjs().tz( tz.value ).format( "hh:mm:ss A" ) 
  }

  onMounted( () => {
    dayjs.extend( utc )
    dayjs.extend( timezone )

    updateTime()
    setInterval( updateTime, 1000 )
  } )
</script>

<template>
  <section class="container w-full min-w-full">
    <div class="w-full mb-4">
      <ul class="">
        <li class="pb-1">
          Country: Australia
        </li>
        <li class="pb-1">
          State: Victoria
        </li>
        <li class="pb-1">
          Time: {{ time }}
        </li>
        <li class="pb-1">
          Time Zone: {{ tz }}
        </li>
      </ul>

      <div class="list-disc">
        Contact:
        <ULink v-for="link in links" :key="link.label" :to="link.to" :target="link.target" class="ms-4 flex items-center gap-1">
          <UIcon :name="link.icon" />
          <span>{{ link.label }}</span>
        </ULink>
      </div>
    </div>

    <UCard>
      <UForm :state="state" class="space-y-4" @submit="sendMail">
        <UFormField label="Subject" name="subject">
          <UInput v-model="state.subject" class="w-full" />
        </UFormField>

        <UFormField label="Body" name="body">
          <UTextarea v-model="state.body" :rows="10" class="w-full" />
        </UFormField>
        
        <span class="flex flex-row">
          <UButton color="primary" variant="subtle" type="submit" class="justify-end">Compose Email</UButton>
        </span>
      </UForm>
    </UCard>
  </section>
</template>