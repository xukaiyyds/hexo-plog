var posts=["posts/5126acfb/","posts/324981b4/","posts/63f29015/","posts/4ae524d/","posts/7ddf6b3a/","posts/aa69e2e9/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };