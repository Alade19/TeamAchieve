<script setup>
    import images from '@/utils/images.js';
</script>

<template>
  <div class="">
    <img :src="images.Logo" alt="Logo" class="w-[198px] h-[97px]" />
    <img :src="images.Banner" alt="Banner" class="w-[626px] h-[626px mt-[47px]" />
    <div class=" mt-[24px] w-full text-center">
      <h1 class="text-[#61227D] text-[20px] font-[700]">Team Achieve</h1>
      <p class="text-[#5E5E5E] text-[18px] font-[700] mt-[8px]">Your perfect solution for funding your  desires</p>
    </div>
  </div>
</template>

<style scoped>
    h1, p {
      font-family: 'Lora', serif;
    }
</style>
