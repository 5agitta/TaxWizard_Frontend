pipeline {
    agent any

    stages {
        stage ('Build Image') {
            steps {
                checkout scmGit(branches: [[name: '*/dev']])

                script {
                    sh "java -version"
                    sh "docker build -t 5agitta/frontend-service ."
                }
            }
        }

        stage ('Push Docker Image') {
            steps {
                script {
                    sh "docker push 5agitta/frontend-service"
                }
            }
        }

        stage ('Rollout Deployment') {
            steps {
                script {
                    // Deployment
                    sh "KUBECONFIG=/home/kubeconfig kubectl get pods --namespace dev"
                    sh "KUBECONFIG=/home/kubeconfig kubectl apply -f deployment.yaml"
                }
            }
        }
    }
}