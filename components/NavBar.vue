<script>
export default {
    data() {
        return {
            entries: [
                // {
                //     label: "Blog",
                //     href: "/blog"
                // },
                // {
                //     label: "Work",
                //     href: "/work"
                // },
                // {
                //     label: "Contact",
                //     href: "/contact"
                // },
            ]
        }
    },
}
</script>

<template>
    <nav class="navbar bg-base-200 rounded-3xl">
        <div class="flex-1">
            <a href="/" class="p-2 hover:underline md:text-2xl font-bold flex gap-4 items-center">
                <img src="https://avatars.githubusercontent.com/u/80952041?v=4" width="48" height="48" alt=""
                    class="rounded-full bg-base-200 md:w-12 md:h-12 w-9 h-9">
            </a>
        </div>

        <div class="flex-none">
            <ul class="menu menu-horizontal">
                <li class="">
                    <a href="/">Blog</a>
                </li>

                <li class="">
                    <a href="/">Projects</a>
                </li>

                <li class="">
                    <a href="/">Contact</a>
                </li>

                <li class="">
                    <a href="https://github.com/ross-r" target="_blank">
                        <img src="/assets/images/github-mark-white.svg" class="h-5 w-5">
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="divider"></div>
</template>