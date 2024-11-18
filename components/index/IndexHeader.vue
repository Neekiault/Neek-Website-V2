<script setup lang="ts">
import {useMoodStore} from "@/store/moodStore"
import {useIntersectionObserver } from "@vueuse/core"

const neekStore = useMoodStore()
const { moods } = neekStore
const { currentMood, useMood, moodClass } = storeToRefs(neekStore)
const section = ref<HTMLElement>()
const canChangeMood = ref(false)

const { stop } = useIntersectionObserver(section,
    ([{isIntersecting}])=>{
        if(isIntersecting){
            canChangeMood.value = true
            document.addEventListener('keydown', changeMood)
        }else{
            canChangeMood.value = false
            document.removeEventListener('keydown', changeMood)
        }
    },{
        threshold: .5
    }
)

function changeMood(e :Event){
    if(e instanceof KeyboardEvent){
        if (e.key !== ' ' && e.key !== 'Spacebar') return;
        e.preventDefault()
    }
    if(!canChangeMood.value) return
    if(currentMood.value === moods.length - 1){
        currentMood.value = 0
        return
    }
    currentMood.value++
}

onMounted(()=>{
     useMood.value = true
})

onBeforeUnmount(()=>{
    stop()
    document.removeEventListener('keydown', changeMood)
    useMood.value = false
})
</script>
<template>
    <section class="intro" ref="section" :class="[moodClass]">
        <Transition name="fade">
            <component :is="moods[currentMood].component" />
        </Transition>
        <footer>
            <p v-html="$t('index.intro.footerText')"></p>
            <Transition name="fade">
                <div v-show="canChangeMood">
                    <UiMainButton :to="'#test'" :class="[moodClass]" @click.prevent="changeMood" :style="{width: '425px', height: '70px'}">
                        <template #text>
                            {{ $t('index.intro.spacebarText') }}
                        </template>
                    </UiMainButton>
                </div>
            </Transition>
        </footer>
    </section>
</template>
<style lang="scss" scoped>
.intro{
    background: var(--main-purple);
    color: var(--main-grey);
    height: 100svh;
    padding: 40px 60px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background .5s ease-in-out, color .5s ease-in-out ;

    &.main-purple{
        background: var(--main-purple);
        color: var(--main-grey);
    }

    &.secondary-green{
        background: var(--secondary-green);
        color: var(--main-purple);
    }

    &.secondary-purple{
        background: var(--secondary-purple);
        color: var(--main-black);
    }

    footer{
        position: absolute;
        bottom: 0px;
        
        width: 100%;
        height: 150px;
        padding: 40px 60px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-family: 'gotu', sans-serif;
            font-size: 1.1em;
            line-height: 1.5em;
            text-transform: uppercase;
            //color: var(--main-grey);
        }
    }
}</style>
