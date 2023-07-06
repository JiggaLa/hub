<script setup></script>

<template>
  <section
    class="w-[270px] h-screen border-r border-hub-black-1 sticky top-0 px-4 pt-5 pb-6 flex flex-col overflow-y-auto overflow-x-clip scrollbar-hide lg:hidden"
  >
    <div class="flex items-center justify-between mb-8">
      <svg
        viewBox="0 0 87 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[70px]"
      >
        <g clip-path="url(#clip0_9_477)">
          <path
            d="M3.74856 32.9062H0V11.8125H3.74856V20.2563H18.5292V11.8125H22.2778V32.9062H18.5292V24.3992H3.74856V32.9062Z"
            fill="white"
          />
          <path
            d="M31.7796 45C30.1627 45 28.871 44.4307 27.9046 43.2922C26.9381 42.1537 26.4549 40.7623 26.4549 39.1178V23.9062H30.8597V39.2759C30.8597 40.3301 31.3243 40.8571 32.2536 40.8571H45.7467C46.6573 40.8571 47.1127 40.3301 47.1127 39.2759V23.9062H51.5174V39.1178C51.5174 40.7623 51.0342 42.1537 50.0678 43.2922C49.1013 44.4307 47.8096 45 46.1927 45H31.7796Z"
            fill="white"
          />
          <path
            d="M46.1927 1.27259e-06C47.8096 1.41536e-06 49.1013 0.569246 50.0678 1.70774C51.0342 2.84624 51.5174 4.23772 51.5174 5.88223V21.0938H47.1127V5.72411C47.1127 4.66993 46.6481 4.14285 45.7187 4.14285H32.2257C31.315 4.14285 30.8597 4.66993 30.8597 5.72411V21.0938H26.4549V5.88223C26.4549 4.23772 26.9381 2.84624 27.9046 1.70774C28.871 0.569246 30.1627 -1.42768e-07 31.7796 0L46.1927 1.27259e-06Z"
            fill="url(#paint0_linear_9_477)"
          />
          <path
            d="M55.7196 32.9062L55.6945 11.8125H72.5766C73.5881 11.8125 74.4831 12.1287 75.2622 12.7613C76.0581 13.3727 76.6379 14.2265 77.0027 15.3228C77.2511 16.0608 77.3759 17.1466 77.3759 18.5802C77.3759 19.7608 77.1352 20.8466 76.6546 21.8375C77.2015 22.5122 77.558 23.2712 77.7239 24.1145C77.8894 24.9368 77.9723 25.9066 77.9723 27.024C77.9723 28.6685 77.5329 30.06 76.6546 31.1985C75.7924 32.337 74.649 32.9062 73.2233 32.9062H55.7196ZM59.6232 24.3992V28.7634H72.8005C73.6293 28.7634 74.0436 28.2363 74.0436 27.1821V25.9488C74.0436 25.4006 73.9445 25.0106 73.7457 24.7787C73.563 24.5257 73.2483 24.3992 72.8005 24.3992H59.6232ZM59.6232 20.2563H72.2041C73.0328 20.2563 73.4472 19.7292 73.4472 18.6751V17.5049C73.4472 16.4719 73.0328 15.9554 72.2041 15.9554H59.6232V20.2563Z"
            fill="white"
          />
          <path
            d="M79.2216 7.59375V4.24703H77.9724V3.375H81.4449V4.24703H80.1957V7.59375H79.2216Z"
            fill="white"
          />
          <path
            d="M81.7919 3.375H82.7537L84.028 5.43724H84.0904L85.3647 3.375H86.3265V7.59375H85.3647V5.72597L85.4271 5.0189H85.3647L84.3466 6.69814H83.7718L82.7537 5.0189H82.6913L82.7537 5.72597V7.59375H81.7919V3.375Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_9_477"
            x1="26.4549"
            y1="24.7622"
            x2="49.8126"
            y2="4.41382"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#69E243" />
            <stop offset="0.244792" stop-color="#09B3FF" />
            <stop offset="0.473958" stop-color="#904FE0" />
            <stop offset="0.75" stop-color="#FE01C8" />
            <stop offset="1" stop-color="#FFF842" />
          </linearGradient>
          <clipPath id="clip0_9_477">
            <rect width="86.3265" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <i class="iconoir-bell-notification text-[1.3rem] text-[#494646]" />
    </div>

    <div
      class="anim-all cursor-pointer bg-[#1A1D21] border border-[#22262B] rounded-lg pl-4 pr-2 py-2 h-[40px] flex items-center gap-2 hover:bg-[#1F2328]"
    >
      <i class="iconoir-search text-[1.2rem] text-[#494646]" />
      <span class="text-[#494646] text-[0.9rem] font-medium grow">Search</span>

      <div class="flex gap-[2px]">
        <span class="shortcut">⌘</span>
        <span class="shortcut">k</span>
      </div>
    </div>

    <div class="mt-8 flex flex-col w-full gap-4">
      <!-- Menu sections -->
      <div class="flex flex-col">
        <div class="flex items-center px-4 py-2">
          <span class="text-white text-[0.9rem] font-medium grow">Clients</span>
          <i class="iconoir-nav-arrow-up text-[1.2rem] text-white" />
        </div>
        <div class="w-[1px] h-[12px] rounded-lg bg-white/30 ml-6" />

        <div class="flex flex-col gap-1">
          <MenuButton indicator-label="18">Clients</MenuButton>
          <MenuButton
            indicator-label="4"
            icon-style="iconoir-flash text-[#09B3FD]"
            >Brainstorming</MenuButton
          >
          <MenuButton
            indicator-label="24"
            icon-style="iconoir-media-image text-[#9747FF]"
            >Scenes</MenuButton
          >
          <MenuButton
            indicator-label="32"
            icon-style="iconoir-calendar text-[#E4DD01]"
            :selected="true"
            >Post plans</MenuButton
          >
          <MenuButton
            indicator-label="8"
            icon-style="iconoir-star text-[#64CD33]"
            >Productions</MenuButton
          >
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center px-4 py-2">
          <span class="text-white text-[0.9rem] font-medium grow"
            >Verifications</span
          >
          <i class="iconoir-nav-arrow-up text-[1.2rem] text-white" />
        </div>
        <div class="w-[1px] h-[12px] rounded-lg bg-white/30 ml-6" />

        <div class="flex flex-col gap-1">
          <MenuButton icon-style="iconoir-media-image text-white/50"
            >Scenes</MenuButton
          >
          <MenuButton
            indicator-label="32"
            icon-style="iconoir-media-video-list text-white/50"
            >Posts</MenuButton
          >
          <MenuButton icon-style="iconoir-selective-tool text-white/50"
            >Productions</MenuButton
          >
          <MenuButton icon-style="iconoir-activity text-white/50"
            >Reports</MenuButton
          >
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center px-4 py-2">
          <span class="text-white text-[0.9rem] font-medium grow">Finance</span>
          <i class="iconoir-nav-arrow-up text-[1.2rem] text-white" />
        </div>
        <div class="w-[1px] h-[12px] rounded-lg bg-white/30 ml-6" />

        <div class="flex flex-col gap-1">
          <MenuButton icon-style="iconoir-page text-white/50"
            >Financial reports</MenuButton
          >
          <MenuButton icon-style="iconoir-clock text-white/50"
            >Worktime</MenuButton
          >
          <MenuButton icon-style="iconoir-lot-of-cash text-white/50"
            >Personal finances</MenuButton
          >
        </div>
      </div>
    </div>

    <div
      class="bg-hub-bg-black flex items-center justify-center absolute inset-x-auto bottom-0 w-[238px] pb-6"
    >
      <div
        class="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1A1D21]"
      >
        <img
          src="@assets/img/jay_avatar.jpg"
          alt="avatar"
          class="w-[37px] h-[53px] rounded-[8px] border border-[#904FE0] object-cover object-center"
        />
        <span class="text-white/50 text-[0.9rem] font-medium grow">Jay</span>
        <i
          class="iconoir-arrow-separate-vertical text-[1.2rem] text-white/50"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.primary-sidebar {
  @apply w-[270px] h-screen border-r border-hub-black-1 sticky top-0;
}

.shortcut {
  @apply p-2 flex items-center justify-center bg-[#24282E] text-[#787373] text-[0.8rem] rounded-[5px] w-5 h-5;
}
</style>
