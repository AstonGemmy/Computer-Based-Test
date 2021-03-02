<template>
    <div class="relative bg-login w-screen h-screen pt-10 bg-cover bg-no-repeat">        
        <div class="relative w-4/5 md:w-3/5 lg:w-2/5 bg-gray-100 mx-auto shadow rounded-xl overflow-hidden">                       
            <div class="relative p-4">
                <h1 class="text-black text-2xl p-4">
                    Resend Verification email
                </h1>
                <div v-if="feedbackMessages.email_verification" class="mb-4 font-medium text-sm text-green-600">
                    {{ feedbackMessages.email_verification_message }}
                </div>
                <h1 v-else class="relative p-4 mb-6 text-gray-600 text-xl mx-auto">
                    Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </h1>
                <a href="#" @click.prevent="resendVerificationEmail" class="w-full lg:w-auto bg-white rounded-md text-xl text-blue-600 text-center py-2 px-4 my-2 lg:my-0 lg:mr-4">Resend Verification Email</a>
                <a href="#" @click.prevent="logoutUser" class="w-full lg:w-auto bg-white rounded-md text-red-400 text-xl text-center py-2 px-4 my-2 lg:my-0 lg:mr-4">Logout</a>                
            </div>
            
        </div>
    </div>
</template>

<script>

    import { mapState, mapGetters, mapActions } from 'vuex'

  export default {

    computed: {
        ...mapState([
            'authUser',
            'feedbackMessages'
        ])
	},

    methods: {
        ...mapActions([
           'logoutUser',
           'resendVerificationEmail',
           'redirectAuthenticated'
        ])
    },

    created() {
        this.redirectAuthenticated({intended: '/'})
    }

  }

</script>