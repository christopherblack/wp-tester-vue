<template lang="pug">
  .home
    h1 Wordpress API tester and unofficial documentation
    p
      | This tool helps to test and integrate with 
      a( href="https://developer.wordpress.org/rest-api/" target="_blank" ) Wordpress JSON REST API
      |.
      | Simply 
      router-link( to="/general" ) set up authefication
      |  with your Wordpress site and test different requests to WP API in 
      router-link( to="/methods/posts/list" ) API Methods
      |  section.

</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>
