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
        stage('Prepare test setup') {
            steps {
                sh 'npm run dockercomposeup'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npm run wdio:docker:e2e'
            }
        }
        stage('Visual Tests') {
            steps {
                sh 'npm run wdio:docker:visual'
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
        stage('Clean') {
            steps {
                sh 'npm run dockercomposedown'
            }
        }
    }
}