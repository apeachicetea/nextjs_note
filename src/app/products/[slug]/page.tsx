type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  const { slug } = params;
  return <h1>{`${slug} Page!`}</h1>;
}
