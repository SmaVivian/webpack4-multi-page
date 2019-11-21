import '../css/common.css'
// import '../css/index.css'
// import '@/css/common.css'
import '@/css/index.css'
$('#test').text('jquery修改的flex1')

function getData() {
  $.ajax({
    url: "../static/json/test.json",	
    type: "get",	
    data: {"count":5},
    dataType: 'json',
    success: function (res) {
      console.log(res)     
    }
 })
}

getData()
