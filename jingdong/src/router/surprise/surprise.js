import surprise from '@/components/surprise/surprise.vue'
import home from './home/home'
import look from './look/look'
export default [
    {
        path:'/surprise',
        name:'surprise',
        component:surprise,
        children:home.concat(look)
    }
]