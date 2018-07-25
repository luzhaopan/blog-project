<template>
  <div id="app">
    <!--<add-blog></add-blog>-->
   <!-- <show-blogs></show-blogs>-->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
  //引入AddBlog.vue
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/ShowBlogs'
  import BlogHeader from './components/BlogHeader'


  export default {
  name: 'app',
  components: {
    //存放组件
    AddBlog,ShowBlogs,BlogHeader
  }
}
</script>

<style>

</style>
