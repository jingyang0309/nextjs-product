import Link from "next/link";
import headerStyle from './header.module.css'

function Header() {
  return (
    <>
      <Link href={"/"} className={headerStyle.link}>
        首頁
      </Link>
      <Link href="/products" className={headerStyle.link}>
        CSR,backend,mongodb
      </Link>
      <Link href="/productsssr" className={headerStyle.link}>
        SSR
      </Link>
      <Link href="/productsssg" className={headerStyle.link}>
        SSG
      </Link>
    </>
  );
}
export default Header;
