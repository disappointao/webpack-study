import '../css/a.css';
import '../css/body.less';
import '../css/index.less';
import '../css/iconfont.css';

const hello = () => {
  console.log('hello webpack');
};
new Promise((resolve, reject) => {
  if (1) {
    resolve();
  }
  reject();
}).then(() => {
  hello();
});
