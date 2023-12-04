import MeowArticle from "@/components/MeowArticle";
import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function Pants({ params: { slug } }: Props) {
  const productName = await getProduct(slug);

  if (!productName) {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{`${productName} Page!`}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, unde.
        Odio possimus similique eveniet quos assumenda explicabo dignissimos
        libero quo, in sapiente, illo debitis, a laudantium error aspernatur.
        Autem, temporibus?
      </div>
      <MeowArticle />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해주거임(SSG)
  const products = await getProducts();
  return products.map((product) => {
    slug: product.id;
  });
}
