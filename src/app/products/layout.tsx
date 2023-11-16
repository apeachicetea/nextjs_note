import Link from "next/link";
import styles from "./layout.module.css";

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
