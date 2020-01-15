<template>
    <div id ="app">
       <h3>{{msg}}</h3>
       <h6> {{title}}</h6>
       <div class="col-md-12"> 
    <Character 
    v-for="(id,index) in initial_ids"
    :id="id"
    key= "index"
    />
    
     </div>
    </div>
</template>

<script>
 import Character from './components/Character'

export default {
    name: 'app',
    data(){
        return {
            title: 'Generate Your team here now ',
            msg:'WELCOME TO THE GALAXY FAR FAR AWAY   ',
            initial_ids:[1,13,14]
        }
    },

  components: {
    Character
    }
}
</script>