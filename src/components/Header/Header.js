 import './Header.css';

 export default function Header () {
    return (
        <span onClick={() => window.scroll(0, 0)} className="header">
            🎬 Movies Bucket 🎥
        </span>
    )
 }