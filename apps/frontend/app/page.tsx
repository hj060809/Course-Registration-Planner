import client from "@/libs/apolloClient";
import { ApolloProvider } from "@apollo/client/react"

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>
          Welcome
        </h1>
      </main>
    </ApolloProvider>
  );
}
