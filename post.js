import {supabase} from "./config.js"

export async function getPosts(){
    let {data,error} = await supabase
    .from('allpost')
    .select('*')

    return data;
}

// export async function addPost(newPost = {}){
//     // TODO: make this work (that is: when I click the submit post, it adds a new post to your supabase database) 
//     // uses the supabase library to add a new post
//     // return new post if successfully
//     // return an error and the type if couldn't to supabase
// }

export async function addPost(newPost = {}) {
    try {
  
      const { data, error } = await supabase
        .from('allpost')
        .insert(newPost)
      
// console.log(data) 
// console.log(newPost)

        // forgot the data call ...
        .select();
        // if (!newPost.title || !newPost.content) throw new Error('Title and content required');
       
      if (error) throw error;
      return data[0];
    }
     catch (error) {
      console.error('Error adding post:', error.message);
      return { error: error.message, type: error.name };
    }
  }
  
export function deletePost(id){return `deleting post with ${id}`};
export function updatePost(id, content){return `updating post with ${id}`};