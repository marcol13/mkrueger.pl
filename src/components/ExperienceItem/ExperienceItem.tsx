import { Text } from "../Text/Text";

type PropTypes = {
  title: string;
  description: string | string[];
  experience?: string[];
};

export const ExperienceItem = ({
  title,
  description,
  experience,
}: PropTypes) => {
  return (
    <div>
      <Text variant="h3">{title}</Text>
      {Array.isArray(description) ? (
        <ul>
          {description.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      ) : (
        <Text>{description}</Text>
      )}
      {experience?.map((el) => el)}
    </div>
  );
};
