type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  const { slug } = params;
  return (
    <>
      <h1>{`${slug} Page!`}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, unde.
        Odio possimus similique eveniet quos assumenda explicabo dignissimos
        libero quo, in sapiente, illo debitis, a laudantium error aspernatur.
        Autem, temporibus?
      </div>
    </>
  );
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => {
    slug: product;
  });
}
