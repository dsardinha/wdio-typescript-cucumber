pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '-u root'
        }
    }
    
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
                sh 'docker-compose -f docker-compose-hub.yml up -d'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'wdio:docker:e2e'
            }
        }
        stage('Visual Tests') {
            steps {
                sh 'wdio:docker:visual'
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
                sh 'docker-compose -f docker-compose-hub.yml down'
            }
        }
    }
}