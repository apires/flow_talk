// @flow

// You have to make money now by introducing another post type: AD

type tPostTypes = 'photo' | 'text' | 'ad';


declare function displayPhoto(): void;
declare function displayText(): void;

// Example 2
// Make sure you've handled all cases
function displayPostTwo(post: tPostTypes){
  switch(post){
    case 'photo':
      displayPhoto();
      return;
    case 'text':
      displayText();
      return;
  }
}
