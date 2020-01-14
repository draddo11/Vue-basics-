<template>
    <div id ="app">
    
      <h6> {{character}}</h6>
    
    </div>
</template>
<script>
export default {
    name: 'app',
    data(){
        return {
            character: {}
        }
        },
      methods:{
            fetchCharacter(){
            fetch(`https://swapi.co/api/people/10`, {
                method: `GET`
            })
            .then(response => response.json())
            .then (json => this.character =json)
        }
      },
       created(){
          this.fetchCharacter()
      }   
    }

</script>