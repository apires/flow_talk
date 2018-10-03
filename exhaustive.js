// @flow

type PostTypes = 'photo' | 'text';

// Example 1
// Prevent handling

function displayPost(post: PostTypes){
  switch(post){
    case 'photo':
      console.log('This is a photo!');
      return;
    default:
      (post: empty);
  }
}

// Example 2
// Make sure you've handled all cases
function displayPostTwo(post: PostTypes){
  switch(post){
    case 'photo':
      console.log('This is a photo!');
      return;
    case 'text':
      console.log("This is text");
      return;
    default:
      (post: empty);
  }
}

// Example 3
// Fake sure you fail early on changes
// In this scenario you have a new requirement for a new post type.

type NewPostTypes = 'photo' | 'text' | 'ad';

function badDisplayPostThree(post: NewPostTypes){
  switch(post){
    case 'photo':
      console.log('This is a photo!');
      return;
    default:
      console.log('This is a text');
  }
}
function displayPostThree(post: NewPostTypes){
  switch(post){
    case 'photo':
      console.log('This is a photo!');
      return;
    case 'text':
      console.log("This is text");
      return;
    default:
      (post: empty);
  }
}
