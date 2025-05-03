<script>
import { RouterLink } from 'vue-router';
</script>


<template>
    <nav class="sidebar">
        <ul>
            <li> <RouterLink to="/home">Home</RouterLink> </li>
            <li> <RouterLink to="/lien">Liste liens</RouterLink> </li>
            <li><RouterLink to="/vues">Vues</RouterLink></li>
            <li><RouterLink to="/tags">Tags</RouterLink></li>
        </ul>
    </nav>
</template>


<style scoped>
.sidebar{
  position: fixed;
  left: 0;
  top: 60px;
  background-color: pink;
  width: 20%;
  height: 100%;
  display: flex;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1100;
}

ul{
    list-style: none;
    padding: 0;
}

li{
    margin-bottom: 20px;
}

a{
    color: palevioletred;
    text-decoration: none;
    font-weight: bold;
}

a.router-link-active{
    color: beige;
}

</style>

