<script>
import { h } from 'vue'

export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render () {
    if (!this.icon) {
      return null
    }
    const icon = this.icon
    return h('i', { class: ['iconfont', this.icon, 'sub-el-icon'] }, [
      h(icon, { class: 'sidebar-icon' })
    ])
  }
}
</script>
