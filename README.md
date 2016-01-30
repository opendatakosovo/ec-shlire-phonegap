
## Get Started
These are instructions for getting started on Debian and Ubuntu based Linux distributions.

###Dev environment prerequisites:

In order to test a PhoneGap app in your mobile phone, you need **PhoneGap Developer**. Get it from the [Google Play Store](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app) for Android devices or from the [iTunes App Store](https://itunes.apple.com/app/id843536693) for iOS devices.

Install Git:
```sh
sudo apt-get install git
```

Install Node.js:
```sh
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If you get the error "Nodejs : Depends: rlwrap but it is not installable," just download and install the rlwrap package:
```sh
wget http://cz.archive.ubuntu.com/ubuntu/pool/universe/r/rlwrap/rlwrap_0.34-2_amd64.deb
sudo dpkg -i rlwrap_0.34-2_amd64.deb
sudo apt-get install -y nodejs
```

 
### Installation

You need phonegap and grunt installed globally:

```sh
sudo npm install -g phonegap
```

```sh
sudo npm install -g grunt-cli
```

###Run the Application:

First, cd into your dev folder. If you don't have a dev folder yet, then create one:
```sh
mkdir dev
cd dev
```

Now, retrieve the project from GitHub:
```sh
git clone https://github.com/opendatakosovo/ec-shlire-phonegap.git
cd ec-shlire-phonegap/www
npm install
```

Install and run it:
```sh
$ grunt init
$ phonegap serve
```

## Adding New Dependencies
Adding new dependencies to bower.json will require the "grunt init" command to be executed.

## Updating Template and Javascript Files
Any changes inside the 'js' and 'templates' folders will require the default "grunt" command to be executed.

## Technology
- [PhoneGap] (http://phonegap.com/)
- [Backbone](http://backbonejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)

**Open Source Software, Hell Yeah!**
