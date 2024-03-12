<script>
export default {
    data() {
        return {
            entries: [
                {
                    label: "Blog",
                    href: "/"
                },
                {
                    label: "Projects",
                    href: "/projects"
                },
                {
                    label: "Contact",
                    href: "/"
                },
                {
                    label: "Github",
                    href: "https://github.com/ross-r",
                    target: "_blank",
                    icon: {
                        src: "/images/github-mark-white.svg",
                        class: "w-5 h-5"
                    }
                }
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar bg-base-200 rounded-3xl pb-0">
        <div class="flex-1">
            <a href="/" class="p-2 hover:underline md:text-2xl font-bold flex gap-4 items-center">
                <NuxtImg src="/images/logo.jpg" class="rounded-full bg-base-200 md:w-12 md:h-12 w-9 h-9" />
            </a>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal">
                <li class="hidden md:inline" v-for="entry in entries">
                    <a :href="`${entry.href}`" :target="`${entry.target || ''}`">
                        <span v-if="entry.icon">
                            <NuxtImg :src="`${entry.icon.src}`" :class="`${entry.icon.class}`" />
                        </span>
                        <span v-else>{{ entry.label }}</span>
                    </a>
                </li>

                <li class="end-0 md:hidden">
                    <details>
                        <summary>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </summary>
                        <ul class="z-[1] p-2 shadow menu end-0 bg-base-100 rounded-box min-w-52">
                            <li v-for="entry in entries">
                                <a :href="`${entry.href}`">
                                    {{ entry.label }}
                                </a>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </nav>

    <div class="divider mt-0"></div>
</template>