import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Posts({posts}) {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );
  //   return unsubscribe;
  // }, [db]); 
  // console.log(posts)
  const postsSorted = posts.sort((a , b) => { return b.timestamp.nanoseconds < a.timestamp.nanoseconds})
  return (
    <div>
      {postsSorted.map((post) => (
        <Post
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.profileImg}
        img={post.image}
        caption={post.caption}
        />
      ))}
    </div>
  );
}

{/* <Post
          key={post.id}
          id={post.id}
          username={post.data()?.username}
          userImg={post.data()?.profileImg}
          img={post.data()?.image}
          caption={post.data()?.caption}
        /> */}