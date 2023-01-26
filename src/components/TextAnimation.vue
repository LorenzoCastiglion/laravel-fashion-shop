<template>
    <h1 ref="targetEl" id="bubble-hover">
      <span v-for="(char, idx) in phrase" :key="idx" :data-index="idx" class="hover-char" @mouseover="mouseOverHandler" @mouseleave="removeClasses" >{{ char }}</span>
    </h1>
  </template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'TextAnimation',
    setup() {
        const phrase = ref("Mandaci una mail")
        const targetEl = ref(null)
        const hoverChars = ref(null)

        onMounted(() => {
  hoverChars.value = document.querySelectorAll('.hover-char')
})

        const removeClasses = () => {
            hoverChars.value.forEach((char) => {
                char.classList.remove("hovered")
                char.classList.remove("hovered-adjacent")
            })
        }

        const mouseOverHandler = (e) => {
            removeClasses()
            const currentElement = e.target
            const index = parseInt(currentElement.getAttribute("data-index"), 10)
            const prevIndex = index === 0 ? null : index - 1
            const nextIndex = index === phrase.value.length - 1 ? null : index + 1
            const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`)
            const nextEl = prevIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`)
            e.target.classList.add("hovered")
            prevEl && prevEl.classList.add("hovered-adjacent")
            nextEl && nextEl.classList.add("hovered-adjacent")
        }

        return {
            phrase,
            mouseOverHandler,
            removeClasses
        }
    }
}
</script>


<style lang="scss" scoped>
* {
    font-family: 'Montserrat', sans-serif;
    transition: all;
   transition: 0.35s;
    
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
}

h1 {
    font-size: 90px;
    color: white;
    font-weight: 100;
    cursor: default;
    
}


.hovered {
    color: rgb(190, 22, 22);
    font-weight: 400;
    transition: font-weight 0.35s ease-in-out;
}

.hovered-adjacent {
    color: rgb(199, 111, 111);
    font-weight: 300;
    transition: font-weight 0.35s ease-in-out;
}

</style>