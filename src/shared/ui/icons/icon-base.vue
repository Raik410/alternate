<script setup lang="ts">
interface IconBaseProps {
  width?: number
  height?: number
  iconColor?: string
  iconName?: string
}

const {
  iconColor = 'currentColor',
  iconName = 'box',
  width = 24,
  height = 24,
} = defineProps<IconBaseProps>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
