import { useLocation } from "react-router-dom";
import { ICharacters } from "./list-characters";
import { useQueryClient } from "react-query";

export const EditCharacter = () => {
  const { state } = useLocation();
  const { name, id } = state as ICharacters;

  const queryClient = useQueryClient();

  function updateName() {
    // aqui vai a requisicao - NODEJS
    // se deu sucesso executa abaixo
    const characters = queryClient.getQueryData<ICharacters[]>("characters");
    if (characters) {
      const newCharacters = characters.map((character) => {
        if (character.id === id) {
          return { ...character, name: "EU ALTEREI O NOME" };
        } else {
          return character;
        }
      });
      queryClient.setQueryData("characters", newCharacters);
    }
  }

  return (
    <div>
      <span>{name}</span>
      <button onClick={updateName}>Alterar</button>
    </div>
  );
};
