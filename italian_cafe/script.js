// Small, beginner-friendly JavaScript interactions.
document.addEventListener('DOMContentLoaded',function(){
 var hello=document.getElementById('helloButton');
 if(hello){hello.addEventListener('click',function(){window.alert('Welcome to Student Study Hub! Keep learning, one step at a time.');});}
 var search=document.getElementById('resourceSearch');
 if(search){search.addEventListener('input',function(){var q=search.value.toLowerCase().trim();var cards=document.querySelectorAll('[data-resource]');var count=0;cards.forEach(function(card){var show=card.textContent.toLowerCase().includes(q);card.hidden=!show;if(show){count++;}});document.getElementById('searchCount').textContent=count+' resource(s) found';});}
 var checklist=document.querySelectorAll('[data-goal]');
 if(checklist.length){var saved=[];try{saved=JSON.parse(localStorage.getItem('studyGoals')||'[]');}catch(e){saved=[];}checklist.forEach(function(item){item.checked=saved.includes(item.value);item.addEventListener('change',function(){var selected=[];checklist.forEach(function(c){if(c.checked){selected.push(c.value);}});try{localStorage.setItem('studyGoals',JSON.stringify(selected));}catch(e){}updateProgress();});});function updateProgress(){var total=checklist.length;var done=0;checklist.forEach(function(c){if(c.checked){done++;}});document.getElementById('progressLabel').textContent=done+' of '+total+' goals completed';document.getElementById('progressBar').style.width=(done/total*100)+'%';}updateProgress();}
 var form=document.getElementById('contactForm');if(form){form.addEventListener('submit',function(e){e.preventDefault();var name=document.getElementById('visitorName').value.trim();document.getElementById('formStatus').textContent='Thanks, '+name+'! This is a demonstration form; no message was sent.';form.reset();});}
});
