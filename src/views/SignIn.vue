<script setup>
    import BannerArea from '@/components/BannerArea.vue';
    import EntryField from '@/components/EntryField.vue';
</script>

<template>
  
  <div class="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
    <div class="bg-[#F8EAFF] py-[24px] px-[45px] h-full hidden lg:block">
        <div class="">
            <BannerArea />
        </div>
    </div>
    <div class=" h-full">
        <div class="h-screen md:flex md:items-center justify-center">
            <EntryField />
        </div>
        
    </div>
  </div>
</template>

<style scoped>
    
</style>
