<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{blog.body | snippet}}
      </article><!--添加过滤器snippet，不让显示全部内容，点击进去时再显示详情-->
    </div>
  </div>
</template>

<script>

  export default {
    name: 'show-blogs',
    data(){
      return{
        blogs:[],
        search:""
      }
    },
    created(){
      this.$http.get(/*'https://jsonplaceholder.typicode.com/posts'请求网络的数据*/
      './../static/posts.json'/*请求本地的数据*/
      )
        .then(function (data) {
          //获取100条数据
          //console.log(data);
          //设置获取10条数据
          this.blogs = data.body.slice(0,10);
          //console.log(this.blogs);
        })
    },
    computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    filters:{
      "to-uppercase":function (value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
  #show-blogs a{
    color: #444;
    text-decoration: none;
  }
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
