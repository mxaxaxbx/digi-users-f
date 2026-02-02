<template>
  <div class="flex flex-row h-screen font-sans">
    <div
      class="
        flex flex-col justify-center items-start
        bg-[var(--bg)]
        w-full h-full
        my-auto py-6 px-8

        md:max-w-[500px] lg:min-w-[750px]
      ">

      <!-- logo and theme toggle -->
      <div class="flex justify-between w-full mb-4  sm:mb-24">

        <!-- Logos -->
        <div class="">
          <!-- logo fireweb -->
          <img
            v-if="app === 'fireweb'"
            :src="isLight
            ? '/img/logo-fireweb-light.svg'
            : '/img/logo-fireweb.svg'"
            alt="Logo"
            class="h-6 mt-1" />

          <!-- logo sky -->
          <img
            v-else-if="app === 'sky'"
            :src="isLight
              ? '/img/logo-sky.svg'
              : '/img/logo-sky-light.svg'"
            alt="sky Logo"
            class="h-6 mt-1"
          />
          <!-- logo Utils -->
          <img
            v-else-if="app === 'utils'"
            :src="isLight
              ? '/img/logo-utils-light.svg'
              : '/img/logo-utils.svg'"
            alt="utils Logo"
            class="h-6 mt-1"
          />
          <!-- logo inventory -->
          <img
            v-else-if="app === 'inventory'"
            :src="isLight
              ? '/img/logo-inventory-light.svg'
              : '/img/logo-inventory.svg'"
            alt="inventory Logo"
            class="h-6 mt-1"
          />
          <!-- logo care -->
           <img
            v-else-if="app === 'care'"
            :src="isLight
              ? '/img/logo-care-light.svg'
              : '/img/logo-care.svg'"
            alt="care Logo"
            class="h-6 mt-1"
            />
          <!-- logo digi -->
          <img
            v-else
            :src="isLight
              ? '/img/logo-digi-light.svg'
              : '/img/logo-digi.svg'"
            alt="utils Logo"
            class="h-6 mt-1"
          />
        </div>
        <button @click="toggleTheme"
          class="rounded-full px-1.5
          ">
          <img :src="isLight ? '/icon/icon-light.svg' : '/icon/icon-dark.svg'"
            alt="theme toggle"
            class="w-4 h-4 opacity-50 hover:opacity-100 transition" />
        </button>
      </div>

      <div class="
        flex flex-col justify-left items-left
        mx-auto my-auto
        ">
        <h1 class=" text-[var(--text)] px-4 text-3xl sm:text-[2.5rem] font-bold mb-2">
          It all starts here... &#58;&#41;</h1>
        <div class="
          flex items-left justify-left
          font-base text-md text-[#7f7f7f]
          mb-8 mx-auto px-4

          sm:text-[1.1rem]
          sm:mb-12
          ">
          <span>Sign in easily and securely with your Google account.</span>
        </div>
        <div class="flex justify-center w-full mx-auto px-4 mb-8  sm:mb-12">
          <a :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`"
            class="
              flex items-center justify-center
              bg-[var(--bg-secondary)]
              border border-[var(--border)]
              w-full py-2
              rounded-full

              hover:border-[var(--hover-border-gray)] hover:bg-[var(--hover-bg-gray)]
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
            ">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="google"
              class="w-6 h-6"/>
            <span class="ml-2 text-[var(--text)] font-semibold">Sign with Google</span>
          </a>
        </div>
        <div v-show="app !== 'fireweb'">
          <div class="flex items-center w-full px-4">
            <span class="flex-grow h-px bg-[var(--border)]"></span>
            <span class="px-4 text-[var(--text)] text-sm font-regular">or</span>
            <span class="flex-grow h-px bg-[var(--border)]"></span>
          </div>
          <!-- Email input -->
          <form @submit.prevent="submitEmail" class="" novalidate>
            <div ref="emailInput"
              class="
              relative
              flex flex-col justify-center
              w-full
              px-4 py-4 mb-4
              rounded-lg
              border
              " :class="isEmailInvalid ?
                'bg-[#ffa600]/10 border-[#FFA600] text-[#FFA600]'
                : 'bg-transparent border-transparent'">
              <div v-if="showAlert"
                class="
                  alert-text
                  flex items-center
                  whitespace-pre-line
                  w-full mb-4 mx-0
                  text-xs font-regular text-[#FFA600]
                  transition-all duration-400

                  sm:mx-4 sm:whitespace-normal
                ">
                <img src="/icon/icon-alert.svg" alt="alert" class="w-5 h-5 mr-2" />
                {{ alertMessage }}
              </div>
              <label for="email"
                class="text-[var(--text)] text-base font-regular px-4 pb-1.5">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                :placeholder="dynamicPlaceholder"
                @keydown="handleKey"
                @keyup="handleKey"
                class="
                  flex items-center justify-center
                  bg-[var(--bg)]
                  w-full
                  py-2 px-4
                  font-light text-sm
                  rounded-full border

                  placeholder:text-[var(--text)]
                  placeholder:opacity-30
                  placeholder:font-light

                  focus:outline-none focus:ring-2
                  focus:ring-gray-500 focus:ring-opacity-50
                  focus:bg-[var(--hover-bg-gray)]
                "
                  :class="isEmailInvalid
                    ? [
                      'bg-[#FFA600]/5 border-[#FFA600]',
                      'placeholder:text-[var(--text)]',
                      'hover:bg-[#ffa600]/10'
                    ]
                    : [
                      'bg-[#252525] border-[var(--border)] text-[var(--text)]',
                      'hover:border-[var(--hover-border-gray)] hover:bg-[var(--hover-bg-gray)]'
                    ]
                  "
                />
            </div>

            <div class="flex justify-center w-full px-4 mb-2  sm:mb-6">
              <button
                type="submit"
                :class="[
                  'flex items-center justify-center w-full',
                  'py-2 rounded-full transition-all duration-300 ease-in-out',

                  app === 'digi'
                    ? 'bg-[#F83B66]'
                    : app === 'fireweb'
                      ? 'bg-[#ED1C24]'
                      : app === 'utils'
                        ? 'bg-[#FFC506]'
                        :app === 'care'
                          ? 'bg-[#07CBB4]'
                        : app === 'sky'
                          ? 'bg-[#0B77F3]'
                          : 'bg-[#F83B66]',

                  // hover ring
                  app === 'digi'
                    ? 'hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]'
                    : app === 'fireweb'
                      ? 'hover:ring-4 hover:ring-[#ED1C24]/50'
                      : app === 'utils'
                        ? 'hover:shadow-[0_0_3px_3px_rgba(255,197,6,0.5)]'
                        : app=== 'care'
                          ? 'hover:shadow-[0_0_3px_3px_rgba(7,203,180,0.5)]'
                        : app === 'sky'
                          ? 'hover:shadow-[0_0_3px_3px_rgba(10,119,243,0.5)]'
                          : 'hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]',

                  // focus ring
                  app === 'digi'
                    ? 'focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)] focus:outline-none'
                    : app === 'fireweb'
                      ? 'focus:ring-4 focus:ring-[#ED1C24]/50 focus:outline-none'
                      : app === 'utils'
                        ? 'focus:shadow-[0_0_3px_3px_rgba(255,197,6,0.5)] focus:outline-none'
                        : app=== 'care'
                          ? 'focus:shadow-[0_0_3px_3px_rgba(7,203,180,0.5)] focus:outline-none'
                        : app === 'sky'
                          ? 'focus:shadow-[0_0_3px_3px_rgba(10,119,243,0.5)] focus:outline-none'
                          : 'focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]'
                ]">
                <span class="text-white font-semibold">Sign In</span>
                <img
                  v-if="!loading"
                  src="/icon/icon-signIn.svg"
                  alt="singIn"
                  class="w-6 h-6 ml-2" />
                <svg v-else class="animate-spin color-spin ml-4" width="20" height="20" viewBox="0 0 86 86" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <!-- eslint-disable-next-line max-len -->
                    <path d="M43 0C49.608 0 55.8671 1.49206 61.4609 4.15527C63.289 2.80154 65.5506 2 68 2C74.0751 2 79 6.92487 79 13C79 14.7395 78.5939 16.3835 77.875 17.8457C82.9856 24.9189 86 33.6068 86 43C86 66.7482 66.7482 86 43 86C19.2518 86 0 66.7482 0 43C0 19.2518 19.2518 0 43 0ZM43 8C23.67 8 8 23.67 8 43C8 62.33 23.67 78 43 78C62.33 78 78 62.33 78 43C78 35.685 75.7543 28.8952 71.917 23.2793C70.6999 23.7434 69.3801 24 68 24C61.9249 24 57 19.0751 57 13C57 12.3154 57.0659 11.6461 57.1855 10.9961C52.8493 9.07124 48.05 8 43 8ZM43 20C55.7025 20 66 30.2975 66 43C66 55.7025 55.7025 66 43 66C30.2975 66 20 55.7025 20 43C20 30.2975 30.2975 20 43 20Z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <span
          class="
            text-[#7f7f7f]/80 text-xs font-light
            text-center block
            mt-6 mb-0 sm:mb-2
          ">By continuing, you agree to our
          <span class="block sm:hidden"></span>
          <a href="/privacy-policy"
            target="_blank"
            class="text-[#7f7f7f] hover:text-[var(--text)] underline underline-offset-2 transition">
            Terms of Service
          </a>
          and
          <a href="/privacy-policy"
            target="_blank"
            class="text-[#7f7f7f]hover:text-[var(--text)] underline underline-offset-2 transition">
            Privacy Policy
          </a>.
        </span>
      </div>
      <div class="flex justify-center w-full mt-0 mb-0 sm:mt-16 sm:mb-4">
        <img
          :src="isLight
            ? '/img/logo-digi-light.svg'
            : '/img/logo-digi.svg'"
          alt="sky Logo"
          class="
            h-6 mt-1 mb-2
            opacity-10 hover:opacity-100
            transition-all duration-300 ease-in-out
          "/>
      </div>
    </div>

    <!--anuncio sky-->
    <div
      v-if="currentAd === 'sky'"
      class="
        flex flex-col flex-1
        justify-center items-center
        bg-[var(--bg)]
        min-h-screen p-4
        hidden

        sm:flex
      ">
      <a
        :href="skyAppLink"
        ref="planetContainer"
        @mouseenter="onHover(true)"
        @mouseleave="onHover(false)"
        @focus="onHover(true)"
        @blur="onHover(false)"
        class="
          group
          animated-card
          flex flex-col items-end
          w-full h-full
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          overflow-hidden
          rounded-lg
          cursor-pointer

          hover:border-[#0A77F3]
          hover:bg-[var(--hover-sky-ad)]
          hover:shadow-[0_0_15px_10px_rgba(10,119,243,0.2)]
          transition-all duration-300
        ">
        <div
          class="
            flex flex-col h-full w-full justify-between py-8 px-8
          ">
          <img
            :src="isLight
              ? '/img/logo-sky.svg'
              : '/img/logo-sky-light.svg'"
            alt="auth image"
            class="h-10 mr-auto"
          />
          <div class="ml-auto text-right">
          <h1
            class="text-4xl font-bold text-[var(--text)] mb-2
            ">Beyond space. Beyond limits.
          </h1>
          <p class="text-xl font-light text-[var(--text-terceary)] mb-12">Keep your files safe and within reach wherever you go.</p>
          <span
                class="
                  inline-flex items-center gap-1
                  border border-[#0A77F3]
                  bg-[#0A77F3]
                  rounded-full
                  px-4 py-2
                  text-white text-sm font-semibold
                  transition-colors duration-300
                  group-hover:bg-[#0A77F3]
                  group-hover:text-[var(--text)]
                  group-hover:shadow-[0_0_3px_3px_rgba(10,119,243,0.5)]

                  cursor-pointer
                ">Try it now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="
                    w-4 h-4 ml-2
                    transition-all duration-150
                    arrow-move
                  ">
                  <g mask="url(#mask0_1358_7)">
                    <path
                      fill-rule="evenodd"
                      d="M5.65005 10.0251L7.60005 10.8501C7.83338 10.3834 8.07505 9.93344 8.32505 9.50011C8.57505 9.06677 8.85005 8.63344 9.15005 8.20011L7.75005 7.92511L5.65005 10.0251ZM9.20005 12.1001L12.05 14.9251C12.75 14.6584 13.5 14.2501 14.3 13.7001C15.1 13.1501 15.85 12.5251 16.55 11.8251C17.7167 10.6584 18.6292 9.36261 19.2875 7.93761C19.9459 6.51261 20.2334 5.20011 20.15 4.00011C18.95 3.91677 17.6334 4.20427 16.2 4.86261C14.7667 5.52094 13.4667 6.43344 12.3 7.60011C11.6 8.30011 10.975 9.05011 10.425 9.85011C9.87505 10.6501 9.46672 11.4001 9.20005 12.1001ZM13.65 10.4751C13.2667 10.0918 13.075 9.62094 13.075 9.06261C13.075 8.50427 13.2667 8.03344 13.65 7.65011C14.0334 7.26677 14.5084 7.07511 15.075 7.07511C15.6417 7.07511 16.1167 7.26677 16.5 7.65011C16.8834 8.03344 17.075 8.50427 17.075 9.06261C17.075 9.62094 16.8834 10.0918 16.5 10.4751C16.1167 10.8584 15.6417 11.0501 15.075 11.0501C14.5084 11.0501 14.0334 10.8584 13.65 10.4751ZM14.125 18.5001L16.225 16.4001L15.95 15.0001C15.5167 15.3001 15.0834 15.5709 14.65 15.8126C14.2167 16.0543 13.7667 16.2918 13.3 16.5251L14.125 18.5001ZM21.95 2.17511C22.2667 4.19177 22.0709 6.15427 21.3625 8.06261C20.6542 9.97094 19.4334 11.7918 17.7 13.5251L18.2 16.0001C18.2667 16.3334 18.25 16.6584 18.15 16.9751C18.05 17.2918 17.8834 17.5668 17.65 17.8001L13.45 22.0001L11.35 17.0751L7.07505 12.8001L2.15005 10.7001L6.32505 6.50011C6.55838 6.26677 6.83755 6.10011 7.16255 6.00011C7.48755 5.90011 7.81672 5.88344 8.15005 5.95011L10.625 6.45011C12.3584 4.71677 14.175 3.49177 16.075 2.77511C17.975 2.05844 19.9334 1.85844 21.95 2.17511ZM3.92505 15.9751C4.50838 15.3918 5.22088 15.0959 6.06255 15.0876C6.90422 15.0793 7.61672 15.3668 8.20005 15.9501C8.78338 16.5334 9.07088 17.2459 9.06255 18.0876C9.05422 18.9293 8.75838 19.6418 8.17505 20.2251C7.75838 20.6418 7.06255 21.0001 6.08755 21.3001C5.11255 21.6001 3.76672 21.8668 2.05005 22.1001C2.28338 20.3834 2.55005 19.0376 2.85005 18.0626C3.15005 17.0876 3.50838 16.3918 3.92505 15.9751ZM5.35005 17.3751C5.18338 17.5418 5.01672 17.8459 4.85005 18.2876C4.68338 18.7293 4.56672 19.1751 4.50005 19.6251C4.95005 19.5584 5.39588 19.4459 5.83755 19.2876C6.27922 19.1293 6.58338 18.9668 6.75005 18.8001C6.95005 18.6001 7.05838 18.3584 7.07505 18.0751C7.09172 17.7918 7.00005 17.5501 6.80005 17.3501C6.60005 17.1501 6.35838 17.0543 6.07505 17.0626C5.79172 17.0709 5.55005 17.1751 5.35005 17.3751Z" clip-rule="evenodd"/>
                  </g>
                </svg>
          </span>
          </div>
        </div>
        <!-- solar system -->
        <div class="relative flex border jutify-self-end">
            <div
              class="w-full  h-full top-[-530px] right-[450px] rotate-[-10deg]
                absolute flex items-center justify-center
                opacity-50 group-hover:opacity-100 transition-opacity duration-300
              ">
              <svg
                :width="size"
                :height="size"
                viewBox="0 0 800 800"
                class="overflow-visible rotate-20"
                >
                <!-- Órbitas planetas -->
                <g v-for="(planet, i) in planets" :key="i" transform="rotate(-4  400 400)">
                  <!-- Órbita elíptica -->
                  <ellipse
                    cx="400"
                    cy="400"
                    :rx="planet.rx"
                    :ry="planet.ry"
                    fill="none"
                    stroke="#0A77F3"
                    stroke-width="0.5"
                    :stroke-opacity="planet.opacity"
                  />

                  <!-- Planeta -->
                  <circle
                    :cx="400 + planet.rx * Math.cos(planet.angle)"
                    :cy="400 + planet.ry * Math.sin(planet.angle)"
                    :r="planet.size"
                    :fill="planet.color"
                  />
                </g>
                <!-- Sol -->
                <defs>
                  <filter id="circle-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="8"
                      flood-color="#0A77F3"
                      flood-opacity="0.8"
                    />
                  </filter>
                </defs>
              <circle cx="400" cy="392" r="32" fill="var(--sun)"
                stroke="#0A77F3"
                filter="url(#circle-shadow)"
                stroke-width="0.5
                "/>
            </svg>
          </div>
        </div>
      </a>
    </div>
    <!-- fin anuncio sky-->
    <!--anuncio fireweb-->
    <div
      v-else-if="currentAd === 'fireweb'"
      class="
        flex flex-col flex-1
        justify-center items-center
        bg-[var(--bg)]
        min-h-screen p-4
        hidden

        sm:flex
      ">
      <a
        :href="skyAppLink"
        ref="planetContainer"
        @mouseenter="onHover(true)"
        @mouseleave="onHover(false)"
        @focus="onHover(true)"
        @blur="onHover(false)"
        class="
          group
          animated-card
          flex flex-col items-end
          w-full h-full
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          overflow-hidden
          rounded-lg
          cursor-pointer

          hover:border-[#FF242C]
          hover:bg-[var(--hover-fireweb-ad)]
          hover:shadow-[0_0_12px_8px_rgba(255,36,44,0.2)]
          transition-all duration-300
        ">
        <div
          class="
            flex flex-col justify-between
            h-full w-full py-8 px-8
          ">
          <img
            :src="isLight
              ? '/img/logo-fireweb-light.svg'
              : '/img/logo-fireweb.svg'"
            alt="auth image"
            class="h-10 mr-auto"
          />
          <div class="ml-auto text-right">
            <h1
              class="text-4xl font-bold text-[var(--text)] mb-2
              ">Your Firestore data, under control.
            </h1>
            <p
              class="text-xl font-light text-[var(--text-terceary)] mb-12">
              View, edit, and manage your Firestore JSON data in real time...
            </p>
            <span
              class="
                inline-flex items-center gap-1
                border border-[#FF242C]
                bg-[#FF242C]
                rounded-full
                px-4 py-2
                text-white text-sm font-semibold

                group-hover:bg-[#FF242C]
                group-hover:shadow-[0_0_3px_3px_rgba(255,36,44,0.5)]
                transition-colors duration-300
                cursor-pointer
              ">Try it now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="
                  w-4 h-4 ml-2
                  transition-all duration-150
                  arrow-move
                ">
                <g mask="url(#mask0_1358_7)">
                  <path
                    fill-rule="evenodd"
                    d="M5.65005 10.0251L7.60005 10.8501C7.83338 10.3834 8.07505 9.93344 8.32505 9.50011C8.57505 9.06677 8.85005 8.63344 9.15005 8.20011L7.75005 7.92511L5.65005 10.0251ZM9.20005 12.1001L12.05 14.9251C12.75 14.6584 13.5 14.2501 14.3 13.7001C15.1 13.1501 15.85 12.5251 16.55 11.8251C17.7167 10.6584 18.6292 9.36261 19.2875 7.93761C19.9459 6.51261 20.2334 5.20011 20.15 4.00011C18.95 3.91677 17.6334 4.20427 16.2 4.86261C14.7667 5.52094 13.4667 6.43344 12.3 7.60011C11.6 8.30011 10.975 9.05011 10.425 9.85011C9.87505 10.6501 9.46672 11.4001 9.20005 12.1001ZM13.65 10.4751C13.2667 10.0918 13.075 9.62094 13.075 9.06261C13.075 8.50427 13.2667 8.03344 13.65 7.65011C14.0334 7.26677 14.5084 7.07511 15.075 7.07511C15.6417 7.07511 16.1167 7.26677 16.5 7.65011C16.8834 8.03344 17.075 8.50427 17.075 9.06261C17.075 9.62094 16.8834 10.0918 16.5 10.4751C16.1167 10.8584 15.6417 11.0501 15.075 11.0501C14.5084 11.0501 14.0334 10.8584 13.65 10.4751ZM14.125 18.5001L16.225 16.4001L15.95 15.0001C15.5167 15.3001 15.0834 15.5709 14.65 15.8126C14.2167 16.0543 13.7667 16.2918 13.3 16.5251L14.125 18.5001ZM21.95 2.17511C22.2667 4.19177 22.0709 6.15427 21.3625 8.06261C20.6542 9.97094 19.4334 11.7918 17.7 13.5251L18.2 16.0001C18.2667 16.3334 18.25 16.6584 18.15 16.9751C18.05 17.2918 17.8834 17.5668 17.65 17.8001L13.45 22.0001L11.35 17.0751L7.07505 12.8001L2.15005 10.7001L6.32505 6.50011C6.55838 6.26677 6.83755 6.10011 7.16255 6.00011C7.48755 5.90011 7.81672 5.88344 8.15005 5.95011L10.625 6.45011C12.3584 4.71677 14.175 3.49177 16.075 2.77511C17.975 2.05844 19.9334 1.85844 21.95 2.17511ZM3.92505 15.9751C4.50838 15.3918 5.22088 15.0959 6.06255 15.0876C6.90422 15.0793 7.61672 15.3668 8.20005 15.9501C8.78338 16.5334 9.07088 17.2459 9.06255 18.0876C9.05422 18.9293 8.75838 19.6418 8.17505 20.2251C7.75838 20.6418 7.06255 21.0001 6.08755 21.3001C5.11255 21.6001 3.76672 21.8668 2.05005 22.1001C2.28338 20.3834 2.55005 19.0376 2.85005 18.0626C3.15005 17.0876 3.50838 16.3918 3.92505 15.9751ZM5.35005 17.3751C5.18338 17.5418 5.01672 17.8459 4.85005 18.2876C4.68338 18.7293 4.56672 19.1751 4.50005 19.6251C4.95005 19.5584 5.39588 19.4459 5.83755 19.2876C6.27922 19.1293 6.58338 18.9668 6.75005 18.8001C6.95005 18.6001 7.05838 18.3584 7.07505 18.0751C7.09172 17.7918 7.00005 17.5501 6.80005 17.3501C6.60005 17.1501 6.35838 17.0543 6.07505 17.0626C5.79172 17.0709 5.55005 17.1751 5.35005 17.3751Z" clip-rule="evenodd"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <!-- animacion fireweb -->
        <canvas ref="canvas" class="fixed inset-0 pointer-events-none" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
  ref,
} from 'vue';

import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();
const loading = ref(false);

const skyAppLink = ref(process.env.VUE_APP_SKY_URL);

const ads = ['sky'];
const currentAd = ref(null);

onMounted(() => {
  currentAd.value = ads[Math.floor(Math.random() * ads.length)];
});

// Solar system
const size = 1650;
const speedMultiplier = ref(1);
const HOVER_MULTIPLIER = 2;

/* Dynamic placeholder for email input */
/* eslint-disable */
const isCapOn = ref(false);
const normalPlaceholder = 'what’s-your@email.com';

const app = computed(() => typeof route.query.app === 'string' ? route.query.app : '');

function handleKey(e: KeyboardEvent) {
  if (
    e.getModifierState &&
    e.getModifierState('CapsLock') !== isCapOn.value
  ) {
    isCapOn.value = e.getModifierState('CapsLock');
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey);
  window.addEventListener('keyup', handleKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey);
  window.removeEventListener('keyup', handleKey);
});

const dynamicPlaceholder = computed(() => {
  if (isCapOn.value) {
    return normalPlaceholder.toUpperCase();
  } else {
    return normalPlaceholder.toLowerCase();
  }
});

/* cometa animation */

/* eslint-enable */
/* Email valid */
const email = ref('');
const showAlert = ref(false);
const alertMessage = ref('');
const isEmailInvalid = ref(false);

const isLight = computed(() => store.state.theme.theme === 'light');

const toggleTheme = () => {
  store.dispatch('theme/toggleTheme');
  const newTheme = store.state.theme.theme;

  document.documentElement.classList.toggle('light', newTheme === 'light');
};

function showCustomAlert(message) {
  alertMessage.value = message;
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
  }, 6000);
}

async function submitEmail() {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    isEmailInvalid.value = true;
    showCustomAlert('WTF was that? Try a real email.\nCome on! You know; with an @ and stuff.');

    setTimeout(() => {
      isEmailInvalid.value = false;
    }, 6000);

    return;
  }

  isEmailInvalid.value = false;

  try {
    loading.value = true;

    await store.dispatch('auth/sendcode', {
      email: emailValue,
    });

    router.push({
      path: '/auth/check-code',
      query: {
        email: emailValue,
        app: route.query.app,
      },
    });
  } catch (error: any) {
    console.error(error);
    showCustomAlert('Something went wrong while sending your code.');
  } finally {
    loading.value = false;
  }
}

const SCOPES = ref(['openid', 'email', 'profile', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']);

const uriquery = ref<string>('');

function generateUri() {
  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '';
  sessionStorage.setItem('app', app.value); // Default to empty string if app is not provided
  sessionStorage.setItem('redirect', redirect); // Default to empty string if redirect is not provided

  // scopes to string
  const scopes = SCOPES.value.join(' ');

  const queryObject: any = {
    response_type: 'code',
    client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.VUE_APP_DIGI_USERS_F}/auth/validategoogletoken`,
    scope: scopes,
    access_type: 'offline',
    prompt: 'consent',
  };

  uriquery.value = Object.keys(queryObject)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
    .join('&');
}

function addNecessaryScopes() {
  switch (app.value) {
    case 'fireweb': {
      SCOPES.value.push('https://www.googleapis.com/auth/cloud-platform.read-only');
      SCOPES.value.push('https://www.googleapis.com/auth/datastore');
      return;
    }

    default: {
      console.error('App not supported');
    }
  }
}

onMounted(async () => {
  try {
    addNecessaryScopes();
    generateUri();
  } catch (error) {
    console.error(error);
  }
});
const testimonials = [
  {
    text:
      'Honestly, this app makes things so much easier. Everything feels smooth, simple, and actually helpful. It’s rare to find something that works this well and still feels effortless.',
    avatar: '/img/photo.png',
    handle: 'saldefrutitas',
  },
  {
    text:
      'I love how intuitive the interface is — saves me time and stress every day. Highly recommended!',
    avatar: '/img/photo2.png',
    handle: 'jimjim',
  },
  {
    text:
      'Small details, big impact. Managing content used to be such a headache constantly switching tabs, editing raw JSON in Firestore, and praying I didn’t break anything. Now everything feels smooth and human. What used to take ten minutes of copy-paste and double-checking takes seconds. It’s honestly a relief.',
    avatar: '/img/photo3.png',
    handle: 'codelover',
  },
];

const currentIndex = ref(0);
const intervalMs = 10000;
let timer: number | null = 0;
let paused = false;

/* Avanza al siguiente testimonio. */
function next() {
  if (paused) {
    return;
  }

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return;
  }

  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

/** Inicia el intervalo de rotación */
function startRotation() {
  // Limpia cualquier timer previo por seguridad
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }

  timer = setInterval(next, intervalMs);
}

/** Pausa la rotación (usado en mouseenter / focusin) */
function pauseRotation() {
  paused = true;
}
/** Reanuda la rotación (usado en mouseleave / focusout) */
function resumeRotation() {
  paused = false;
}

onMounted(() => {
  startRotation();
});

onUnmounted(() => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

function onHover(isHovering) {
  speedMultiplier.value = isHovering ? HOVER_MULTIPLIER : 1;
}

const planets = reactive([
  {
    rx: 80,
    ry: 30,
    angle: 10,
    speed: 0.01,
    size: 3,
    opacity: 0.8,
    color: computed(() => (isLight.value ? '#0077FF' : '#E9F3FF')),
  },
  {
    rx: 120,
    ry: 48,
    angle: 8,
    speed: 0.009,
    size: 4,
    opacity: 0.7,
    color: computed(() => (isLight.value ? '#3A93FF' : '#004CA8')),
  },
  {
    rx: 180,
    ry: 65,
    angle: 2,
    speed: 0.004,
    size: 5,
    opacity: 0.6,
    color: computed(() => (isLight.value ? '#005ECE' : '#84BCFF')),
  },
  {
    rx: 250,
    ry: 80,
    angle: 2.5,
    speed: 0.002,
    size: 8,
    opacity: 0.5,
    color: computed(() => (isLight.value ? '#9FCBFF' : '#3792FF')),
  },
  {
    rx: 310,
    ry: 95,
    angle: 1.5,
    speed: 0.001,
    size: 2,
    opacity: 0.4,
    color: computed(() => (isLight.value ? '#0074FF' : '#E9F3FF')),
  },
]);

function animate() {
  planets.forEach((planet, index) => {
    planets[index].angle += planet.speed * speedMultiplier.value;
  });

  requestAnimationFrame(animate);
}

onMounted(() => {
  animate();
});
// end solar system

</script>

<style scoped>
.group:hover .arrow-move {
    animation: arrowMove 1s ease-in-out;
  }

  @keyframes arrowMove {
    1% {
      transform: rotate(0deg) translate(0, 0);
      opacity: 1;
    }
    40% {
      transform: rotate(0deg) translate(6px, -6px);
      opacity: 0;
    }
    60% {
      transform: rotate(0deg) translate(-6px, 6px);
      opacity: 0;
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
      opacity: 1;
    }
  }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease, transform 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
