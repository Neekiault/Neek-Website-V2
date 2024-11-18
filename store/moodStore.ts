import { defineStore } from 'pinia'
import { IndexMoodIntro, IndexMoodProjects, IndexMoodType, IndexMoodTeam }from '#components';

export const useMoodStore = defineStore('moodStore', ()=>{
    const moods = markRaw<IHeaderMood[]>([{
        component: IndexMoodIntro,
        colorScheme: 'main-purple'
    }, {
        component: IndexMoodProjects,
        colorScheme: 'main-purple'
    }, {
        component: IndexMoodType,
        colorScheme: 'secondary-green'
    }, {
        component: IndexMoodTeam,
        colorScheme: 'secondary-purple'
    }])
    const currentMood = ref(0)
    const useMood = ref(false)
    const moodClass = computed(()=> {
        return useMood.value ? moods[currentMood.value].colorScheme : ""
    })

    return { currentMood, moods, useMood, moodClass}
})