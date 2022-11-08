const inputTab = document.querySelector("#bkm-input");
const saveBtn = document.querySelector(".input-btn");
const tabBtn = document.querySelector(".tab-btn");
const delBtn = document.querySelector(".del-btn");
const link = document.querySelector(".links");

let myLinks = []

let storage = JSON.parse(localStorage.getItem('links'))

if(storage){
  myLinks = storage
  myLinkLeads()
}

saveBtn.addEventListener("click", () => {
  let inputLink = inputTab.value;
  myLinks.push(inputLink);
  inputTab.value = ''

  localStorage.setItem('links', JSON.stringify(myLinks))
  myLinkLeads()
  
});

tabBtn.addEventListener('click', () => {
  chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{

    myLinks.push(tabs[0].url);
    localStorage.setItem('links', JSON.stringify(myLinks))
    myLinkLeads()

  });
})

delBtn.addEventListener('dblclick', ()=>{
  link.innerHTML = '';
  localStorage.clear();
  myLinks = [];
  myLinkLeads()

})


function myLinkLeads(){
  let myLeads = '';

  for (let i = 0; i < myLinks.length; i++) {
    let links = myLinks[i];

    myLeads += `<li class="link">
                    <a target="_blank" href="${links}">
                      ${links}
                    </a>

                    
                <li>`;
    link.innerHTML = myLeads
  }
}

console.log(myLinks)

