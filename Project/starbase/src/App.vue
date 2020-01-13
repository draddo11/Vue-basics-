<template>
    <div id ="app">
       <h3> {{msg}} </h3>
      <h6> {{title}}</h6>
    <button btn btn-primary @click= "fetchCharacter" >Get Characters</button>
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
    }, 
    methods: {
        fetchCharacter(){
            fetch('https://swapi.co/api/people', {
                method: `GET`
            })
            .then(response => console.log(response))
        }
    }
}
</script>