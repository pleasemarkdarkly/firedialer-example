<script>
    import firebase from "firebase/app";
    import { goto } from "@roxi/routify";
    import { User } from "sveltefire";
    const surpriseBanner = ["../../svgs/icons/tyrannosaurus.svg"];
    let reminderEmail = "";
    let randomPicker = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };
</script>

<User
    on:user={() => {
        if (firebase && firebase?.auth()?.currentUser) {
            $goto("/");
        }
    }}
>
    <section
        class="flex justify-center items-center p-2 md:p-16 dark:text-white dark:bg-gray-800 mb-16"
        slot="signed-out"
    >
        <div
            class="relative bg-gray-300 dark:bg-gray-900 p-8 rounded-xl shadow flex flex-col gap-8 w-full md:w-auto"
        >
            <div>
                <picture class="flex justify-center items-center">
                    <img
                        src={randomPicker(surpriseBanner)}
                        alt=""
                        class="w-32"
                    />
                </picture>
                <br />
                <hr />
                <br />
                <p>
                    If a user matches the provided email, we will will send you
                    a reset link.
                </p>
            </div>
            <div class="w-full">
                <label
                    class="block mb-2 text-xs font-bold text-gray-700 dark:text-gray-100 uppercase"
                    for="login-email"
                >
                    Email
                </label>
                <input
                    id="login-email"
                    type="email"
                    class="w-full p-3 text-sm text-gray-700 placeholder-gray-400 bg-white transition-all duration-150 ease-linear rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    bind:value={reminderEmail}
                />
            </div>
            <button class="bg-gray-700 text-white btn"> Reset Account </button>
        </div>
    </section>
</User>
