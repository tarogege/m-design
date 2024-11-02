import * as React from "react";
import { Button, TooltipLinkList, WithTooltip } from "@storybook/components";
import { defaultTheme, ThemeIds, themes } from "../themes";
import { useGlobals } from "@storybook/manager-api";
import { THEME_ID } from "../constants";

function createThemeItems(
  value: typeof themes,
  changeTheme: (id: ThemeIds) => void,
  getCurrentTheme: () => ThemeIds
) {
  return value.map((item) => ({
    id: item.id,
    onClick: () => changeTheme(item.id),
    value: item.id,
    title: item.id === defaultTheme.id ? `${item.label} (Default)` : item.label,
    active: getCurrentTheme() === item.id,
  }));
}

export const ThemePicker = () => {
  const [globals, updateGlobals] = useGlobals();

  const selectedThemeId = globals[THEME_ID] ?? defaultTheme.id;
  const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);

  const isActive = selectedThemeId !== defaultTheme.id;

  const setTheme = React.useCallback(
    (id: ThemeIds) => {
      updateGlobals({ [THEME_ID]: id });
    },
    [updateGlobals]
  );

  const renderTooltip = React.useCallback(
    (props: { onHide: () => void }) => {
      return (
        <TooltipLinkList
          links={createThemeItems(
            themes,
            (id) => {
              setTheme(id);
              props.onHide();
            },
            () => selectedThemeId
          )}
        />
      );
    },
    [selectedThemeId, setTheme]
  );
  return (
    <>
      {" "}
      <WithTooltip placement="top" trigger="click" tooltip={renderTooltip}>
        <Button key={THEME_ID} title="Change Fish theme" active={isActive}>
          <span style={{ marginLeft: 5 }}>主题: {selectedTheme?.label}</span>
        </Button>
      </WithTooltip>
    </>
  );
};
