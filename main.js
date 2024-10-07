import {getPosts} from "./post.js";
import { addPost } from "./post.js";
// const API_URL ="https://efkxfholvuobcwnoibii.supabase.co/rest/v1";
const postEl = document.querySelector('#posts');
// const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4"
           
// // console.log(API_KEY)
// console.log(fetch)
// console.log(showPostWebView)
 

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
                            <button class="btn btn-error">delete</button>
                        </div>
                    </div>
                </div>
   
    `;
    postEl.appendChild(div);
            
            // console.log(fetch);
  }
  // export async function addPost(newPost = {}) {
  //   const { data, error } = await supabase
      
  //   .from('allpost')
  //   .insert([
  //     { Tittle: `${title}`, Author: `${author}`, content: `${content}` },
  //   ])
  //   .select()
              
  //   // testing the JS script 
      document.querySelector('#add-post').addEventListener('submit',async function(event) {
        event.preventDefault(); // Prevent the default form submission
        // console.log("works")
        // // Get the values from the input fields
        const title = document.getElementById('title').value;
        // console.log(title)
        const author = document.getElementById('author').value;
        // console.log(author)
        const content = document.getElementById('content').value;
        // console.log(content)
        const Date = document.getElementById('date').value
        // console.log(Date)
        // You can now use these values as needed
        // console.log(title, author, content);
        const newPost = {
        Tittle: title,
        Author: author ,
        content: content,
        PublishedDate: Date,
      }
        console.log(newPost)
        const response = await addPost(newPost)
        console.log(response)
        
      });
      
  

  // fetch(`${API_URL}/allpost?select=*&apikey=${API_KEY}`)
  //  .then(response => response.json())
  // .then(response => {
  //     response.forEach(item => showPostWebView(item))})

   
        
  /**
curl 'https://efkxfholvuobcwnoibii.supabase.co/rest/v1/allpost?select=*' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4"
           

const { data, error } = await supabase
  .from('allpost')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()
          

*/