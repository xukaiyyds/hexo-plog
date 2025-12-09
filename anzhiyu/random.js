var posts=["posts/5126acfb/","posts/63f29015/","posts/502f1247/","posts/4ae524d/","posts/7a6cbde0/","posts/b15be43a/","posts/324981b4/","posts/7ddf6b3a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };