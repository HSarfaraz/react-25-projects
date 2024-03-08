import useFetch from "./index.jsx";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  // console.log(data, error, pending);
  return (
    <div>
      <h1>USe Fetch Hook</h1>
      {pending ? <h1>Please wait</h1> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
