<template>
    <!-- CV Box -->
    <div>
        
        <div class="relative flex justify-between px-6 py-3 border-b-2 border-gray-100 text-blue-600 text-xl uppercase">
            <h1 class="">
                <i class="fa fa-user mr-3"></i>
                Update Personal information
            </h1>
            <span class="flex justify-center items-center h-6 w-6 bg-white rounded-full cursor-pointer" @click.prevent="closeUpdaters">
                <i class="fa text-red-400 fa-times"></i>
            </span>
        </div>

        <div class="relative text-center w-full" v-bind:class="{ 'text-green-700 bg-green-200 px-8 py-2': feedbackStyle.personal.success, 'text-red-700 bg-red-200 px-8 py-2': feedbackStyle.personal.error }">{{ feedbackMessages.personal }}</div>
        
        <form method="POST" @submit.prevent="updatePersonal" class="relative px-8 h-full">
            
            <div class="relative bg-red-30 p-8 h-full">
                
                <div class="relative top-auto left-auto pt-4 p-8 overflow-x-hidden overflow-y-auto invisible-scrollbar h-144 mx-4 text-pink-800">
                    
                    <div class="w-full mb-2 mx-auto text-xl text-blue-600">
                        
                        <div class="p-4">
                        
                            <div class="relative">                        
                                <label for="name" class="absolute left-3 flex justify-start w-3/4 items-center text-gray-900 rounded-full bg-gray-100 px-3 py-1 shadow transition-all ease-in-out">
                                    <i class="fa rounded-full w-4 h-4 mr-2 bg-gray-100 border-white shadow"></i>
                                    Name
                                </label>
                                <input v-model="personal.name" class="text-xl p-4 focus:ring-pink-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent" placeholder="name" type="text" id="name">
                            </div>

                            <div class="relative mt-14">                        
                                <label for="gender" class="absolute left-3 flex justify-start w-3/4 items-center text-gray-900 rounded-full bg-gray-100 px-3 py-1 shadow transition-all ease-in-out">
                                    <i class="fa rounded-full w-4 h-4 mr-2 bg-gray-100 border-white shadow"></i>
                                    Gender
                                </label>
                                <select v-model="personal.gender" class="text-xl p-4 focus:ring-pink-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent" id="gender">
                                    <option v-for="value in gender" :key="value">{{ value }}</option>
                                </select>
                            </div>

                            <div class="relative mt-14">                        
                                <label for="date-of-birth" class="absolute left-3 flex justify-start w-3/4 items-center text-gray-900 rounded-full bg-gray-100 px-3 py-1 shadow transition-all ease-in-out">
                                    <i class="fa rounded-full w-4 h-4 mr-2 bg-gray-100 border-white shadow"></i>
                                    Date of Birth
                                </label>
                                <input v-model="personal.date_of_birth" class="text-xl p-4 focus:ring-pink-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent" placeholder="date of birth" type="text" id="date-of-birth">
                            </div>

                            <div class="relative mt-14">                        
                                <label for="email" class="absolute left-3 flex justify-start w-3/4 items-center text-gray-900 rounded-full bg-gray-100 px-3 py-1 shadow transition-all ease-in-out">
                                    <i class="fa rounded-full w-4 h-4 mr-2 bg-gray-100 border-white shadow"></i>
                                    Email
                                </label>
                                <input v-model="personal.email" class="text-xl p-4 focus:ring-pink-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent" placeholder="email" type="email" id="email">
                            </div>

                            <div class="relative mt-14">                        
                                <label for="bio" class="absolute left-3 flex justify-start w-3/4 items-center text-gray-900 rounded-full bg-gray-100 px-3 py-1 shadow transition-all ease-in-out">
                                    <i class="fa rounded-full w-4 h-4 mr-2 bg-gray-100 border-white shadow"></i>
                                    Bio
                                </label>
                                <textarea v-model="personal.bio" class="text-xl h-56 p-4 focus:ring-pink-300 w-full rounded-lg outline-none border-0 focus: shadow-xl bg-transparent" placeholder="bio" id="bio"></textarea>
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
                
            </div>
            
            <div class="px-6 py-4 border-t-2 border-gray-100">
                
                <button class="relative border-pink-800 bg-blue-600 text-white rounded-lg shadow text-xl px-6 py-2 mr-4" type="submit">Save</button>
                
            </div>
        
        </form>
    </div>
    <!-- CV Box Ends -->
</template>

<script>

    import { mapState, mapActions } from 'vuex'

  export default {

    computed: {
        ...mapState([
            'gender',
            'personal',
            'feedbackStyle',
            'feedbackMessages'
        ])
    },

    methods: {
        ...mapActions([
            'updatePersonal',
            'closeUpdaters'
        ])
    }
  }

</script>