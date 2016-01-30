
## Get Started

###Dev environment prerequisites:

Install [node.js](https://nodejs.org/en/) framework and  [npm](https://www.npmjs.com/) javascript package manager to setup project environment. Also in order to run the app in mobile phone we need PhoneGap developer tool, which can be downloaded from [Google Play Store](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app) or [AppStore](https://itunes.apple.com/app/id843536693), for Android and IOS respectively.

```sh
$ sudo apt-get install nodejs
```

In Ubuntu, if you get the error "Nodejs : Depends: rlwrap but it is not installable," then you need to update Ubuntu's APT repository to include the universe repository":

```sh
sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
sudo apt-get update
sudo apt-get install nodejs
```
 
### Installation

You need phonegap and grunt installed globally:


```sh
$ npm install -g phonegap
```

```sh
$ npm install -g grunt-cli
```

```sh
$ git clone https://github.com/opendatakosovo/ec-shlire.git
$ cd ec-shlire/www
$ npm install
```

###Run the Application:

```sh
$ grunt init
$ phonegap serve
```

## Adding New Dependencies
Adding new dependencies to bower.json will require the "grunt init" command to be executed.

## Updating Template and Javascript Files
Any changes inside the 'js' and 'templates' folders will require the default "grunt" command to be executed.

## Technology
- [Backbone](http://backbonejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [PhoneGap](http://phonegap.com)

**Open Source Software, Hell Yeah!**
