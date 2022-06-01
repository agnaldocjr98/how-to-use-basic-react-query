import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditCharacter } from "./edit-character";
import { ListCharacters } from "./list-characters";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCharacters />} />
        <Route path="/character/:id" element={<EditCharacter />} />
      </Routes>
    </BrowserRouter>
  );
};
