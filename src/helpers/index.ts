import { ICharacter, IComic } from "../interfaces";

export const decodeUrl = (params: string): void => {
  const comicsParams = decodeURIComponent(params).split("|");
  // TODO: Ver donde guardo las demás...

  const firstTitle = comicsParams[0];
  const title = firstTitle.slice(0, firstTitle.indexOf("("));
  const [year, issueNr] = firstTitle.slice(firstTitle.indexOf("(")).split(" ");

  console.log(title);
  console.log(year.replace("(", "").replace(")", ""));
  console.log(issueNr.replace("#", ""));
};

export const hideScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const showScroll = (): void => {
  document.body.style.overflow = "unset";
};

export function isCharacter(item: ICharacter | IComic): item is ICharacter {
  return (item as ICharacter).name !== undefined;
}
