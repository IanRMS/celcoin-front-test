import {
  UpdatesCardContainer,
  UpdatesCardImage,
  UpdatesCardInfoContent,
  UpdatesCardInfo,
  UpdatesCardName,
  UpdatesCardStatusInfo,
} from "./styles";

interface UpdatesCardProps {
  name: string;
  status: string;
  date: string;
  image: string;
  test: string;
}

function UpdatesCard({ name, status, date, image, test }: UpdatesCardProps) {
  return (
    <UpdatesCardContainer>
      <UpdatesCardImage src={image} />
      <UpdatesCardInfoContent>
        <UpdatesCardInfo>PACIENTE</UpdatesCardInfo>
        <UpdatesCardName>{name}</UpdatesCardName>
        <UpdatesCardStatusInfo status={status}>
          {status === "completed"
            ? "COMPLETOU O TESTE: "
            : "CANCELOU O TESTE: "}
          <strong>{date}</strong>
        </UpdatesCardStatusInfo>
        <UpdatesCardInfo>REALIZADO EM: {date}</UpdatesCardInfo>
      </UpdatesCardInfoContent>
    </UpdatesCardContainer>
  );
}

export default UpdatesCard;
