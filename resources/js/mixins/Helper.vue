<script>
import Warning from '@/components/Warning.vue'
import Alert from '@/components/Alert.vue'
export default {
    components: {
        Warning,
        Alert,
    },
    data() {
        return {
            alert_data: { trigger: false },
            warning_data: { trigger: false}
        }
    },
    methods: {
        _newAlert(trigger, color, text = 'Failed to save record'){
            this.alert_data.color = color
            this.alert_data.text = text
            setTimeout(() => {
                this.alert_data.trigger = trigger
            }, 1000)
        },
        _warning(trigger, text, item){
            this.warning_data.trigger = trigger
            this.warning_data.text = text
            if(item){
                this.warning_data.item = item
            }
        },
        _hasEmptyKeys(obj, excepts = []) {
            let copy = Object.assign({}, obj)
            if(excepts.length>0) {
                excepts.forEach(elem => {
                    delete copy[elem]
                })
            }
            let fields = Object.values(copy)

            let foundEmpty = false;
            fields.forEach(elem => {
                if(!elem || elem==null || elem.length<=0 || elem=="") {
                    foundEmpty = true
                }
            })
            if (foundEmpty) return true
            else return false;
        },
    }
}
</script>