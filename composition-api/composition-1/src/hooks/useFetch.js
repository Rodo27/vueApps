import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export function useFetch(url){

    const arrayData = ref([])

    onMounted(async() => {
        try {
            const res = await fetch(url)
            arrayData.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    })

    return {arrayData}
}