import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    // state ของ store ชื่อ number
    const number = ref(1);
    
    // ตัวแปร reactive return ค่าออกมาเป็น object ดังนั้นต้องใช้ .value เวลาจะคำนวณ
    const multiplyByTwo = computed(() => number.value * 2);

    // สร้างฟังก์ชั่นในการ mutate reactive variable
    function increase() {
        number.value = number.value + 1;
    }

    // getter : เก็บค่าที่ต้องการ return ออกไป
    // action : เก็บฟังก์ชั่นที่ store สามารถใช้ได้
    return {
        number,
        multiplyByTwo,
        increase,
    }
})