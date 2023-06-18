import SearchBox from "@/search/SearchBox";
import SearchChefResults from "@/search/SearchChefResults";
import SearchRecipeResults from "@/search/SearchRecipeResults";
import SearchTab from "@/search/SearchTab";
import { type ChefResponse, type RecipeResponse } from "@/search/types/results";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    q?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  if (searchParams.q === undefined) {
    searchParams.q = "";
  }

  const chefs = (await fetch(`https://29xu9p1l3f.microcms.io/api/v1/chef?q=${encodeURIComponent(searchParams.q)}`, {
    headers: {
      "X-MICROCMS-API-KEY": "TsyPrNWEO382U41DYsQrZFL2TlIDE2wuNK4v",
    },
    next: { revalidate: 60 },
  }).then((res) => res.json())) as ChefResponse;

  const recipes = (await fetch(`https://29xu9p1l3f.microcms.io/api/v1/recipe?q=${encodeURIComponent(searchParams.q)}`, {
    headers: {
      "X-MICROCMS-API-KEY": "TsyPrNWEO382U41DYsQrZFL2TlIDE2wuNK4v",
    },
    next: { revalidate: 60 },
  }).then((res) => res.json())) as RecipeResponse;

  return (
    <>
      <SearchBox type={params.slug} />
      <SearchTab type={params.slug} basePath="/search" q={searchParams.q} />

      {params.slug !== "recipe" && <SearchChefResults chefs={chefs} />}

      {params.slug !== "chef" && <SearchRecipeResults recipes={recipes} />}
    </>
  );
}
