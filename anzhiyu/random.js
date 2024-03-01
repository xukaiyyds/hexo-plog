var posts=["posts/5126acfb/","posts/4ae524d/","posts/7ddf6b3a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };