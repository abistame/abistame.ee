import React from 'react';
import Link from 'next/link';
import Page from "../components/Page";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export default () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Page>
      <Header isRequest>
        <h1>Platform abi vajajatele ja abi pakkujatele.</h1>
      </Header>
      <div className="container">
        <p>
          Kuulutuse jätmiseks lisa oma telefoninumber ja registreeri end
          kasutajaks.
        </p>
        <Input placeholder="Telefoni number" primaryPlaceholder large />
        <Link href="/vajan">
        <Button>
          Saada <img src="/arrow.png" />
        </Button>
        </Link>
      </div>
    </Page>
  );
};
