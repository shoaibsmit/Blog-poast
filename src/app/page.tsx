// 'use client';


// import HelloWorld from "./helloworld";
// import StudentList from "./studentlist";

// export default function Home() {
//   const signup = ()=>{
//     console.log("This is signup func.");
//   }
//   const login = ()=>{
//     console.log("This is Login func.");
//   }
//   const forgetPassword = ()=>{
//     console.log("This is Forget Password func.");
//   }

//   return (
//     <>
//       <HelloWorld
//         greet="Assalamuaalikum"
//         message="The quick brown fox jumps over the lazy dog."
//         label="Signup"
//         btnHandler={signup}
//       />

//       <HelloWorld
//         greet="Hello"
//         message="How are you?"
//         label="Login"
//         btnHandler={login}
//       />

//       <HelloWorld
//         greet="Eid Mubarak"
//         message="Eidi lete"
//         label="Forget Password"
//         btnHandler={forgetPassword}

//       />


//       <StudentList />
//     </>
//   )
// }































// 'use client';

// import { useState } from 'react';
// import HelloWorld from './helloworld';
// import StudentList from './studentlist';

// export default function Home() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [blogTitle, setBlogTitle] = useState('');
//   const [blogContent, setBlogContent] = useState('');
//   const [error, setError] = useState('');

//   const adminUsername = 'admin';
//   const adminPassword = 'password123';

//   const login = (username: string, password: string) => {
//     if (username === adminUsername && password === adminPassword) {
//       setIsAdminLoggedIn(true);
//       setError('');
//     } else {
//       setError('Incorrect username or password');
//     }
//   };

//   const handleBlogPost = () => {
//     if (blogTitle && blogContent) {
//       console.log("New Blog Post:", {
//         title: blogTitle,
//         content: blogContent,
//       });
//       setBlogTitle('');
//       setBlogContent('');
//       alert('Blog post created successfully!');
//     } else {
//       alert('Please fill in both the title and content.');
//     }
//   };

//   return (
//     <>
//       {!isAdminLoggedIn ? (
//         <div>
//           <h2>Admin Login</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const username = (e.target as any).username.value;
//               const password = (e.target as any).password.value;
//               login(username, password);
//             }}
//           >
//             <label>
//               Username:
//               <input type="text" name="username" />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input type="password" name="password" />
//             </label>
//             <br />
//             <button type="submit">Login</button>
//           </form>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//       ) : (
//         <div>
//           <h2>Create a Blog Post</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleBlogPost();
//             }}
//           >
//             <label>
//               Title:
//               <input
//                 type="text"
//                 value={blogTitle}
//                 onChange={(e) => setBlogTitle(e.target.value)}
//               />
//             </label>
//             <br />
//             <label>
//               Content:
//               <textarea
//                 value={blogContent}
//                 onChange={(e) => setBlogContent(e.target.value)}
//               />
//             </label>
//             <br />
//             <button type="submit">Post Blog</button>
//           </form>
//         </div>
//       )}


//       <StudentList />
//     </>
//   );
// }







































'use client';

import { useState } from 'react';
import StudentList from './studentlist';

export default function Home() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const adminUsername = 'admin';
  const adminPassword = 'password123';

  const login = (username: string, password: string) => {
    if (username === adminUsername && password === adminPassword) {
      setIsAdminLoggedIn(true);
      setError('');
    } else {
      setError('Incorrect username or password');
    }
  };

  const handleBlogPost = () => {
    if (blogTitle && blogContent) {
      const newPost = { title: blogTitle, content: blogContent };
      setPosts([newPost, ...posts]);
      setBlogTitle('');
      setBlogContent('');
      alert('Blog post created successfully!');
    } else {
      alert('Please fill in both the title and content.');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>My Blog</h1>
        {isAdminLoggedIn ? (
          <button style={styles.navButton} onClick={() => setIsAdminLoggedIn(false)}>Logout</button>
        ) : (
          <button style={styles.navButton} onClick={() => setIsAdminLoggedIn(false)}>Login</button>
        )}
      </nav>

      {/* Main Content */}
      <div style={styles.container}>
        {!isAdminLoggedIn ? (
          <div style={styles.loginContainer}>
            <h2 style={styles.heading}>Sign in to Admin</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = (e.target as any).username.value;
                const password = (e.target as any).password.value;
                login(username, password);
              }}
              style={styles.form}
            >
              <label style={styles.label}>
                Username:
                <input type="text" name="username" style={styles.input} />
              </label>
              <label style={styles.label}>
                Password:
                <input type="password" name="password" style={styles.input} />
              </label>
              <button type="submit" style={styles.submitButton}>Login</button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
          </div>
        ) : (
          <div style={styles.blogContainer}>
            <h2 style={styles.heading}>Create a Blog Post</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBlogPost();
              }}
              style={styles.form}
            >
              <label style={styles.label}>
                Title:
                <input
                  type="text"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Content:
                <textarea
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  style={styles.textarea}
                />
              </label>
              <button type="submit" style={styles.submitButton}>Post Blog</button>
            </form>
            
            {/* Displaying Blog Posts */}
            <div style={styles.postsContainer}>
              <h2 style={styles.postsHeading}>Blog Posts</h2>
              {posts.length === 0 ? (
                <p>No blog posts available.</p>
              ) : (
                posts.map((post, index) => (
                  <div key={index} style={styles.post}>
                    <h3 style={styles.postTitle}>{post.title}</h3>
                    <p style={styles.postContent}>{post.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      <StudentList />
    </>
  );
}

// CSS-in-JS styles for simplicity
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#24292e',
    color: 'white',
  },
  navTitle: {
    fontSize: '1.5rem',
  },
  navButton: {
    backgroundColor: '#2da44e',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f6f8fa',
  },
  loginContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  blogContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    color: '#24292e',
  },
  input: {
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #d1d5da',
  },
  textarea: {
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #d1d5da',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#2da44e',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
  postsContainer: {
    marginTop: '2rem',
  },
  postsHeading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  post: {
    backgroundColor: '#f6f8fa',
    padding: '1rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  postTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#24292e',
  },
  postContent: {
    color: '#333',
  },
};
