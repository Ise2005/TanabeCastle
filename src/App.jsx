import './App.css';

function GethashID(hashIDName) {
  if(hashIDName){
    $('.tab li').find('a').each(function(){
      var idName=$(this).attr('href');
      if(idName==hashIDName){
        var parentElm=$(this).parent();
        $('.tab li').removeClass("active");
        $(parentElm).addClass("active");

        $(".area").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}

$('.tab a').on('click',function(){
  var idName=$(this).attr('href');
  GethashID(idName);
  return false;
});

$(window).on('load', function(){
  $('.tab li:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName=location.hash;
  GethashID(hashName);
});

document.querySelector('#top-button').addEventListener('click', (event) => {
  const modelViewer = document.querySelector("model-viewer");
  modelViewer.setAttribute('camera-orbit', "0deg 0deg 50%");
});
document.querySelector('#bottom-button').addEventListener('click', (event) => {
  const modelViewer = document.querySelector("model-viewer");
  modelViewer.setAttribute('camera-orbit', "180deg 0deg 20%");
});
document.querySelector('#right-button').addEventListener('click', (event) => {
  const modelViewer = document.querySelector("model-viewer");
  modelViewer.setAttribute('camera-orbit', "270deg 0deg 5%");
});
document.querySelector('#left-button').addEventListener('click', (event) => {
  const modelViewer = document.querySelector("model-viewer");
  modelViewer.setAttribute('camera-orbit', "90deg 0deg 50%");
});

export default App;