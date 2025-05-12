
import Link from "next/link";
import SearchSection from "@/components/search-section";



export default async function Home() {
  const data = await getRestaurants();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">RecomendAI</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            {/* <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button> */}
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 sm:px-6 sm:py-8 mx-auto">
        <SearchSection initialRestaurants={data.restaurants} />
      </main>
    </div>
  );
}

async function getRestaurants() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const res = await fetch(`${apiUrl}/restaurants`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch restaurants data');
  }

  return res.json();
}
