import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/Button";
import { Pencil } from "../../../shared/ui/icons/pencil";

interface EditClientProps {
  id: string;
}

export function EditClient({ id }: EditClientProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/clients/${id}/edit`);
  };

  return (
    <Button icon={<Pencil />} onClick={handleClick}>
      Редактировать
    </Button>
  );
}
