<script setup>
    import images from '@/utils/images.js';

    import { ref } from "vue"

    const showPassword = ref(false)

    const togglePassword = () => {
        showPassword.value = !showPassword.value
    }
</script>

<template>
  <div class=" px-[16px] py-[40px] md:py-0 md:px-0 md:w-[620px] md:h-[438px]">
    <div class="lg:hidden w-full flex place-content-center mb-4">
        <img :src="images.Logo" alt="Logo" class="w-[198px] h-[86px]" />
    </div>
    <div>
        <h1 id="heading" class="text-[#61227D] text-[32px] font-[700] text-center">Welcome Back</h1>
        <p id="subtext" class="text-center text-[#5E5E5E] text-[16px] mt-[4px] mb-[24px] font-[400]">Enter your email address and password to access your account.</p>
        <div class="">
            <p class="text-[16px] font-[400]">Email Address <span class="text-[#E04F4F]">*</span></p>
            <input type="text" class="border-[1px] border-[#DDDDDD] bg-[#FFFFFF] text-[#7D7D7D] outline-none mt-1 py-[13px] px-[10px] rounded-[8px] text-[14px] w-full placeholder:text-[14px] placeholder:text-[#7D7D7D] " placeholder="Enter your email" >
        </div>

        <div class="mt-[24px]">
            <p class="text-[16px] font-[400]">Password <span class="text-[#E04F4F]">*</span></p>
            <div class="flex bg-green-400 w-full h-fit mt-[1px] border-[1px] border-[#DDDDDD] rounded-[8px] overflow-hidden">
                 <input
                    :type="showPassword ? 'text' : 'password'"
                    class="border-r-[1px] border-[#DDDDDD] bg-[#FFFFFF] text-[#7D7D7D] outline-none py-[13px] px-[10px] text-[14px] w-full placeholder:text-[14px] placeholder:text-[#7D7D7D]"
                    placeholder="Enter your password"
                />

                    
                <div
                @click="togglePassword"
                class="bg-[#F7F7F7] py-[12px] px-[16px] w-fit flex place-content-center cursor-pointer"
                >
                <i
                    :class="showPassword ? 'pi pi-eye text-[24px]' : 'pi pi-eye-slash text-[24px]'"
                ></i>
                </div>
            </div>
            
        </div>

        <div class="flex justify-between mt-[8px]">
            <div class="flex h-fit my-auto cursor-pointer">
                <input type="checkbox" class="h-[24px] w-[24px] my-auto border-[1px] border-[#DDDDDD] mr-[8px]">
                <p class="text-[14px] text-[#7D7D7D] font-[400] h-fit my-auto">Remember me</p>
            </div>
            <p class="text-[14px] text-[#61227D] h-fit my-auto font-[400] cursor-pointer">Forget Password?</p>
        </div>

        <div class="mt-[40px] w-full">
            <button class="bg-[#61227D] rounded-[8px] text-[#ffffff] text-[15px] font-[700] w-full py-[11px] cursor-pointer">Log In</button>
        </div>
        <p class="text-[16px] mt-[10px] text-center font-[400] text-[#5E5E5E]">Don’t have an account?<span class="text-[#61227D] cursor-pointer"> Sign up</span></p>
    </div>
  </div>
</template>

<style scoped>
    #heading {
        font-family: 'Lora', serif;
    }
    #subtext {
        font-family: 'Noto Sans', sans-serif;
    }
    p,input {
        font-family: 'Noto Sans', sans-serif;
    }
</style>
