async function Page({
  params,
}: {
  params: Promise<{ pageno: string }>;
}) {
  const { pageno } = await params;

  const page = Number(pageno);

  const startingIndex = (page - 1) * 10 + 1;
  const endIndex = page * 10;

  return (
    <div>
      <h1>Starting Index: {startingIndex}</h1>
      <h1>End Index: {endIndex}</h1>
    </div>
  );
}

export default Page;
