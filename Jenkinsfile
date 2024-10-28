pipeline {
    agent any
    environment {
        PATH = "${PATH}:/usr/local/bin"
    }
    tools {
        nodejs '22.9.0' 
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start docker-compose') {
            steps {
                sh 'npm run dockercomposeup'
            }
        }
        stage('Visual Tests') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                    sh 'npm run wdio:docker:visual'
                }
            }
        }
        stage('E2E Tests') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                    sh 'npm run wdio:docker:e2e'
                }
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
        stage('Stop docker-compose') {
            steps {
                sh 'npm run dockercomposedown'
            }
        }
    }
}