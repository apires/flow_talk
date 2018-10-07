// @flow

// You have to make money now by introducing another post type: AD

type tPostTypes = 'photo' | 'text' | 'ad';


declare function displayPhoto(): void;
declare function displayText(): void;

// Example 3, 2 but with an exhaustive check

function displayPostTwo(post: tPostTypes){
  switch(post){
    case 'photo':
      displayPhoto();
      return;
    case 'text':
      displayText();
      return;
    default:
      (post: empty);
  }
}
