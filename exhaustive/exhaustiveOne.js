// @flow

// Setup: You have a twitter-like app where you can display posts up to 255
//        chars or images:

type tPostTypes = 'photo' | 'text';

declare function displayPhoto(): void;
declare function displayText(): void;

function displayPostOne(post: tPostTypes){
  switch(post){
    case 'photo':
      displayPhoto();
      return;
    case 'text':
      displayText();
      return;
  }
}
