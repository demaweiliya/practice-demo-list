import Alert from './Alert.vue'
import Vue from 'vue'
let AlertConstructor = Vue.extend(Alert);
Alert.newInstance = (properties) => {
    const props = properties || {};

    const Instance = new Vue({
        data:props,
        render(h){
            return h(Alert,{
                props:props
            })
        }
    })

    // const Instance = new AbortController({
    //     data:props
    // })

    const component = Instance.$mount();
    //Instance.vm = Instance.$mount();
    document.body.appendChild(component.$el);
    //document.body.appendChild(Instance.vm.$el);
    const alert = Instance.$children[0];

    return {
        add(noticeProps){
            alert.add(noticeProps)
        },
        remove(name){
            alert.remove(name)
        }
    }


}

export default Alert;