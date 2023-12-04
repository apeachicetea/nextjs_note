import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 판매하는 곳입니다.",
};

export default function ProdutsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const products = ["skirt", "pants", "slipper"];

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
