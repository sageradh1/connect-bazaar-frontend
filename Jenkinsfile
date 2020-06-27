pipeline {
	agent any
	    stages {

	        stage('Cloning Source Repository') {
	        /* Cloning the repository to our workspace */
		        steps {
		        	checkout scm
		        }
	   		}
/*____________________________________________________________________________________________________________*/
		/* For first run there is no need to remove old images and container */
		    // stage('Build first image') {
		    //       steps {
		    //       	sh 'sudo docker build -f Dockerfile.prod -t connectbazaar-frontend:production .'
		    //       }
		    //  }
/*_____________________________________________________________________________________________________________*/
			/* For later runs*/
		   stage('Stop and Remove old container') {
		        steps {

                sh '''
                    sudo docker container stop connectbazaar-frontend-container
                    sudo docker container rm connectbazaar-frontend-container
                '''
		        }
		   }

		   stage('Remove old image and build new one') {
		        steps {
					sh 'sudo docker image rm connectbazaar-frontend:production'
					sh 'sudo docker build -f Dockerfile.prod -t connectbazaar-frontend:production .'
		        }
		   }
/*_____________________________________________________________________________________________________________*/



		   stage('Run Image') {
		        steps {
		        	sh 'sudo docker run -itd --name connectbazaar-frontend-container -p 80:80 connectbazaar-frontend:production'	
		        }
		   }
		   stage('Testing'){
		        steps {
		            echo 'Testing..'
		        }
		   }
    	}
}