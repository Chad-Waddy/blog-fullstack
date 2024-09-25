const API_URL ="https://efkxfholvuobcwnoibii.supabase.co/rest/v1/";
const postEl = document.querySelector(`#posts`);
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4"

fetch(`${API_URL}/allpost?select=*&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {data.forEach(item => showPostWebView)});

  function showPostWebView(item ={}){
    const div = document.createElement(`div`);
    div.innerHTML = ` <div class='card bg-base-100 shadow-xl'>
              <div class="card-body">
              <h3 class="card-title">${item['title']}</h3>
              <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['publishedBy']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
    `
    postsEl.appendChild(div);
              
            
  }