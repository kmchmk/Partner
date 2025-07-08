import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Terms from "./Terms";
import Privacy from "./Privacy";
import SignUp from "./Components/Auth/SignUp";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserProfileEdit from "./Components/UserProfile/UserProfileEdit";
import ProfileVerification from "./Components/UserProfile/ProfileVerification";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://partner.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret":
              "m7TZhx5yQRr2VMyWACoPvkxvYkxke1joHwYzIChJMzW7edvVGT8t4b2YPEZ4AUSa",
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <UserProfile />
              </Layout>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <Layout>
                <UserProfileEdit />
              </Layout>
            }
          />
          <Route
            path="/profile/verify"
            element={
              <Layout>
                <ProfileVerification />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
