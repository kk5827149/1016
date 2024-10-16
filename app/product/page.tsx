'use client';

import styles from '../page.module.css'
import ProductList from './productList'
export default function Home() {
  return (<div className={styles.page}>
    <h1>Product</h1>
    <ProductList />
  </div>)
}

// 0925上課內容-2
// import Click from './click';
// import styles from './page.module.css'
// export default function Home() {

//   return (
//   <div className={styles.page}>
//     <Click/>
//     <Click/>
//     <Click/>
//   </div>)
// }

// 0925上課內容-1
// import styles from "./page.module.css";
// import MyName,{Test as T} from "./myname";
// export default function Home() {
//   return (<div className={styles.page}>
//     <h1>Hello</h1>
//     <MyName/>
//     <T/>
//     </div>
//     )
// }

// React練習作業1
// export default function Home() {
//   const [nums, setNums] = useState<number[]>([]);
//   function handleClick() {
//     let num = Math.floor(Math.random() * 10);
//     setNums(nums => [...nums, num]);
//   }
//   let numbers = nums.map((value)=>value+" ");
//   return (
//   <div className={styles.page}>
//     <h1>Hello</h1>
//     {numbers}
//     <button onClick={handleClick}>Click Me</button>
//   </div>)
// }


// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
