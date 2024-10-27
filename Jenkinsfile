pipeline {
  agent any
  stages {
    stage('Install dependencies') {
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

  }
}