<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  date: {
    type: String,
    default: "Title",
  },
  influencers: {
    type: Array,
    default: [],
  },
  statuses: {
    type: Object,
    default: {},
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="{ 'anim-all': true, 'post-card': true, active: props.selected }">
    <div class="flex flex-col gap-2">
      <h4 class="text-[1rem] leading-[1.5] font-medium">{{ props.title }}</h4>
      <span class="text-white/50 text-[0.8rem]">{{ props.date }}</span>
    </div>

    <div v-if="influencers.length > 0" class="flex flex-col gap-2">
      <span class="text-white/50 text-[0.875rem]">Influencers</span>
      <div class="flex gap-2 flex-wrap">
        <Tag v-for="influencer in props.influencers" :key="influencer">{{
          influencer
        }}</Tag>
      </div>
    </div>

    <div class="flex gap-1">
      <div
        :class="{
          status: true,
          green: props.statuses.h === 'green',
          grey: props.statuses.h === 'grey',
        }"
      >
        H
      </div>

      <div
        :class="{
          status: true,
          green: props.statuses.c === 'green',
          grey: props.statuses.c === 'grey',
        }"
      >
        S
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-card {
  @apply cursor-pointer flex flex-col gap-4 p-4 rounded-xl bg-hub-black-2/60;
  @apply hover:bg-hub-black-2;

  &.active {
    @apply bg-[#262B31];
  }
}

.status {
  @apply flex items-center justify-center rounded-full w-6 h-6 font-medium;

  &.green {
    @apply text-[#499924] bg-[#1B241E];
  }

  &.grey {
    @apply text-white bg-hub-black-1 border border-[#262B30];
  }
}
</style>
