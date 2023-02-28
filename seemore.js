let flag = true
let value = document.getElementById('text').innerText;
document.getElementById('seemore').addEventListener('click',function(){
      if(flag === true){
        document.getElementById('text').innerText = value.slice(0,250)
        document.getElementById('seemore').innerHTML = "See More"
        flag = false
      }else{
        document.getElementById('text').innerText = value
        document.getElementById('seemore').innerHTML = "See Less"
        flag = true
      }
})