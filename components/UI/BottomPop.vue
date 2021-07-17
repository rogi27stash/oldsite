<template>
  <div>
    <transition name="fade">
      <div
        v-if="$props.toggled"
        v-on:click="$emit('modalToggle')"
        class="modal-background"
      />
    </transition>
    <transition name="modalPop">
      <div v-if="$props.toggled" class="modal">
        <div class="modal__title">
          <h1><slot name="title"></slot></h1>
          <div class="modal__controls">
            <a href="javascript:void(0)" v-on:click="$emit('modalToggle')"
              ><XIcon size="1.5x"
            /></a>
          </div>
        </div>
        <div class="modal__content">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { XIcon } from '@vue-hero-icons/outline'
export default Vue.extend({
  name: 'BottomPop',
  model: {
    prop: 'toggled',
    event: 'modalToggle',
  },
  props: {
    toggled: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    XIcon,
  },
})
</script>

<style lang="postcss" scoped>
.modal-background {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @apply bg-black-600 bg-opacity-40 backdrop-filter backdrop-blur-sm z-30;
}
.modal {
  position: fixed;
  max-height: 90vh;
  bottom: 0;
  right: 0;
  left: 0;
  @apply flex flex-col flex-nowrap bg-background-50 z-40 w-5/6 md:w-4/6 xl:w-5/12 text-2xl transform-gpu rounded-2xl leading-tight p-8 transition-all duration-150 ease-out mb-4 xl:mb-8 mt-auto mx-auto;
}

.modal__title {
  @apply flex flex-nowrap flex-row pb-8 items-center;
}
.modal__title h1 {
  @apply text-3xl text-primary-600 font-bold mr-auto;
}
.modal__title svg {
  @apply text-background-200 font-bold mr-auto;
  &:hover {
    @apply text-background-700;
  }
}

.modal__content {
  @apply text-background-400 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary-200 hover:scrollbar-thumb-primary-600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.modalPop-enter-active,
.modalPop-leave-active {
  @apply transition-all duration-200 ease-out;
}
.modalPop-enter,
.modalPop-leave-to {
  @apply transform-gpu translate-y-full;
}
</style>
