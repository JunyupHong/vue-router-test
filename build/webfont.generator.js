const webfontsGenerator = require("webfonts-generator");
const fs = require("fs");
const iconPath = 'src/assets/icons/';
const _ = require('lodash');

const files = _.chain(fs.readdirSync(iconPath))
  .filter(f => f.endsWith('.svg'))
  .map(f => `${iconPath}/${f}`)
  .value();
console.log(files);

webfontsGenerator({
  files,
  dest: "src/svg-icons/",
  html: true, // true이면 html 미리보기(my-icons.html)를 생성해준
  templateOptions: {
    baseSelector: ".icon-font", // 기본으로 추가될 클래스 이름(접두어!)
    classPrefix: "icon-font-"   // 위 벡터 이미지 이름과 조합하여 추가될 클래스 이름(예: my-icon-download)
  }
}, function(error) {
  if (error) {
    console.log("Fail!", error);
  } else {
    console.log("Done!");
  }
});
