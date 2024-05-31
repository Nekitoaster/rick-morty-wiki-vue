import Header from './Header.vue'
import Paginate from './Paginate.vue'

const components = [
    { name: 'Header', component: Header },
    {name: 'Paginate', component: Paginate}
]

export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}