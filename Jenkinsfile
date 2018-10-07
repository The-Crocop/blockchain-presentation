#!/usr/bin/env groovy

node {

    if(env.BRANCH_NAME == "master") {
               println "master branch building"
        } else {
            println "not master, returning"
            return
        }

    stage('checkout') {
        checkout scm
    }

    stage('clean') {
        println "cleanup"
        sh "rm -rf www/*"
        sh "rm -rf www/.*"
    }

    stage('copy to www') {
        println "copying files"
        sh "cp -R * /var/www"
    }

   // stage('start webserver') {
      //  println "starting webserver!"
      //  sh "JENKINS_NODE_COOKIE=dontKillMe node /var/www/index.js &"
    //}
}
