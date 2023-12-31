import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";
import Image from "next/image";

export const About = () => {
  return (
    <Page id="about">
      <main className="grid grid-cols-2">
        <Image
          src="/images/me.jpg"
          alt="Marcin Krueger photo"
          width="512"
          height="512"
          className="rounded-full"
        />
        <div className="flex flex-col gap-6">
          <Text variant="h2">Cześć!</Text>
          <div className="flex flex-col gap-2">
            <Text className="text-justify">
              Mam na imię Marcin i jestem
              Frontend Developerem oraz studentem Sztucznej Inteligencji
              stacjonującym w Poznaniu PL.
            </Text>
            <Text>
              Interesuję się technologiami webowymi, rozwijaniem oprogramowania,
              tworzeniem stron internetowych, organizacją pracy w zespole,
              automatyzacją procesów oraz algorytmami sztucznej inteligencji (w
              szczególności Przetwarzania Języka Naturalnego) 💻.
            </Text>
            <Text>
              Prywatnie aktywny fan podróży 🗺, czytelnik reportaży 📚 oraz
              miłośnik wszystkiego związanego z Wyspami Owczymi 🐑.
            </Text>
            <Text>
              W pracy cenię sobie kontakt z ludźmi, ciągły rozwój oraz regularny
              feedback. Pragnę zdobywać nowe umiejętności, nie tylko techniczne,
              ale i miękkie. Jestem otwarty na różne technologie, jednak
              najpewniej czuję się w:
            </Text>
            <div className="flex flex-row gap-2 flex-wrap">
              <Tag>HTML</Tag>
              <Tag>CSS/SCSS</Tag>
              <Tag>JavaScript</Tag>
              <Tag>TypeScript</Tag>
              <Tag>React</Tag>
              <Tag>Angular</Tag>
              <Tag>Python</Tag>
              <Tag>PyTorch</Tag>
              <Tag>CI/CD</Tag>
              <Tag>Docker</Tag>
              <Tag>Git</Tag>
            </div>
          </div>
          <Button>Pobierz CV</Button>
        </div>
      </main>
    </Page>
  );
};
