var posts=["posts/d87f7e0c/","posts/b15be43a/","posts/7ddf6b3a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };