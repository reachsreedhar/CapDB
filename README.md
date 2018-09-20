# CapDB

## Installing ionic:

1. install node.js - https://nodejs.org/en/ (7.4.0)
2. install ionic and cordova
    1. sudo npm install ionic cordova -g
3. ionic start CapDB —type=ionic-angular

## some commands:

cd /Users/sreedhar/kcs/work/scripts/CapDbHelper
sudo npm install cordova -g
sudo npm install -g --unsafe-perm --verbose @angular/cli
ionic start CapDbHelper --type=ionic-angular
Starter template: blank
Use cordova
Install the free Ionic Pro SDK and connect your app? (Y/n) n

ionic serve

ionic generate page users
ionic cordova platform add ios
ionic build ios
ionic cordova platform add android
ionic cordova platform remove android
ionic cordova platform add ios

ionic integrations enable capacitor
npx cap add android
npx cap sync


## Securing ORDS: Refer https://oracle-base.com/articles/misc/oracle-rest-data-services-ords-standalone-mode#auto-ssl

edit /oracle/software/app/ords/ords/standalone/standalone.properties  and add the below -

jetty.secure.port=8443
ssl.cert=/home/oracle/kcs/ords/keystore/capdvvoradb01.gartner.com.der
ssl.cert.key=/home/oracle/kcs/ords/keystore/capdvvoradb01.gartner.com-key.der
ssl.host=10.10.3.10

Run /home/oracle/kcs/ords/create_key.bash
