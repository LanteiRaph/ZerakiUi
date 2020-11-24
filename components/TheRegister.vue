<template>
    <form class="form-container" @submit.prevent>
        <h1>Register</h1>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" v-model="input.email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw"  v-model="input.password" required>

        <button type="submit" class="btn login" >Register</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
</template>

<script>
export default {
    name:'Login',
    props:['display'],
    data(){
        return{
            input:{
                email:null,
                password: null
            }
        }
    },
    metheds:{
        closeForm(){
            //Emit back to the parent.
            this.$emit('closeForm');
        }
    },
    mounted(){
        //Check if we are to display the componet
        this.$el.querySelector('.login').addEventListener('click', () =>  {
            console.log(this.input)
            this.$store.state.authData = this.input
             this.$emit('register')
        })
    }
}
</script>


