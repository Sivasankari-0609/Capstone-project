pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('6f992ee2-6a90-41b9-967c-b09c5601f386')
        APP_SERVER = '13.233.23.81'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${https://github.com/Sivasankari-0609/Capstone-project.git}"
            }
        }
        stage('Build & Test') {
            steps {
                sh 'npm ci'
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def image = docker.build("sivasankariss/capstone-app:${env.BUILD_ID}")
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-cred') {
                        docker.image("sivasankariss/capstone-app:${env.BUILD_ID}").push()
                    }
                }
            }
        }
        stage('Deploy to app-ec2') {
            steps {
                sshagent(credentials: ['950f83dc-d3e0-481e-931f-93f614ce1871']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER} '
                        docker stop app || true &&
                        docker rm app || true &&
                        docker pull sivasankariss/capstone-app:${BUILD_ID} &&
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
