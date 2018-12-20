<template>
  <!-- app.vue 的template标签内只能有一个节点 -->
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!-- <p>{{fullName}} {{counter}}</p>
    <p>{{textA}} {{textPlus}}</p>
    <p>{{textC}}</p> -->
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link> -->
    <!-- <Todo></Todo> -->
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <button @click="notify">click me</button> -->
    <!-- <notification content="test test"/> -->
    <Footer></Footer>
  </div>
</template>

<script>
// vuex帮助方法
import {
  mapState
  // mapGetters,
  // mapActions,
  // mapMutations
} from 'vuex'
// 引入header.vue组件
import Header from './layout/header.vue'
// 引入footer.jsx组件
import Footer from './layout/footer.jsx'
// 引入todo.vue组件
// import Todo from './views/todo/todo.vue'
// loading组件
import Loading from './components/loading/loading.vue'

export default {
  // meta插件的使用
  metaInfo: {
    title: 'shen\'s Todo App'
  },
  // 声明组件，之后便可以使用组件标签
  components: {
    Header,
    Footer,
    Loading
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['b/testAction']()
    // this['a/updateText']('123')
    // let i = 1
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  computed: {
    ...mapState(['loading'])
    // 推荐这样写
    // ...mapState(['count']),
    // 或者
    // ...mapState({
    //   // 重新指定名字
    //   counter: 'count'
    // }),
    // 或者
    // ...mapState({
    //   // 写个方法，用于复杂的计算
    //   counter: (state) => state.count,
    //   // 通过mapState调用
    //   textA: state => state.a.text,
    //   textC: state => state.c.text
    // }),
    /* 这样写比较麻烦
    count () {
      return this.$store.state.count
    }, */
    // ...mapGetters({
    //   'fullName': 'fullName',
    //   textPlus: 'a/textPlus'
    // })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // textA () {
    //   // 调用模块a里面的东西
    //   return this.$store.state.a.text
    // }
  },
  methods: {
    // ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    // ...mapMutations(['updateCount', 'a/updateText'])
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  }
}
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color #555
  opacity 0.5
  z-index -1
}
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>


