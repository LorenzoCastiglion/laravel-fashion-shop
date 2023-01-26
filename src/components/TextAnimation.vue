<template>
    <h1 ref="targetEl" id="bubble-hover" class="text-center">
      <span v-for="(char, idx) in phrase" :key="idx" :data-index="idx" class="hover-char" @mouseover="mouseOverHandler" @mouseleave="removeClasses" >{{ char }}</span>
    </h1>
  </template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'TextAnimation',
    setup() {
        const phrase = ref("IL NOSTRO TEAM")
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
    
    // transition: all;
    transition:0.15s ease-in-out;
    font-feature-settings: unset;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
}

h1 {
    
    font-size: 70px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    cursor: default;
    letter-spacing: 0.03em;
    
}


.hovered {
    color:#d62828;
    font-weight: 900;
    letter-spacing: 0.07em;
    text-shadow: 0px 0px 5px #d62828;
}

.hovered-adjacent {
    color: #ef5656;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-shadow: 0px 0px 2px#ffa3a3;
}

</style>