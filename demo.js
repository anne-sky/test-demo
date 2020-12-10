window.onload = function () {
  let box = document.getElementsByClassName('box')[0];
  box.addEventListener('click', () => {
    console.log('这是test分支内容的代码');
    alert('这是测试代码,修改测试代码');
  })
}