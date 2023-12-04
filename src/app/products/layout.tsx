import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";
import { getProducts } from "@/service/products";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 판매하는 곳입니다.",
};

export default function ProdutsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = getProducts();

  return (
    <>
      <header className={styles.header}>
        {/* Include shared UI here e.g. a header or sidebar */}
        {products.map((el) => (
          <Link href={`/products/${el}`} key={el}>
            <nav>{el}</nav>
          </Link>
        ))}
      </header>
      <section className={styles.section}>{children}</section>
    </>
  );
}
