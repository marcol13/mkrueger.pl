"use client"

import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

export const Contact = () => {
  return (
    <Page id="contact">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Text variant="p">Pogadajmy o wszystkim!</Text>
          <Text variant="p">
            Nie lubisz formularzy? Napisz do mnie maila! 🥳
          </Text>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Imię i nazwisko" />
            <Input label="E-mail" type="email" />
            <Input label="Temat" className="col-start-1 col-end-3" />
            <Input label="Wiadomość" type="longText" className="col-start-1 col-end-3"/>
          </div>
          <Button>Wyślij wiadomość</Button>
        </form>
      </div>
    </Page>
  );
};
