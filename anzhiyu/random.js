var posts=["posts/5126acfb/","posts/324981b4/","posts/63f29015/","posts/4ae524d/","posts/7ddf6b3a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };