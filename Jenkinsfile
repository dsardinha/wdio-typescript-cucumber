pipeline {
    agent any
    tools {
        nodejs '22.9.0' 
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npm run e2e'
            }
        }
        stage('Visual Tests') {
            steps {
                sh 'npm run visual'
            }
        }
        stage('Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}