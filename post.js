import supabase from "./config.js"

export async function getPosts(){
    let {data,error} = await supabase
    .from('allpost')
    .select('*')

    return data;
}

export async function addPost(newPost = {}){
    // TODO: make this work (that is: when I click the submit post, it adds a new post to your supabase database) — ref: see my `prompt.md` file
    // uses the supabase library to add a new post
    // return new post if successfully
    // return an error and the type if couldn't to supabase
}

export function deletePost(id){return `deleting post with ${id}`};
export function updatePost(id, content){return `updating post with ${id}`};