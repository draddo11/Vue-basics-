<template>
    <div id ="app">
       <h3> {{msg}} </h3>
      <h6> {{title}}</h6>

    </div>
</template>
<script>
export default {
    name: 'app',
    data(){
        return {
            title: 'Generate Your team here now ',
            msg:'WELCOME TO THE NEXT '
        }
    }
}
</script>