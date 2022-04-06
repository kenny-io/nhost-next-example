import "../styles/globals.css";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  backendUrl: "https://tklyqmgppeumgnnfvitq.nhost.run",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
