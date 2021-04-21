<script>
    if ("serviceWorker" in navigator) {
        import("workbox-window").then(async ({ Workbox }) => {
            const wb = new Workbox("/serviceworker.js");
            const registration = await wb.register();
            wb.addEventListener("redundant", () => {
                location.reload();
                console.log("updated app");
            });
        });
    }
</script>
