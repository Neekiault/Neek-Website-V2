import { defineStore } from 'pinia'
import { IndexMoodIntro, IndexMoodProjects, IndexMoodType, IndexMoodTeam }from '#components';

export const useNeekStore = defineStore('neekStore', ()=>{
    const headerMoods = markRaw<IHeaderMood[]>([{
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

    return { currentMood, headerMoods}
})