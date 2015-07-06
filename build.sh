#!/bin/sh
npm install
#run grunt without grunt-cli installed
node -e "require('grunt').tasks(['default']);"