<script setup>
const props = defineProps({
  iconStyle: {
    type: String,
    default: "iconoir-group text-[#CC4D4B]",
  },
  showIndicator: {
    type: Boolean,
    default: false,
  },
  indicatorLabel: {
    type: String,
    default: "0",
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="{ 'anim-all': true, 'm-button': true, active: props.selected }">
    <i :class="props.iconStyle + ' text-[1.2rem]'" />
    <span class="text-white/50 text-[0.9rem] font-medium grow">
      <slot />
    </span>
    <span v-if="props.indicatorLabel > 0" class="indicator">{{
      props.indicatorLabel
    }}</span>
  </div>
</template>

<style scoped lang="scss">
.m-button {
  @apply cursor-pointer;
  @apply rounded-lg pl-4 pr-2 py-2 h-[40px] flex items-center gap-2;
  @apply hover:bg-[#1A1D21];

  &.active {
    @apply bg-[#1D2125];
  }
}

.indicator {
  @apply p-2 flex items-center justify-center bg-[#24282E] text-[#787373] text-[0.8rem] rounded-[5px] w-5 h-5;
}
</style>
