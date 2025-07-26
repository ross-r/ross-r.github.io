<script setup lang="ts">
class Skill {
  label: string;
  subtext?: string;
  current: number;
  target: number;

  constructor( label: string, target: number, subtext?: string ) {
    this.label = label;
    this.subtext = subtext;
    this.current = 0;
    this.target = target;
  }
}

const skills = ref< Skill[] >([
  new Skill( 'C/C++', 85, 'std 14, std 17, std 20' ),
  new Skill( 'Java', 75, 'JDK 8u25' ),
  new Skill( 'C#', 65, 'ver. 6.0' ),
  new Skill( 'x64_86', 60, 'instruction set' ),
  new Skill( 'JavaScript', 75 ),
  new Skill( 'Python', 40 ),
  new Skill( 'PHP', 55 ),
  new Skill( 'PowerShell', 75 )
])

const animate = ( skill: Skill ) => {
  const interval = setInterval(() => {
    if( skill.current >= skill.target ) {
      clearInterval( interval ) 
      return
    }

    skill.current++
  }, 10 )
}

onMounted(() => {
  skills.value.forEach( ( skill, i ) => {
    setTimeout( () => animate( skill ) , i * 250 )
  })
})

</script>

<template>
  <section id="hero" class="container w-full min-w-full print-hidden">
    <UCard variant="soft" class="mb-12">
      <div class="w-full tracking-wider">
        <div class="max-w-full min-w-full">
          <h1 class="text-4xl font-normal dark:text-white pb-4">👋 Hey, I'm Ross.</h1>
          <p class="">I'm a developer who enjoys building efficient systems and understanding how things work at a fundamental level.</p>
        </div>
      </div>
    </UCard>  
    
    <div class="divider"/>
    
    <div class="flex flex-col md:flex-row md:gap-4">
      <div class="w-full text-left">
        <p class="pt-0">
          My primary focus is software development, with strong proficiency in C/C++ (C++11/14/17), C#, Java, x86_64 Assembly, PowerShell, and Python, among other languages.
          I also have experience with collaboration tools and platforms including Atlassian, GitHub, service desk systems, and working within SLA frameworks.

          <br ><br >

          I approach problem-solving with a practical mindset, aiming to simplify processes and deliver clean, effective solutions.
          I value clarity, precision, and performance in the tools I build.

          <br ><br >

          In addition to my development background, I have professional experience as a Service Desk Analyst, supporting clients across a range of sectors including state and federal government, defence, and critical infrastructure.
          This work has involved secure environments and sensitive systems, requiring a strong focus on compliance, risk mitigation, and data protection.

          <br ><br >

          My technical scope includes Microsoft 365, CRM platforms, Windows Server administration, and user and identity management via Active Directory and Entra ID.
          I've contributed to compliance uplift projects, supported cyber security initiatives, and managed collaborative platforms such as SharePoint and Teams in high-trust environments.

          <br ><br >

          I contribute actively to my team, assist my team lead where possible, and work with a customer-focused mindset.
          My approach aligns with ITIL standards and agile delivery practices, and I place a strong emphasis on improving customer experience through thoughtful technical support and continuous improvement.

          <br ><br >

          Whether building software or supporting infrastructure, I take pride in delivering reliable, meaningful results, especially in environments where security, performance, and trust are critical.

          <br > <br >

          E: <a href="mailto:ross@heyimross.com" class="link">ross@heyimross.com</a>
        </p>
        <p class="pt-4"/>
      </div>

      <div class="w-full pt-8 md:pt-0">
        <div v-for="skill in skills" :key="skill.label" class="mb-4">
          <div class="flex items-end justify-between mb-1">
            <h4 class="font-body font-semibold">
              <span>{{ skill.label }}</span>
              <span v-if="skill.subtext" class="pl-1 text-xs">{{ skill.subtext }}</span>
            </h4>
            <h3 class="font-body text-1xl font-bold text-primary">
              {{ skill.current }}%
            </h3>
          </div>

          <UProgress v-model="skill.current" class="transition-transform duration-1000 ease-in-out" :min="0" :max="100" />
        </div>

        <span class="text-sm italic float-right pt-2">* language proficiency</span>
      </div>
    </div>
  </section>
</template>