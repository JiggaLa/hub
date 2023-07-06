<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "primary", // primary, secondary, tertiary
  },
  leftIcon: {
    type: String,
    default: "",
  },
  rightIcon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    :class="{
      'anim-all': true,
      btn: true,
      primary: props.type === 'primary',
      secondary: props.type === 'secondary',
      tertiary: props.type === 'tertiary',
      red: props.type === 'red',
    }"
  >
    <i v-if="props.leftIcon" :class="props.leftIcon + ' text-[1.1rem]'" />
    <slot />
    <i v-if="props.rightIcon" :class="props.rightIcon + ' text-[1.1rem]'" />
  </button>
</template>

<style scoped lang="scss">
.btn {
  @apply cursor-pointer px-4 py-2 rounded-lg h-[34px] text-[0.9rem] font-semibold;
  @apply flex items-center justify-center gap-2;

  &.primary {
    @apply bg-white text-black border border-white;
    @apply hover:bg-transparent hover:text-white hover:border-white;
  }

  &.secondary {
    @apply bg-hub-black-2 text-white;
    @apply hover:bg-[#22262B];
  }

  &.tertiary {
    @apply bg-transparent text-white border border-[#2B3036];
    @apply hover:bg-hub-black-2/60;
  }

  &.red {
    @apply bg-[#CC4D4B] text-white border border-[#CC4D4B];
    @apply hover:bg-transparent;
  }
}
</style>
