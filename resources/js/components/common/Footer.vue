<template>
    <div class="relative w-full p-4 lg:px-16">
        <div class="flex flex-col lg:flex-row p-4 justify-between items-start">
            
            <div class="">
                Copyright <span class="ubuntu">&copy;</span> Career strive <span class="poppins text-14">2021</span>
            </div>

            <div class="flex justify-between items-center text-white">
                <span class="flex justify-center items-center cursor-pointer w-8 h-8 mr-4 bg-blue-500 rounded-full">
                    <i class="fab fa-facebook-f"></i>
                </span>
                <span class="flex justify-center items-center cursor-pointer w-8 h-8 mr-4 bg-purple-900 rounded-full">
                    <i class="fab fa-instagram"></i>
                </span>
                <span class="flex justify-center items-center cursor-pointer w-8 h-8 mr-4 bg-red-900 rounded-full">
                    <i class="fab fa-pinterest"></i>
                </span>
                <span class="flex justify-center items-center cursor-pointer w-8 h-8 mr-4 bg-blue-500 rounded-full">
                    <i class="fab fa-twitter"></i>
                </span>
                <span class="flex justify-center items-center cursor-pointer w-8 h-8 bg-blue-700 rounded-full">
                    <i class="fab fa-linkedin"></i>
                </span>
            </div>

        </div>        
    </div>
</template>

<script>
  export default {
    computed: {

    },
    methods: {
      
    },
    props: [],
    filters: {
      
    }
  }
</script>

// <?php
	
// 	require_once 'class.user.php';
// 	$candidateLogin = new USER();
	
// 	if ($candidateLogin->is_logged_in() != "") {
		
// 		$loggedStatus = $candidateLogin->runQuery("SELECT * FROM cbt_candidates WHERE candidateID=:cid");
// 		$loggedStatus->execute(array(":cid"=>@$_SESSION['candidateSession']));
// 		$loggedStatus_array = $loggedStatus->fetch(PDO::FETCH_ASSOC);
	
// 		$candidateID_token = base64_encode($loggedStatus_array['candidateID']);
// 		$candidateName_token = strip_tags($loggedStatus_array['candidateName']);
	
// 		$loginLink = '<a href="profile.php?candidateID_token='.$candidateID_token.'&?candidateName_token='.$candidateName_token.'" class="border-radius-50 fine-purple">Account</a>';	
	
// 	} else {
		
// 		$loginLink = '<a href="login.php" class="fine-purple border-radius-50 border-radius-8">Log In</a>';
		
// 	}

// ?