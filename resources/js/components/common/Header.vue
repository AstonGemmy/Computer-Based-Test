<template>
  <div class="sticky top-0 z-50 bg-white p-4 m-0 mb-4">
    <div class="relative flex w-full justify-between items-center">		
			<div class="lg:hidden bg-gray-200 absolute right-4 flex justify-center items-center p-4 text-pink-800">
			    <i class="fas fa-bars text-3xl transform scale-y-75"></i>
			</div>			
			<router-link to="/" class="text-3xl text-pink-800 uppercase p-4 pl-0 ml-4 lg:ml-16 font-bold">
				<span class="">Career strive</span>			
			</router-link>
			<div class="hidden lg:flex absolute w-full lg:w-auto top-0 lg:top-auto right-0 lg:right-16 p-4">
				<div class="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between uppercase text-white">
					<router-link to="/profile" v-if="authUser.name" class="w-full lg:w-auto bg-pink-800 rounded-md text-center py-2 px-4 my-2 lg:my-0 lg:mr-4">{{ getAuthUserFirstname }}</router-link>
          			<a href="#" v-if="authUser.name" @click="logoutUser" class="w-full lg:w-auto bg-pink-800 rounded-md text-center py-2 px-4 my-2 lg:my-0 lg:mr-4">Logout</a>
			        <router-link to="/authenticate" v-else class="w-full lg:w-auto bg-pink-800 rounded-md text-center py-2 px-4 my-2 lg:my-0 lg:mr-4" href="#">Login</router-link>
					<router-link to="/about" class="w-full lg:w-auto bg-pink-800 rounded-md text-center py-2 px-4 my-2 lg:my-0 lg:mr-4" href="#">About Us</router-link>
					<router-link to="/contact" class="w-full lg:w-auto bg-pink-800 rounded-md text-center py-2 px-4 my-2 lg:my-0 lg:mr-0" href="#">Contact Us</router-link>
				</div>				
			</div>			
		</div>		
	</div>
</template>

<script>

  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {

	computed: {
	  ...mapState([
		'authUser'
	  ]),
	  ...mapGetters([
		'getAuthUserFirstname'
	  ])
	},

    methods: {
      ...mapActions([
        'logoutUser'
      ])
    }
    
  }

</script>