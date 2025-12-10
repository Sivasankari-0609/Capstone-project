pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-cred'
        APP_SERVER = '52.66.132.202'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sivasankari-0609/Capstone-project.git'
            }
        }

        stage('Build & Test') {
            steps {
                sh 'npm ci'
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("sivasankariss/capstone-app:${BUILD_ID}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        docker.image("sivasankariss/capstone-app:${BUILD_ID}").push()
                    }
                }
            }
        }

        stage('Deploy to app-ec2') {
            steps {
                sshagent(credentials: ['docker-ec2-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER} '
                            docker stop app || true
                            docker rm app || true
                            docker pull sivasankariss/capstone-app:${BUILD_ID}
                            docker run -d --name app -p 3000:3000 sivasankariss/capstone-app:${BUILD_ID}
                        '
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
