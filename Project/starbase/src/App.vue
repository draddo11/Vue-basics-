<template>
    <div id ="app">
       <h6> {{title}}</h6>
    <Character/>
    </div>
</template>
<script>
 import Character from './components/Character'

export default {
    name: 'app',
    data(){
        return {
            title: 'Generate Your team here now ',
            msg:'WELCOME TO THE NEXT '
        }
    },

  components: {
    Character
    }
}
</script>