import React, {Component} from "react";
import "./Posts.css";
import Post from "../Post";

class Posts extends Component {
  componentDidMount() {
      this.setState({ posts: [
        {
          user : {
            nickname : "asdasd",
            avatar : ""
          },
          image : "",
          caption : "asdasdas",
          key : "123" 
        }
      ]})
  }

  render() {

    const posts = [
      {
        user : {
          nickname : "Daniel",
          avatar : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        image : "https://www.lifesavvy.com/thumbcache/0/0/31c7385df31261da25272193d5226120/p/uploads/2019/05/daf3eeae-3.jpg",
        caption : "Erasmus!",
        key : "4" 
      },
      {
        user : {
          nickname : "Sophia",
          avatar : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        image : "https://scx2.b-cdn.net/gfx/news/2019/selfiesthepe.jpg",
        caption : "yeaaah boiii",
        key : "3" 
      },
      {
        user : {
          nickname : "Sophia",
          avatar : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        image : "https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg",
        caption : "Feeling great!",
        key : "2" 
      },
      {
        user : {
          nickname : "William",
          avatar : "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        image : "https://cdn.dxomark.com/wp-content/uploads/medias/post-46226/CloserDetailsOutdoor_AppleiPhone11ProMax.jpeg",
        caption : "Nice",
        key : "1" 
      },
    ]

    return (
      <div>
        <div className="Posts">
          {posts
            .slice(0)
            .reverse()
            .map(post => (
              <Post
                nickname={post.user.nickname}
                avatar={post.user.avatar}
                image={post.image}
                caption={post.caption}
                key={post.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Posts;
