<template>
<span>
    <div id="sidenav">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Meets Us</a></li>
                <li><a href="/login">Log In</a></li>
            </ul>
        </nav>
    </div>
    <div id="menubtn">
        <img src="~/assets/menu.png" id="menu"/>
        <img src="~/assets/close.png" id="close" />
    </div>
</span>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'SideNav',
    components:{},
    props:[],
    data(){
        return{}
    },
    mounted(){
        alert("hello world")
        //Get the id button for the menu icon
        const menuBtn = this.$el.querySelector('#menubtn');
        //Get the side nav holder
        const sideNav = this.$el.querySelector('#sidenav')
        //Gte the menu image
        const menu = this.$el.querySelector("#menu")
        //Get the close btn 
        const close = this.$el.querySelector('#close')
        menuBtn.style.reght = "-250px"
        //Get the 
        //Add event listner 
        menuBtn.addEventListener('click', () => {
            //Compire the side nav right property value to -250px
            if(sideNav.style.right == '-250px'){
                //Set it to 0 it will appear on the screen
                sideNav.style.right = '0'
                //Hide the manu icon
                menu.style.display = 'none'
                //Show the close icon
                close.style.display = 'block'
            }
            //else: Set it to -250: dispaear
            else{
                //set value 
                sideNav.style.right = '-250px'
                //Hide the manu icon
                menu.style.display = 'block'
                //Show the close icon
                close.style.display = 'none'
            }
        })
    },
    computed:{
        ...mapGetters(['ifAuthenticated'])
    }

}
</script>

<style >
#sidenav{
    width: 250px;
    height: 100vh;
    position: fixed;
    right: -250px;
    top: 0;
    background: #BFB8AD;
    z-index: 2;
    transition: 0.5s;
}
nav ul li{
    list-style: none;
    margin: 30px 20px;
}
nav ul li a{
    text-decoration: none;
    color: white;
}
#menubtn{
    width: 50px;
    height: 50px;
    background-color: #BFB8AD;
    text-align: center;
    position: fixed;
    right: 30px;
    top: 20px;
    border-radius: 3px;
    z-index: 3;
    cursor: pointer;
}
#menubtn img{
    width: 30px;
    margin-top:10px;
    columns: white;
}

#close{
    display: none;
    width: 20px;
}


</style>