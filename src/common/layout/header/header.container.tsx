import HeaderPresenter from "./header.presenter";
export interface IDarkMode {
  isDark: Boolean;
  toggleDarkMode: () => void;
}
export default function HeaderContainer(props: IDarkMode) {
  return (
    <HeaderPresenter
      isDark={props.isDark}
      toggleDarkMode={props.toggleDarkMode}
    />
  );
}
