import {getPosts} from "./post.js";
// const API_URL ="https://efkxfholvuobcwnoibii.supabase.co/rest/v1";
const postEl = document.querySelector('#posts');
// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4"
           
// console.log(API_KEY)
console.log(fetch)
console.log(showPostWebView)
 

getPosts()
        // .forEach(item => showPostWebView(item))
        .then(data => {
          console.log(data)
          data.forEach(item => console.log(item))
          data.forEach(item => showPostWebView(item))
        })

function showPostWebView(item ={}){
    const div = document.createElement(`div`);
    div.innerHTML = ` 
    <div class='card bg-base-100 shadow-xl'>
              <div class="card-body">
              <h3 class="card-title">${item['Tittle']}</h3>
              <p class="text-gray-600">Published on: ${item['PublishedDate']} by ${item['Author']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
   
    `;
    postEl.appendChild(div);
            
            console.log(fetch);
  }
  // fetch(`${API_URL}/allpost?select=*&apikey=${API_KEY}`)
  //  .then(response => response.json())
  // .then(response => {
  //     response.forEach(item => showPostWebView(item))})

   
        
  /**
curl 'https://efkxfholvuobcwnoibii.supabase.co/rest/v1/allpost?select=*' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4"
           */