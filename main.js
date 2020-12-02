const language = ['html', 'css', 'js']
const crm = ['Wordpress', 'Opencart', 'Joomla!']
const frameworks = ['Vue', 'React', 'Angular']

const listJS = document.querySelector('.list-js')

function addList(arr) {
	listJS.innerText = '';	
 	arr.map((function(a) {
 			let li = document.createElement('li');
			li.innerText = a;		
 			listJS.append(li);
		})
 	)
}

document.querySelector('.language').addEventListener("click", function(){
  addList(language);
})
document.querySelector('.crm').addEventListener("click", function(){
  addList(crm);
})
document.querySelector('.frameworks').addEventListener("click", function(){
  addList(frameworks);
})

document.querySelectorAll('.btn-color').forEach(button => {
    button.classList.add(button.innerText);
    button.addEventListener("click", function(){
      let color = this.innerText;
      let list = document.querySelector('.list-js')
      list.classList.value = '';
      list.classList.add('list-js', color);  
    })
})

new Vue({
  el: '#app',
  data: {
    buttons: ['language', 'crm', 'frameworks'],
    language: ['html', 'css', 'js'],
    crm: ['Wordpress', 'Opencart', 'Joomla!'],
    frameworks: ['Vue', 'React', 'Angular'],
    list: '',
    classes: ['red', 'blue', 'pink'],
    classItem: ''
  }
})

new Vue({
  el: '#root',
  data: {
    show: false,
    colors: {
      red: 'red', 
      blue: 'blue', 
      pink: '#ff00d7'
    },
    setColor: ''
  }
})
