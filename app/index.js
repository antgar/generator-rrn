var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting(){
    return this.prompt([{
      type: 'input',
      name : 'name',
      message: 'Your project name',
      default:this.appname
    }]).then((answers) =>{
      this.log('app name', answers.name);
    })
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath('.')
    );
  }
  install(){
    this.npmInstall()
  }
};
