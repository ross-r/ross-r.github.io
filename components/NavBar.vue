<script>
export default {
    data() {
        return {
            entries: [
                {
                    label: "Blog",
                    href: "/blog"
                },
                {
                    label: "Work",
                    href: "/work"
                },
                {
                    label: "Contact",
                    href: "/contact"
                },
            ]
        }
    },
}
</script>

<template>
    <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
            <a href="/" class="flex items-center no-underline hover:no-underline font-bold lg:text-4xl">
                <span>MyLogo</span>
            </a>

            <div class="flex justify-end content-center uppercase">
                <div class="font-semibold cursor-pointer inline-block text-blue-100 no-underline hover:text-blue-400 text-center h-auto transform duration-300 ease-in-out" v-for="entry in entries">
                    <a class="p-4" :href="`${entry.href}`">{{ entry.label }}</a>
                </div>
            </div>
        </div>
        
        <div class="px-8 pt-12 mx-auto w-full h-0.5">
            <span class="w-full h-0.5 block bg-neutral-800"></span>
        </div>
    </div>

</template>