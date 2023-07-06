<script setup>
const posts = [
  {
    title: "Drive-in zobopralnica",
    date: "714/2023",
    influencers: ["Andrej Pavlicevic", "Gala Prestor"],
    statuses: {
      h: "green",
      c: "grey",
    },
  },
  {
    title: "Tisti prijateli, ki ga vedno skrbi, da ima nekaj medzobmi",
    date: "714/2023",
    influencers: [],
    statuses: {
      h: "green",
      c: "grey",
    },
  },
  {
    title: "Maturantski izlet 2.del",
    date: "7/11/2023",
    influencers: ["Andrej Pavlicevic", "Gala Prestor"],
    statuses: {
      h: "green",
      c: "grey",
    },
  },
  {
    title: "Influencerke v naravi",
    date: "7/13/2023",
    influencers: ["Gala Prestor"],
    statuses: {
      h: "green",
      c: "green",
    },
  },
  {
    title: "POV: malar za vse",
    date: "7/18/2023",
    influencers: ["Andrej Pavlicevic"],
    statuses: {
      h: "green",
      c: "green",
    },
  },
  {
    title: "ce zadanem",
    date: "7/20/2023",
    influencers: ["Andrej Pavlicevic", "Gala Prestor", "Kris Flajs"],
    statuses: {
      h: "green",
      s: "grey",
    },
  },
  {
    title: "Nogomet",
    date: "7/25/2023",
    influencers: ["Andrej Pavlicevic"],
    statuses: {
      h: "green",
      c: "grey",
    },
  },
];
</script>

<template>
  <div class="container">
    <PrimarySidebar />

    <!-- Secondary Sidebar -->
    <section
      class="w-[352px] h-screen border-r border-hub-black-1 sticky top-0 pb-24 overflow-y-auto overflow-x-clip scrollbar-hide lg:w-[280px] md:w-full"
    >
      <div
        class="px-4 py-5 flex items-center justify-between bg-hub-bg-black/70 sticky inset-x-0 top-0 z-10 backdrop-blur-[70px] backdrop-saturate-200"
      >
        <div class="flex items-center gap-2">
          <h3 class="text-[1.375rem] font-bold">Post plans</h3>
          <Tag>32</Tag>
        </div>

        <Button>Add post</Button>
      </div>

      <!-- Filter Wrapper -->
      <div class="flex items-center px-4">
        <Button type="secondary" right-icon="iconoir-filter">Filter</Button>
      </div>

      <!-- Posts -->
      <div class="flex flex-col gap-2 w-full px-4 mt-6">
        <PostCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :date="post.date"
          :influencers="post.influencers"
          :statuses="post.statuses"
          :selected="index === 0"
        ></PostCard>
      </div>
    </section>

    <!-- Page Body -->
    <section
      class="flex flex-col h-screen justify-start grow overflow-y-auto overflow-x-clip md:hidden"
    >
      <!-- Body Header -->
      <div
        class="w-full h-[50px] sticky top-0 flex items-center justify-between px-4 py-2 bg-hub-bg-black/70 backdrop-blur-[70px] backdrop-saturate-200 border-b border-hub-black-1 z-[6000]"
      >
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <Button
              type="secondary"
              left-icon="iconoir-nav-arrow-left"
              class="w-[34px]"
            />
            <Button
              type="secondary"
              left-icon="iconoir-nav-arrow-right"
              class="w-[34px]"
            />
          </div>

          <div class="flex items-center gap-2 text-[0.875rem] text-white/50">
            <span>Clients</span>
            <span>/</span>
            <span>Post plans</span>
            <span>/</span>
            <span class="text-white">Drive-in zobopralnica</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center">
            <img
              src="@assets/img/jay_avatar.jpg"
              alt="avatar"
              class="w-7 h-7 rounded-full border border-[#904FE0] object-cover object-center"
            />

            <img
              src="@assets/img/albert_unsplash.jpg"
              alt="avatar"
              class="w-7 h-7 -ml-[9px] rounded-full border border-[#F2C94B] object-cover object-center"
            />

            <img
              src="@assets/img/foto_unsplash.jpg"
              alt="avatar"
              class="w-7 h-7 -ml-[9px] rounded-full border border-[#49D21E] object-cover object-center"
            />

            <img
              src="@assets/img/rachel_unsplash.jpg"
              alt="avatar"
              class="w-7 h-7 -ml-[9px] rounded-full border border-[#BE0296] object-cover object-center"
            />

            <div
              class="w-7 h-7 -ml-[9px] rounded-full bg-hub-black-1 border border-[#2B3036] text-[0.75rem] font-medium flex items-center justify-center"
            >
              +4
            </div>
          </div>

          <Button type="secondary" left-icon="iconoir-add-user" />
        </div>
      </div>

      <!-- Content -->
      <div class="w-full flex flex-col justify-start px-4 pt-6 pb-40">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="text-white/50">For</span>
            <Tag>June 2023</Tag>
            <span class="text-white/50">period</span>
          </div>

          <div class="flex items-center">
            <h2 class="text-[2rem] font-medium max-w-[560px] mr-20">
              Drive-in zobopralnica
            </h2>

            <div class="flex items-center gap-2">
              <Button type="tertiary" right-icon="iconoir-edit">Edit</Button>
              <Button class="w-[118px]">Post</Button>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-6">
          <span class="text-white/80">Scheduled post date</span>
          <Tag class="border border-[#904FE0]">7 / 14 / 2023</Tag>
        </div>

        <p class="text-white/80 text-base leading-[1.8] max-w-[551px] mt-10">
          Id ad aliquip duis aliquip consequat aliquip minim. Amet pariatur
          consectetur est. Fugiat occaecat veniam duis ipsum laborum
          exercitation esse aliqua. Sint quis cillum do ullamco cupidatat
          voluptate. Eiusmod qui voluptate amet ut. Velit esse voluptate ea
          Lorem veniam proident dolor in consectetur occaecat duis commodo duis.
        </p>

        <div class="flex items-center gap-2 mt-6 w-[551px]">
          <div class="grow flex flex-col gap-4">
            <span class="text-white/80">Status H</span>
            <div
              class="w-full flex items-center justify-between border border-[#2D3239] p-2 rounded-lg"
            >
              <Tag class="text-[#499924] bg-[#1B241E] border-none"
                >Approved</Tag
              >
              <i class="iconoir-nav-arrow-down text-[1.1rem]" />
            </div>
          </div>

          <div class="w-[2px] h-[100px] bg-white/10 mx-4" />

          <div class="grow flex flex-col gap-4">
            <span class="text-white/80">Status C</span>
            <div
              class="w-full flex items-center justify-between border border-[#2D3239] p-2 rounded-lg"
            >
              <Tag>Waiting...</Tag>
              <i class="iconoir-nav-arrow-down text-[1.1rem]" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 mt-10">
          <span class="text-white/80">Influencers</span>
          <div class="flex gap-2 flex-wrap">
            <Tag class="text-base px-6 py-[10px] rounded-xl"
              >Andrej Pavlicevic</Tag
            >
            <Tag class="text-base px-6 py-[10px] rounded-xl">Gala Prestor</Tag>
          </div>
        </div>

        <div class="flex flex-col gap-4 mt-10">
          <span class="text-white/80">Preview</span>

          <div
            class="w-[466px] h-[791px] rounded-[31px] flex flex-col items-center justify-end bg-[url('@assets/img/vid_sample.jpg')] overflow-hidden bg-no-repeat bg-center"
          >
            <div
              class="w-[104px] h-[173px] mb-8 rounded-[22px] border border-white/10 flex items-center justify-center bg-hub-bg-black/40 backdrop-blur-[16px] backdrop-saturate-200"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.51 7.5617C11.3582 7.47168 11.1852 7.42345 11.0087 7.42191C10.8322 7.42037 10.6585 7.46557 10.5051 7.55292C10.3517 7.64028 10.2242 7.76667 10.1355 7.91926C10.0468 8.07185 10 8.2452 10 8.4217V31.5784C10 31.7549 10.0468 31.9282 10.1355 32.0808C10.2242 32.2334 10.3517 32.3598 10.5051 32.4471C10.6585 32.5345 10.8322 32.5797 11.0087 32.5782C11.1852 32.5766 11.3582 32.5284 11.51 32.4384L31.0483 20.86C31.1976 20.7715 31.3212 20.6456 31.407 20.4949C31.4929 20.3441 31.538 20.1735 31.538 20C31.538 19.8265 31.4929 19.656 31.407 19.5052C31.3212 19.3544 31.1976 19.2286 31.0483 19.14L11.51 7.5617Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="w-full bg-hub-bg-black/80 h-3">
              <div class="h-full w-[40%] rounded-3xl bg-[#FEF843]"></div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col justify-start items-start gap-4 mt-20 p-6 bg-[#1C1718] rounded-[14px] w-[551px]"
        >
          <div class="flex items-center gap-4">
            <i class="iconoir-warning-triangle text-[1.2rem]" />
            <span class="font-semibold text-base">Warning</span>
          </div>

          <p class="text-white/80 leading-[1.4]">
            This action cannot be undone. This will permanently delete
            <span class="text-[#FEF843] font-bold">Drive-in zobopralnica</span>
            and all history, action, comments, and remove all collaborators
            associations.
          </p>

          <Button type="red" right-icon="iconoir-trash">Delete post</Button>
        </div>
      </div>
    </section>
  </div>
</template>
