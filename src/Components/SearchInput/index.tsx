import COLORS from "../../constants/colors";
import { Icon } from "@iconify/react";
import searchOutlined from "@iconify-icons/ant-design/search-outlined";

import { SearchInputContainer, Input } from "./styles";

interface SearchInputProps {
  placeholder: string;
}

function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <Icon icon={searchOutlined} width={20} color={COLORS.gray} />
      <Input placeholder={placeholder} />
    </SearchInputContainer>
  );
}

export default SearchInput;
