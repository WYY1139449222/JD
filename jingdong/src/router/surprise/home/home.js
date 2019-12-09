import home from '@/components/surprise/home/home.vue'

import sift from './sift'
import onerap from './onerap'
import nurse from './nurse'
import decoration from './decoration'
import book from './book'
import appliances from './appliances'
export default [
    {
        path:'/surprise/home/',
        name:'home',
        component:home,
        children:sift.concat(onerap,nurse,decoration,book,appliances)
    }
]