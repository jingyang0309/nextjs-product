import Link from "next/link";
import headerStyle from './header.module.css'

function Header() {
  return (
    <>
      <Link href="/products/csr" className={headerStyle.link}>
        CSR
      </Link>
      <Link href="/products/ssr" className={headerStyle.link}>
        SSR
      </Link>
      <Link href="/products/ssg" className={headerStyle.link}>
        SSG
      </Link>
    </>
  );
}
export default Header;
