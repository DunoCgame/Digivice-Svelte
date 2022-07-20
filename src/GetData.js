import { writable } from 'svelte/store'

const NameSelect = () => {
    const { subscribe, set, update } = writable("Yokomon")
    
    return {
        subscribe,
                SendName: (Name) => {
                                update(n => n = Name)
                    //console.log('Update',Name)
                    
                },
                GetName: (n) => {
                   
                },
                reiniciar: () => {
                    set(0)
                }
      }
    
}

export const nameselect = NameSelect()




