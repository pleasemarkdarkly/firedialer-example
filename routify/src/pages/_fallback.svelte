<script>
    import { route, url } from "@roxi/routify";
    $: lastRoute = $route.last;
</script>

<div class="flex flex-col items-center justify-center gap-4 p-16">
    <div class="text-9xl">404</div>
    <div>
        Go back to <a
            href={`${
                lastRoute
                    ? lastRoute.leftover
                        ? lastRoute.leftover
                        : $url(lastRoute.path)
                    : $url("/")
            }`}
            class="text-purple-600"
            >{lastRoute.name ? lastRoute.name : "index"}</a
        >
    </div>
</div>
