import {createClient} from "@supabase/supabase-js"

// export async function addPost(newPost = {}) {
//   try {
//     // Validate the newPost object
//     if (!newPost.title || !newPost.content) {
//       throw new Error('Title and content are required');
//     }

//     // Insert the new post into the 'posts' table
//     const { data, error } = await supabase
//       .from('posts')
//       .insert([
//         {
//           title: newPost.title,
//           content: newPost.content,
//           author: newPost.author || 'Anonymous', // Assuming you might want an author field
//           created_at: new Date().toISOString(),
//         }
//       ])
//       .select();

//     if (error) throw error;

//     // Return the newly created post
//     return data[0];
//   } catch (error) {
//     console.error('Error adding new post:', error.message);
//     return { error: error.message, type: error.name };
//   }
// }

export async function addPost(newPost = {}) {
    try {
      if (!newPost.title || !newPost.content) throw new Error('Title and content required');
  
      const { data, error } = await supabase
        .from('posts')
        .insert({ ...newPost, created_at: new Date().toISOString() })
        .select();
  
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error('Error adding post:', error.message);
      return { error: error.message, type: error.name };
    }
  }

  // this is the add colom from supabase 
  
const { data, error } = await supabase
.from('allpost')
.insert([
  { some_column: 'someValue', other_column: 'otherValue' },
])
.select()
        

/** this are the ids for the current list 
 * title
 * author
 * content
 * 
 * function insertText() {
    // Get the value from the input field
    const input = document.getElementById('title').value;
    
    // Insert the value into the paragraph
    document.getElementById('post').innerText = input;
}
 */